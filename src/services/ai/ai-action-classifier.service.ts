import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { sequelize } from '../../database/db';
import { logger } from '../../logger/logger';
import {
	Cart,
	CartProduct,
	Order,
	PendingOrder,
	PriceList,
	Product,
	User,
	UserAddress,
	WAMessage,
	WAMessageAiActionError,
} from '../../models/models';
import { deleteTempFile, hashPassword, normalizePhone, saveBufferToTemp } from '../../utils/utils';
import { AppService } from '../app.service';
import { ShippingService } from '../shipping.service';
import { WhatsAppService } from '../whatsapp/whatsapp.service';
import {
	AI_ACTION_CLASSIFIER_PROVIDER_TOKEN,
	AIActionClassifierProvider,
} from './ai-agent.providers';
import { ConversationHistoryService } from './conversation-history.service';

export type AIIntentAction =
	| 'TRACK_ORDER'
	| 'PLACE_ORDER'
	| 'CANCEL_ORDER'
	| 'DOWNLOAD_INVOICE'
	| 'UNKNOWN';

export type AIActionClassifierResult = {
	action: `${AIIntentAction}`;
	confidence: number;
	extracted: {
		orderId: string | null;
		phone: string | null;
		address: string | null;
		deliveryName: string | null;
		city: string | null;
		state: string | null;
		country: string | null;
		pincode: string | null;
		entities: Record<string, unknown>;
	};
	reason: string;
	rawMessage: string;
};

export type AIActionResult = {
	action: AIIntentAction;
	response: string;
	confident: boolean;
};

type AiClassifierConfig = {
	confidenceThreshold: number;
};

@Injectable()
export class AIActionClassifierService {
	constructor(
		@Inject(AI_ACTION_CLASSIFIER_PROVIDER_TOKEN)
		private readonly provider: AIActionClassifierProvider,
		private readonly whatsAppService: WhatsAppService,
		private readonly appService: AppService,
		private readonly conversationHistoryService: ConversationHistoryService,
		private readonly shippingService: ShippingService,
	) {}

	private getConfig(): AiClassifierConfig {
		const thresholdRaw = process.env.AI_CONFIDENCE_THRESHOLD ?? '0.8';
		const confidenceThreshold = Number(thresholdRaw);
		return {
			confidenceThreshold: Number.isFinite(confidenceThreshold) ? confidenceThreshold : 0.8,
		};
	}

	/**
	 * Creates a normalized phone WHERE clause for DB queries.
	 * Normalizes DB phone column by removing +, space, - and compares last 10 digits with input.
	 */
	private getNormalizedPhoneWhereClause(phoneColumn: string, normalizedInput: string) {
		return sequelize.where(
			sequelize.fn(
				'RIGHT',
				sequelize.fn(
					'REPLACE',
					sequelize.fn(
						'REPLACE',
						sequelize.fn('REPLACE', sequelize.col(phoneColumn), '+', ''),
						' ',
						'',
					),
					'-',
					'',
				),
				10,
			),
			normalizedInput.slice(-10),
		);
	}

	private async saveOutboundMessage(
		phone: string,
		message: string,
		rawMesssageId: string = '',
	): Promise<void> {
		try {
			await WAMessage.create({
				name: 'bot',
				whatsappNumber: `91${phone}`,
				timestamp: Number(new Date()),
				type: 'outbound',
				message,
				action: 'OUTBOUND',
				rawMesssageId,
			});
		} catch (error) {
			logger.warn(`Failed to save outbound message: ${error}`);
		}
	}

	async executeAction(result: AIActionClassifierResult): Promise<AIActionResult> {
		const { confidenceThreshold } = this.getConfig();
		const confident = result.confidence >= confidenceThreshold;

		switch (result.action) {
			case 'TRACK_ORDER':
				return {
					action: 'TRACK_ORDER',
					response: await this.handleTrackOrder(result.extracted.phone, result.extracted.orderId),
					confident,
				};
			case 'CANCEL_ORDER': {
				const cancelPendingOrder = result.extracted.entities?.cancelPendingOrder === true;
				const { phone } = result.extracted;
				const normalizedPhone = phone ? normalizePhone(phone) : null;
				const {orderId} = result.extracted;

				// AI-directed cancellation: cancel the pending order for this phone
				if (cancelPendingOrder && normalizedPhone) {
					const pendingOrder = await PendingOrder.findOne({
						where: { phone: this.getNormalizedPhoneWhereClause('phone', normalizedPhone) },
					});
					if (pendingOrder) {
						await pendingOrder.destroy();
						const responseText = 'Your order has been cancelled.';
						if (phone) {
							const textResponse_c1 = await this.whatsAppService.sendText({
								phone,
								text: responseText,
							});
							await this.saveOutboundMessage(phone, responseText, textResponse_c1.messages[0].id);
						}
						return { action: 'CANCEL_ORDER', response: responseText, confident };
					}
				}

				// Check if this is a confirmation response (user said "yes" to confirm cancellation)
				// The AI reason should indicate "confirmed" or "cancellation"
				const isConfirmationResponse =
					result.reason.toLowerCase().includes('confirmed') &&
					result.reason.toLowerCase().includes('cancellation');

				// If user confirmed with "yes" and we have an orderId, execute the cancellation directly
				if (isConfirmationResponse && orderId && normalizedPhone) {
					const order = await this.findOrderByIdAndPhone(orderId, normalizedPhone);
					if (order) {
						const orderStatus = order.toJSON()?.status?.toLowerCase() ?? '';
						const nonCancellableStatuses = ['delivered', 'cancelled', 'shipped', 'packed'];
						if (nonCancellableStatuses.includes(orderStatus)) {
							const responseText = `Your order (ID: ${orderId}) cannot be cancelled as it is already ${orderStatus}.`;
							if (phone) {
								const textResponse_c2 = await this.whatsAppService.sendText({
									phone,
									text: responseText,
								});
								await this.saveOutboundMessage(phone, responseText, textResponse_c2.messages[0].id);
							}
							return { action: 'CANCEL_ORDER', response: responseText, confident };
						} else {
							// Actually cancel the order - get user first, then update order
							const userAddress = await UserAddress.findOne({
								where: { phone: this.getNormalizedPhoneWhereClause('phone', normalizedPhone) },
							});
							if (userAddress) {
								await Order.update(
									{ status: 'Cancelled' },
									{ where: { id: parseInt(orderId), userAddressId: userAddress?.get('id') } },
								);
							}
							const responseText = `Your order (ID: ${orderId}) has been cancelled successfully.`;
							if (phone) {
								const textResponse_c3 = await this.whatsAppService.sendText({
									phone,
									text: responseText,
								});
								await this.saveOutboundMessage(phone, responseText, textResponse_c3.messages[0].id);
							}
							return { action: 'CANCEL_ORDER', response: responseText, confident };
						}
					} else {
						const responseText = 'The Order ID is not found for your phone number';
						if (phone) {
							const textResponse_c4 = await this.whatsAppService.sendText({
								phone,
								text: responseText,
							});
							await this.saveOutboundMessage(phone, responseText, textResponse_c4.messages[0].id);
						}
						return { action: 'CANCEL_ORDER', response: responseText, confident };
					}
				}

				// Otherwise, ask for confirmation as before
				return {
					action: 'CANCEL_ORDER',
					response: await this.handleCancelOrder(result.extracted.phone, result.extracted.orderId),
					confident,
				};
			}
			case 'DOWNLOAD_INVOICE':
				return {
					action: 'DOWNLOAD_INVOICE',
					response: await this.handleDownloadInvoice(
						result.extracted.phone,
						result.extracted.orderId,
					),
					confident,
				};
			case 'PLACE_ORDER': {
				const matchedProducts =
					(result.extracted.entities?.matchedProducts as Array<{
						productName: string;
						quantity?: number;
					}>) ?? [];
				const { phone } = result.extracted;
				const normalizedPhone = phone ? normalizePhone(phone) : null;
				const extractedAddress = result.extracted.address;
				const extractedDeliveryName = result.extracted.deliveryName;
				const extractedCity = result.extracted.city;
				const extractedState = result.extracted.state;
				const extractedCountry = result.extracted.country;
				const extractedPincode = result.extracted.pincode;
				const rawMessage = result.rawMessage?.trim().toLowerCase() ?? '';
				const cancelPendingOrder = result.extracted.entities?.cancelPendingOrder === true;
				const useExistingAddress = result.extracted.entities?.useExistingAddress === true;
				const askNewAddress = result.extracted.entities?.askNewAddress === true;

				// Find pending order for this phone
				let pendingOrder = normalizedPhone
					? await PendingOrder.findOne({
							where: { phone: this.getNormalizedPhoneWhereClause('phone', normalizedPhone) },
						})
					: null;
				// Handle address confirmation "no" from AI (ask for new address) - MUST check BEFORE cancelPendingOrder
				// This handles "no" response to address confirmation prompt
				// Detect "no" directly from the message if AI didn't set askNewAddress
				const rawMsgLower = rawMessage?.trim().toLowerCase() ?? '';
				const isNegative = /^(no|nah|nope|n|never)$/i.test(rawMsgLower);
				const pendingData = pendingOrder?.toJSON();
				const savedAddressInPending = pendingData?.address || pendingData?.deliveryAddress;
				const detectedAskNewAddress = isNegative && pendingOrder && savedAddressInPending;
				if ((askNewAddress || detectedAskNewAddress) && pendingOrder) {
					const responseText = 'Please provide your delivery address with name.';
					if (phone) {
						const textResponse_p1 = await this.whatsAppService.sendText({
							phone,
							text: responseText,
						});
						await this.saveOutboundMessage(phone, responseText, textResponse_p1.messages[0].id);
						await pendingOrder.update({ confirmed: null });
					}
					return { action: 'PLACE_ORDER', response: responseText, confident };
				}

				// AI-directed cancellation: AI signaled cancelPendingOrder when user said "no" to confirmation
				if (cancelPendingOrder && pendingOrder) {
					await pendingOrder.destroy();
					const responseText = 'Your order has been cancelled.';
					if (phone) {
						const textResponse_p2 = await this.whatsAppService.sendText({
							phone,
							text: responseText,
						});
						await this.saveOutboundMessage(phone, responseText, textResponse_p2.messages[0].id);
					}
					return { action: 'PLACE_ORDER', response: responseText, confident };
				}

				// Handle address confirmation "yes" from AI
				// IMPORTANT: When useExistingAddress is true, we should ONLY process this case
				// and NOT fall through to the plain "yes" handler (lines 232-313)
				// because that would cause duplicate order creation
				if (useExistingAddress && pendingOrder) {
					const pendingData = pendingOrder.toJSON();
					if (pendingData.confirmed === null) {
						// Proceed to create order using the existing matched address
						const user = await User.findOne({
							where: { phone: this.getNormalizedPhoneWhereClause('phone', normalizedPhone) },
						});
						let userAddress = null;
						const address = pendingData.address ?? '';
						const pincode = await this.extractPincodeFromAddress(address, normalizedPhone);

						if (user) {
							const existingAddresses = await UserAddress.findAll({
								where: { userId: user.toJSON().id },
							});
							userAddress = existingAddresses.find((addr) => {
								const addrLine1 = addr.toJSON().addressLine1?.toLowerCase() ?? '';
								return addrLine1 === address.toLowerCase();
							});
							if (!userAddress) {
								userAddress = existingAddresses.find((addr) => {
									const addrPincode = addr.toJSON().pincode;
									return addrPincode === pincode && pincode !== '';
								});
							}
						}

						if (userAddress) {
							await pendingOrder.update({ confirmed: true });
							// Calculate shipping properly
							const products =
								(pendingData.products as Array<{ productName: string; quantity?: number }>) ?? [];
							const { totalWeight, orderTotal } = await this.calculateOrderTotalWithoutShipping(
								products,
								pincode,
							);
							const shippingCost = this.shippingService.calculateShippingCost(
								pincode,
								totalWeight,
								'Home Delivery',
							);
							const orderTotalWithShipping = orderTotal + shippingCost;
							const order = await this.createOrderFromPending(
								pendingOrder,
								shippingCost,
								userAddress,
								false,
							);
							if (order) {
								const orderId = order.toJSON().id;
								const responseText = `Your order has been placed! Order ID: ${orderId}`;
								if (phone) {
									await this.whatsAppService.sendText({ phone, text: responseText });
									// Fire and forget - send invoice and payment request separately
									// This ensures user gets the order confirmation even if invoice generation fails
									this.sendOrderInvoiceWithPaymentRequest(
										order,
										phone,
										orderTotalWithShipping,
									).catch((err) => {
										logger.error(`Failed to send order invoice: ${err}`);
									});
								}
								return { action: 'PLACE_ORDER', response: responseText, confident };
							} else {
								// Order creation failed after address was matched
								const responseText = 'Failed to create order. Please try again.';
								if (phone) {
									await this.whatsAppService.sendText({ phone, text: responseText });
								}
								return { action: 'PLACE_ORDER', response: responseText, confident };
							}
						}
						// useExistingAddress was set but no matching address found in DB
						// This shouldn't normally happen if the flow is correct, but to be safe,
						// we should NOT fall through to the plain "yes" handler below
						// Instead, ask user to provide their address
						const responseText =
							'Could not find the matching address. Please provide your delivery address with name.';
						if (phone) {
							const textResponse_p4 = await this.whatsAppService.sendText({
								phone,
								text: responseText,
							});
							await this.saveOutboundMessage(phone, responseText, textResponse_p4.messages[0].id);
						}
						return { action: 'PLACE_ORDER', response: responseText, confident };
					}
					// If we reach here with useExistingAddress but confirmed !== null,
					// this might be a duplicate - just return without further processing
					return {
						action: 'PLACE_ORDER',
						response: 'Your order is already being processed.',
						confident,
					};
				}

				// Allow product modifications during confirmation prompt (pendingOrder.confirmed === null)
				// This supports: add/update quantity, and remove products using AI intent.
				if (
					pendingOrder &&
					rawMessage &&
					pendingOrder.toJSON().confirmed === null &&
					matchedProducts.length > 0
				) {
					const pendingData = pendingOrder.toJSON();
					const existingProducts =
						(pendingData.products as Array<{ productName: string; quantity?: number }>) ?? [];

					/**
					 * Removal detection rules:
					 * - If AI returns quantity=null/undefined for a matched product => remove it.
					 * - Also infer removal from raw message keywords to handle cases where AI doesn't emit quantity=null.
					 */
					const isRemovalKeywordForProduct = (productName: string): boolean => {
						const p = productName.toLowerCase().trim();
						if (!p) {return false;}

						// Avoid regex escape issues: use simple substring phrases.
						const lower = rawMessage.toLowerCase();
						const phrases = [
							`no ${p}`,
							`remove ${p}`,
							`delete ${p}`,
							`dont ${p}`, // "don't" without apostrophe to avoid escaping differences
							`dont  ${p}`, // tolerate double spaces
							`don't ${p}`,
							`less ${p}`,
							`stop ${p}`,
						];

						return phrases.some((phrase) => lower.includes(phrase));
					};

					const removalNotFoundProducts: string[] = [];

					for (const newProd of matchedProducts) {
						const {productName} = newProd;
						const idx = existingProducts.findIndex(
							(p) => p.productName.toLowerCase() === productName.toLowerCase(),
						);

						// Requirement:
						// - If AI returns quantity = 0 => remove it from pending order
						// - and ensure it is not present in the follow-up confirmation message
						//   (handled by splicing it out of existingProducts).
						const aiQuantity = newProd.quantity;

						const aiIndicatesRemove =
							aiQuantity === null || aiQuantity === undefined || aiQuantity === 0;

						const rawIndicatesRemove = isRemovalKeywordForProduct(productName);
						const shouldRemove = aiIndicatesRemove || rawIndicatesRemove;

						if (shouldRemove) {
							if (idx >= 0) {
								existingProducts.splice(idx, 1);
							} else {
								removalNotFoundProducts.push(productName);
							}
							continue;
						}

						// ADD/UPDATE: set quantity
						const qtyToSet = newProd.quantity ?? 1;
						if (idx >= 0) {existingProducts[idx].quantity = qtyToSet;}
						else {existingProducts.push({ productName, quantity: qtyToSet });}
					}

					if (removalNotFoundProducts.length > 0 && phone) {
						const notInCartText = `Sorry, ${removalNotFoundProducts.join(', ')} ${
							removalNotFoundProducts.length > 1 ? 'are' : 'is'
						} not in your cart.`;
						const textResponse_p5 = await this.whatsAppService.sendText({
							phone,
							text: notInCartText,
						});
						await this.saveOutboundMessage(
							normalizedPhone ?? phone,
							notInCartText,
							textResponse_p5.messages[0].id,
						);
					}

					await pendingOrder.update({ products: existingProducts });

					pendingOrder = normalizedPhone
						? await PendingOrder.findOne({
								where: { phone: this.getNormalizedPhoneWhereClause('phone', normalizedPhone) },
							})
						: null;

					const currentProducts =
						(pendingOrder?.toJSON().products as Array<{
							productName: string;
							quantity?: number;
						}>) ?? [];

					if (currentProducts.length === 0) {
						const responseText = 'Your cart is now empty. What would you like to order?';
						if (phone) {
							const textResponse_p6 = await this.whatsAppService.sendText({
								phone,
								text: responseText,
							});
							await this.saveOutboundMessage(
								normalizedPhone ?? phone,
								responseText,
								textResponse_p6.messages[0].id,
							);
						}
						return { action: 'PLACE_ORDER', response: responseText, confident };
					}

					const address = pendingOrder?.toJSON().address ?? extractedAddress;
					const userPhone = phone || normalizedPhone;

					if (!address) {
						const responseText = 'Please provide your delivery address with name.';
						if (phone) {
							const textResponse_p7 = await this.whatsAppService.sendText({
								phone,
								text: responseText,
							});
							await this.saveOutboundMessage(
								normalizedPhone ?? phone,
								responseText,
								textResponse_p7.messages[0].id,
							);
						}
						return { action: 'PLACE_ORDER', response: responseText, confident };
					}

					const pincode = await this.extractPincodeFromAddress(address, normalizedPhone);
					const { totalWeight, orderTotal, productLines } =
						await this.calculateOrderTotalWithoutShipping(currentProducts, pincode);

					const shippingCost = this.shippingService.calculateShippingCost(
						pincode,
						totalWeight,
						'Home Delivery',
					);

					const grandTotal = orderTotal + shippingCost;

					const shippingLine =
						shippingCost > 0 ? `\n*Shipping: ₹${shippingCost.toFixed(2)}*` : `\n*Shipping: Free*`;

					const confirmationText = `Please confirm your order:\n\n${productLines}${shippingLine}\n*Total: ₹${grandTotal.toFixed(2)}*\n\nDelivery Address: ${address}\nPhone: ${userPhone}\n\nReply "yes" to confirm or "no" to cancel.`;

					if (phone) {
						const textResponse_p8 = await this.whatsAppService.sendText({
							phone,
							text: confirmationText,
						});
						await this.saveOutboundMessage(
							normalizedPhone ?? phone,
							confirmationText,
							textResponse_p8.messages[0].id,
						);
					}

					return { action: 'PLACE_ORDER', response: confirmationText, confident };
				}

				// Handle order confirmation
				if (/yes|okay|place the order|confirm/im.test(rawMessage) && pendingOrder) {
					const pendingData = pendingOrder.toJSON();
					const address = pendingData.address ?? '';
					const pincode = await this.extractPincodeFromAddress(address, normalizedPhone);

					// Check for any other existing pending orders and cancel them
					const existingPendingOrders = normalizedPhone
						? await PendingOrder.findAll({
								where: { phone: this.getNormalizedPhoneWhereClause('phone', normalizedPhone) },
							})
						: [];
					for (const existingPending of existingPendingOrders) {
						if (existingPending.toJSON().id !== pendingOrder.toJSON().id) {
							await existingPending.destroy();
							if (phone) {
								await this.whatsAppService.sendText({
									phone,
									text: 'Your previous pending order has been cancelled as a new order has been confirmed.',
								});
							}
						}
					}

					// If we were waiting for address confirmation, find the existing address
					let userAddress = null;
					if (pendingData.confirmed === null) {
						const user = await User.findOne({
							where: { phone: this.getNormalizedPhoneWhereClause('phone', normalizedPhone) },
						});
						if (user) {
							const existingAddresses = await UserAddress.findAll({
								where: { userId: user.toJSON().id },
							});
							userAddress = existingAddresses.find((addr) => {
								const addrLine1 = addr.toJSON().addressLine1?.toLowerCase() ?? '';
								return addrLine1 === address.toLowerCase();
							});
							// If no exact match, try pincode match
							if (!userAddress) {
								userAddress = existingAddresses.find((addr) => {
									const addrPincode = addr.toJSON().pincode;
									return addrPincode === pincode && pincode !== '';
								});
							}
						}
					}

					// Mark pending order as confirmed when using existing address
					if (userAddress && pendingOrder) {
						await pendingOrder.update({ confirmed: true });
					}

					// Calculate shipping
					const { totalWeight, orderTotal, productLines } =
						await this.calculateOrderTotalWithoutShipping(
							(pendingData.products as Array<{ productName: string; quantity?: number }>) ?? [],
							pincode,
						);
					const shippingCost = this.shippingService.calculateShippingCost(
						pincode,
						totalWeight,
						'Home Delivery',
					);
					const grandTotal = orderTotal + shippingCost;

					// Create the order
					const order = await this.createOrderFromPending(
						pendingOrder,
						shippingCost,
						userAddress,
						true,
					);

					if (order) {
						const orderId = order.toJSON().id;
						const responseText = `Your order has been placed! Order ID: ${orderId}`;
						if (phone) {
							await this.whatsAppService.sendText({ phone, text: responseText });
							// Fire and forget - send invoice and payment request separately
							// This ensures user gets the order confirmation even if invoice generation fails
							this.sendOrderInvoiceWithPaymentRequest(order, phone, orderTotal).catch((err) => {
								logger.error(`Failed to send order invoice: ${err}`);
							});
						}
						return { action: 'PLACE_ORDER', response: responseText, confident };
					} else {
						const responseText = 'Failed to create order. Please try again.';
						if (phone) {
							await this.whatsAppService.sendText({ phone, text: responseText });
						}
						return { action: 'PLACE_ORDER', response: responseText, confident };
					}
				}

				// If no products provided in current message, check for pending order
				if (matchedProducts.length === 0) {
					// If we have a pending order with products, send confirmation with products
					if (pendingOrder) {
						const pendingData = pendingOrder.toJSON();
						const currentProducts =
							(pendingData.products as Array<{ productName: string; quantity?: number }>) || [];
						const currentAddress = pendingData.address || extractedAddress;

						// If no products in pending order either, ask what they want
						if (currentProducts.length === 0) {
							const responseText = 'What would you like to order?';
							if (phone) {
								await this.whatsAppService.sendText({ phone, text: responseText });
							}
							return { action: 'PLACE_ORDER', response: responseText, confident };
						}

						// Calculate totals for confirmation
						const userPhone = phone || normalizedPhone;
						const address = currentAddress;
						const pincode = await this.extractPincodeFromAddress(address ?? '', normalizedPhone);
						const { totalWeight, orderTotal, productLines } =
							await this.calculateOrderTotalWithoutShipping(currentProducts, pincode);
						const shippingCost = this.shippingService.calculateShippingCost(
							pincode,
							totalWeight,
							'Home Delivery',
						);
						const grandTotal = orderTotal + shippingCost;
						let shippingLine = '';
						if (shippingCost > 0) {
							shippingLine = `\n*Shipping: ₹${shippingCost.toFixed(2)}*`;
						} else {
							shippingLine = `\n*Shipping: Free*`;
						}

						// If no address in pending order, check for existing user addresses in DB
						if (!currentAddress && normalizedPhone) {
							const user = await User.findOne({
								where: { phone: this.getNormalizedPhoneWhereClause('phone', normalizedPhone) },
							});
							if (user) {
								const existingAddresses = await UserAddress.findAll({
									where: { userId: user.toJSON().id },
								});
								const defaultAddress = existingAddresses.find(
									(addr) => addr.toJSON().isDefault === true,
								);
								if (defaultAddress) {
									const addrData = defaultAddress.toJSON();
									const deliveryName = pendingData.deliveryName || addrData.name || 'Customer';
									const existingAddress = addrData.addressLine1 ?? '';
									const confirmText = `Please confirm your order:\n\n${productLines}${shippingLine}\n*Total: ₹${grandTotal.toFixed(2)}*\n\nWe found your saved address:\n${deliveryName}\n${existingAddress}\n\nReply "yes" to confirm or "no" to provide a new address.`;
									if (phone) {
										const textResponse_p11 = await this.whatsAppService.sendText({
											phone,
											text: confirmText,
										});
										await this.saveOutboundMessage(
											normalizedPhone ?? phone,
											confirmText,
											textResponse_p11.messages[0].id,
										);
										await pendingOrder.update({ address: existingAddress, confirmed: null });
									}
									return { action: 'PLACE_ORDER', response: confirmText, confident };
								}
							}
							// No saved address - ask for it
							const confirmationText = `Please confirm your order:\n\n${productLines}${shippingLine}\n*Total: ₹${grandTotal.toFixed(2)}*\n\nPlease provide your delivery address with name.`;
							if (phone) {
								const textResponse_p12 = await this.whatsAppService.sendText({
									phone,
									text: confirmationText,
								});
								await this.saveOutboundMessage(
									normalizedPhone ?? phone,
									confirmationText,
									textResponse_p12.messages[0].id,
								);
								await pendingOrder.update({ confirmed: null });
							}
							return { action: 'PLACE_ORDER', response: confirmationText, confident };
						}

						// We have address - send full confirmation
						const confirmationText = `Please confirm your order:\n\n${productLines}${shippingLine}\n*Total: ₹${grandTotal.toFixed(2)}*\n\nDelivery Address: ${address}\nPhone: ${userPhone}\n\nReply "yes" to confirm or "no" to cancel.`;
						if (phone) {
							const textResponse_p13 = await this.whatsAppService.sendText({
								phone,
								text: confirmationText,
							});
							await this.saveOutboundMessage(
								normalizedPhone ?? phone,
								confirmationText,
								textResponse_p13.messages[0].id,
							);
							await pendingOrder.update({ confirmed: null });
						}
						return { action: 'PLACE_ORDER', response: confirmationText, confident };
					}

					// No pending order - ask what they want to order
					const responseText = 'What would you like to order?';
					if (phone) {
						await this.whatsAppService.sendText({ phone, text: responseText });
					}
					return { action: 'PLACE_ORDER', response: responseText, confident };
				}

				// Update pending order with new products if provided
				// Only merge products if:
				// 1. We have a pending order with products already
				// 2. The pending order doesn't already have an address (still collecting info)
				// 3. The current message does NOT contain an address (user is not providing address/name)
				if (matchedProducts.length > 0 && normalizedPhone) {
					const pendingHasAddress = pendingOrder?.toJSON().address;
					const currentMsgHasAddress = Boolean(extractedAddress);
					if (pendingOrder && !pendingHasAddress && !currentMsgHasAddress) {
						// Merge with existing products only if we're still collecting address
						// AND the current message doesn't contain an address (avoid adding products when user provides address)
						const existingProducts =
							(pendingOrder.toJSON().products as Array<{
								productName: string;
								quantity?: number;
							}>) || [];
						for (const newProd of matchedProducts) {
							const existingIdx = existingProducts.findIndex(
								(p) => p.productName.toLowerCase() === newProd.productName.toLowerCase(),
							);
							if (existingIdx >= 0) {
								existingProducts[existingIdx].quantity =
									(existingProducts[existingIdx].quantity || 1) + (newProd.quantity || 1);
							} else {
								existingProducts.push(newProd);
							}
						}
						await pendingOrder.update({ products: existingProducts });
					} else if (!pendingOrder) {
						// Create new pending order
						await PendingOrder.create({
							phone: normalizedPhone,
							products: matchedProducts,
							address: extractedAddress,
							deliveryName: extractedDeliveryName,
							city: extractedCity,
							state: extractedState,
							country: extractedCountry,
							pincode: extractedPincode,
						});
					}
				}

				// Update address/location if extracted and different
				if (extractedAddress && pendingOrder) {
					const currentAddress = pendingOrder.toJSON().address;
					if (!currentAddress) {
						await pendingOrder.update({
							address: extractedAddress,
							deliveryName: extractedDeliveryName,
							city: extractedCity,
							state: extractedState,
							country: extractedCountry,
							pincode: extractedPincode,
						});
					}
				}

				// Re-fetch to get updated state
				pendingOrder = normalizedPhone
					? await PendingOrder.findOne({
							where: { phone: this.getNormalizedPhoneWhereClause('phone', normalizedPhone) },
						})
					: null;

				const currentProducts =
					(pendingOrder?.toJSON().products as Array<{ productName: string; quantity?: number }>) ||
					[];
				const currentAddress = pendingOrder?.toJSON().address || extractedAddress;

				// Check if we have products
				if (currentProducts.length === 0) {
					const responseText = 'What would you like to order?';
					if (phone) {
						await this.whatsAppService.sendText({ phone, text: responseText });
					}
					return { action: 'PLACE_ORDER', response: responseText, confident };
				}

				// Check if address is missing - ask for it
				if (!currentAddress) {
					const responseText = 'Please provide your delivery address with name.';
					if (phone) {
						await this.whatsAppService.sendText({ phone, text: responseText });
					}
					return { action: 'PLACE_ORDER', response: responseText, confident };
				}

				// Check if delivery name is missing - ask for it
				const currentDeliveryName = pendingOrder?.toJSON().deliveryName || extractedDeliveryName;
				if (!currentDeliveryName) {
					const responseText = 'Please provide your name for delivery.';
					if (phone) {
						await this.whatsAppService.sendText({ phone, text: responseText });
					}
					return { action: 'PLACE_ORDER', response: responseText, confident };
				}

				// All info collected - build confirmation with products, prices, and shipping
				const address = currentAddress;
				const userPhone = phone || normalizedPhone;

				// Extract pincode from address or look up from user's default address
				const pincode = await this.extractPincodeFromAddress(address, normalizedPhone);

				// Calculate total weight and shipping
				const { totalWeight, orderTotal, productLines } =
					await this.calculateOrderTotalWithoutShipping(currentProducts, pincode);

				const shippingCost = this.shippingService.calculateShippingCost(
					pincode,
					totalWeight,
					'Home Delivery',
				);
				const grandTotal = orderTotal + shippingCost;

				let shippingLine = '';
				if (shippingCost > 0) {
					shippingLine = `\n*Shipping: ₹${shippingCost.toFixed(2)}*`;
				} else {
					shippingLine = `\n*Shipping: Free*`;
				}

				const confirmationText = `Please confirm your order:\n\n${productLines}${shippingLine}\n*Total: ₹${grandTotal.toFixed(2)}*\n\nDelivery Address: ${address}\nPhone: ${userPhone}\n\nReply "yes" to confirm or "no" to cancel.`;

				if (phone) {
					const textResponse_p17 = await this.whatsAppService.sendText({
						phone,
						text: confirmationText,
					});
					await this.saveOutboundMessage(
						normalizedPhone ?? phone,
						confirmationText,
						textResponse_p17.messages[0].id,
					);
					// Mark as needing confirmation
					if (pendingOrder) {
						await pendingOrder.update({ confirmed: null });
					}
				}
				return { action: 'PLACE_ORDER', response: confirmationText, confident };
			}
			case 'UNKNOWN':
			default:
				return {
					action: 'UNKNOWN',
					response: await this.handleUnknown(result.extracted.phone),
					confident: false,
				};
		}
	}

	async handleTrackOrder(phone: string | null, orderId: string | null): Promise<string> {
		let responseText: string;
		if (orderId) {
			const order = await this.findOrderByIdAndPhone(orderId, phone);
			if (!order) {
				responseText = 'The Order ID is not found for your phone number';
			} else {
				responseText = this.formatOrderStatus(order);
			}
		} else if (!phone) {
			responseText = 'Please provide your order ID to track your order.';
		} else {
			const user = await User.findOne({
				where: { phone: this.getNormalizedPhoneWhereClause('phone', phone) },
			});
			if (!user) {
				responseText = 'No orders found for your phone number.';
			} else {
				const orders = await Order.findAll({
					where: { userId: user.toJSON().id },
					order: [['id', 'DESC']],
					limit: 3,
				});
				if (!orders.length) {
					responseText = 'No orders found for your phone number.';
				} else {
					const statuses = orders.map((order) => this.formatOrderStatus(order));
					responseText = `Here are your recent orders:\n\n${statuses.join('\n\n')}`;
				}
			}
		}

		if (phone) {
			await this.whatsAppService.sendText({ phone, text: responseText });
		}

		return responseText;
	}

	private formatOrderStatus(order: Order): string {
		const orderDate = new Date(order.toJSON()?.orderedDate).toLocaleDateString('en-IN', {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		});
		const deliveryDate = new Date(order.toJSON()?.expectedDeliveryDate).toLocaleDateString(
			'en-IN',
			{
				day: '2-digit',
				month: 'short',
				year: 'numeric',
			},
		);

		const isDelivered = order.toJSON().status?.toLowerCase() === 'delivered';
		const statusVerb = isDelivered ? 'was' : 'is';
		const deliveryVerb = isDelivered ? 'was delivered' : 'expected to be delivered';

		return `Your Order (ID: ${order.toJSON()?.id}) ${statusVerb} *${order.toJSON()?.status}*. It was placed on *${orderDate}* and ${deliveryVerb} on *${deliveryDate}*.`;
	}

	async handleCancelOrder(phone: string | null, orderId: string | null): Promise<string> {
		let responseText: string;

		if (!orderId) {
			responseText = 'Please provide your order ID to cancel your order.';
		} else {
			const order = await this.findOrderByIdAndPhone(orderId, phone);
			if (!order) {
				responseText = 'The Order ID is not found for your phone number';
			} else {
				const nonCancellableStatuses = ['delivered', 'cancelled', 'shipped', 'packed'];
				if (nonCancellableStatuses.includes(order.toJSON()?.status?.toLowerCase() ?? '')) {
					responseText = `Your order (ID: ${orderId}) cannot be cancelled as it is already ${order.toJSON()?.status}.`;
				} else {
					responseText = `Are you sure you want to cancel order (ID: ${orderId})? Please reply "yes" to confirm cancellation.`;
				}
			}
		}

		if (phone) {
			await this.whatsAppService.sendText({ phone, text: responseText });
		}

		return responseText;
	}

	async handleDownloadInvoice(phone: string | null, orderId: string | null): Promise<string> {
		let responseText: string;

		if (!orderId) {
			responseText = 'Please provide your order ID to download your invoice.';
		} else {
			const order = await this.findOrderByIdAndPhone(orderId, phone);
			if (!order) {
				responseText = 'The Order ID is not found for your phone number';
				this.whatsAppService.sendText({ phone, text: responseText });
			} else {
				responseText = `Your invoice for Order ID ${orderId} is ready for download.`;

				if (phone) {
					let tempFile = null;
					try {
						const pdfBuffer = await this.appService.generateOrderInvoicePDF(orderId);
						const filename = `Renus Home Foods - Order Invoice - ${orderId}.pdf`;

						// Save PDF to temp directory
						tempFile = await saveBufferToTemp(pdfBuffer, filename, 'application/pdf');
						const downloadUrl = `${process.env.API_HOST}/temp/${tempFile.filename}`;

						// Send as document message with the temp file link
						await this.whatsAppService.sendMedia({
							phone: `${phone.replace(/[\s+\-]/g, '')}`,
							mediaUrl: downloadUrl,
							mediaType: 'document',
							filename,
							caption: `Your invoice for Order ID ${orderId}`,
						});
					} catch (error) {
						logger.error(`Failed to send invoice via WhatsApp: ${error}`);
					} finally {
						// Delete temp file after sending or if it failed
						if (tempFile?.filename) {
							deleteTempFile(tempFile.filename);
						}
					}
				}
			}
		}

		return responseText;
	}

	async handleUnknown(phone: string | null): Promise<string> {
		const responseText =
			'Please select what you want to do from this options:\n\n1️⃣ Place Order - To order food\n2️⃣ Track Order - To check order status\n3️⃣ Download Invoice - To get your invoice\n4️⃣ Cancel Order - To cancel your order';

		if (phone) {
			try {
				await this.whatsAppService.sendTemplate({
					phone,
					templateName: 'conversationstarter',
					languageCode: 'en',
				});
			} catch (error) {
				logger.warn(`Template message failed, sending text instead: ${error}`);
				await this.whatsAppService.sendText({ phone, text: responseText });
			}
		}

		return responseText;
	}

	private async findOrderByIdAndPhone(
		orderId: string,
		phone: string | null,
	): Promise<Order | null> {
		const orderNumId = Number(orderId);
		if (!Number.isFinite(orderNumId)) {
			return null;
		}

		const order = await Order.findByPk(orderNumId, {
			include: [
				{ model: User, as: 'user', attributes: ['id', 'phone'] },
				{ model: UserAddress, attributes: ['id', 'phone'] },
			],
		});

		if (!order || !phone) {
			return phone ? order : null;
		}
		const phoneMatches =
			order.toJSON().user?.phone === phone || order.toJSON().userAddresses?.phone === phone;
		return phoneMatches ? order : null;
	}

	async classifyAndLogIfNeeded(waMessage: WAMessage): Promise<void> {
		const wamessageId = waMessage.toJSON().id;
		const rawMessage = waMessage.toJSON().message ?? '';
		const phone = waMessage.toJSON().whatsappNumber ?? null;
		const { fromUserId } = waMessage.toJSON();

		try {
			const { confidenceThreshold } = this.getConfig();
			const result = await this.classify(rawMessage, phone, fromUserId, wamessageId);

			const confidence = result.confidence ?? 0;
			const shouldLogError = result.action === 'UNKNOWN' || confidence < confidenceThreshold;

			if (!shouldLogError) {
				await this.executeAction(result);
				// Save action back to WAMessage for future context lookups
				await WAMessage.update({ action: result.action }, { where: { id: wamessageId } });
				return;
			}

			const errorType = this.mapErrorType(result);
			await WAMessageAiActionError.create({
				wamessageId,
				action: result.action,
				confidence,
				reason: this.sanitizeReason(result.reason),
				rawMessage: result.rawMessage,
				extracted: result.extracted as any,
				errorType,
			});
			await this.executeAction(result);
			// Save action back to WAMessage for future context lookups
			await WAMessage.update({ action: result.action }, { where: { id: wamessageId } });
			logger.error(
				`AI action classification error: wamessageId=${wamessageId}, errorType=${errorType}, action=${result.action}, confidence=${confidence}, reason=${result.reason}`,
			);
		} catch (error) {
			const errMsg = error instanceof Error ? error.message : String(error);
			logger.error(error.stack);
			logger.error(`AI classifyAndLogIfNeeded failed: wamessageId=${wamessageId}, error=${errMsg}`);

			try {
				await WAMessageAiActionError.create({
					wamessageId,
					action: 'UNKNOWN',
					confidence: 0,
					reason: this.sanitizeReason(errMsg),
					rawMessage,
					extracted: {
						orderId: null,
						phone,
						address: null,
						deliveryName: null,
						city: null,
						state: null,
						country: null,
						pincode: null,
						entities: {},
					} as any,
					errorType: 'TOOL_EXECUTION_FAILED',
				});
			} catch {
				// no-op to avoid infinite loops
			}
		}
	}

	private mapErrorType(result: AIActionClassifierResult): string {
		const reason = result.reason ?? '';
		const lower = reason.toLowerCase();

		if (
			result.action === 'UNKNOWN' &&
			(/not configured/.test(lower) ||
				/missing .* api key/.test(lower) ||
				/missing ai_/.test(lower))
		) {
			return 'PROVIDER_NOT_CONFIGURED';
		}

		return 'LOW_CONFIDENCE';
	}

	private sanitizeReason(reason: string): string {
		if (!reason) {
			return 'UNKNOWN_REASON';
		}
		return String(reason).slice(0, 2000);
	}

	private isConfirmationMessage(message: string): boolean {
		// Normalize the message for comparison
		const normalized = message.trim().toLowerCase();

		// List of confirmation variations
		const confirmationPatterns = [
			'yes',
			'ya',
			'yeah',
			'y',
			'ok',
			'okay',
			'sure',
			'confirm',
			'go',
			'proceed',
			'do it',
			'lets do it',
			"let's do it",
			'please do it',
			'yes please',
			'yep',
			'yea',
			'aye',
			'absolutely',
			'definitely',
			'of course',
			'right',
			'correct',
		];

		// Check exact match first
		if (confirmationPatterns.includes(normalized)) {
			return true;
		}

		// Check if message starts with confirmation patterns (e.g., "yes, please do it")
		return confirmationPatterns.some((pattern) => normalized.startsWith(pattern));
	}

	private async getLastOutboundMessage(
		phone: string,
		currentMessageId: number,
	): Promise<string | null> {
		const normalizedPhone = normalizePhone(phone);

		// Find the most recent outbound message before the current message
		const lastOutbound = await WAMessage.findOne({
			where: {
				whatsappNumber: this.getNormalizedPhoneWhereClause('whatsappNumber', normalizedPhone),
				type: 'outbound',
				id: { [Op.lt]: currentMessageId },
			},
			order: [['id', 'DESC']],
			attributes: ['message'],
		});

		if (!lastOutbound) {
			// Try without phone filtering as fallback
			const lastOutboundFallback = await WAMessage.findOne({
				where: {
					type: 'outbound',
					id: { [Op.lt]: currentMessageId },
				},
				order: [['id', 'DESC']],
				attributes: ['message', 'whatsappNumber'],
			});

			// Check if it matches the phone suffix
			if (lastOutboundFallback) {
				const msgPhone = lastOutboundFallback.toJSON().whatsappNumber;
				if (msgPhone && normalizePhone(msgPhone) === normalizedPhone) {
					return lastOutboundFallback.toJSON().message ?? null;
				}
			}
			return null;
		}

		return lastOutbound.toJSON().message ?? null;
	}

	private inferActionFromOutboundMessage(outboundMessage: string | null): AIIntentAction | null {
		if (!outboundMessage) {
			return null;
		}

		const normalizedMsg = outboundMessage.toLowerCase();

		// Check for cancel order confirmation patterns
		const cancelPatterns = [
			'cancel',
			'cancelling',
			'canceling',
			'cancel order',
			'do you want to cancel',
			'shall i cancel',
			'should i cancel',
			'confirm cancel',
		];

		for (const pattern of cancelPatterns) {
			if (normalizedMsg.includes(pattern)) {
				return 'CANCEL_ORDER';
			}
		}

		// Check for place order confirmation patterns
		const placeOrderPatterns = [
			'confirm order',
			'confirm your order',
			'place order',
			'confirm this order',
			'shall i place',
			'proceed with order',
			'confirm to place',
			'do you want to confirm',
			'address confirmation',
			'use this address',
			'shipping cost',
			'delivery charges',
			'confirm address',
			'order total',
			'your order',
			'order summary',
		];

		for (const pattern of placeOrderPatterns) {
			if (normalizedMsg.includes(pattern)) {
				return 'PLACE_ORDER';
			}
		}

		return null;
	}

	private async classify(
		rawMessage: string,
		phone: string | null,
		fromUserId: string | undefined,
		wamessageId?: number,
	): Promise<AIActionClassifierResult> {
		// Check if this is a confirmation message and we have a phone and message ID
		let inferredAction: AIIntentAction | null = null;
		let inferenceReason = '';
		let lastOutboundMessage: string | null = null;

		if (phone && wamessageId) {
			// Always get the last outbound message to detect saved address prompt
			lastOutboundMessage = await this.getLastOutboundMessage(phone, wamessageId);

			if (this.isConfirmationMessage(rawMessage) && lastOutboundMessage) {
				// Get the last outbound message to infer context
				inferredAction = this.inferActionFromOutboundMessage(lastOutboundMessage);

				if (inferredAction) {
					inferenceReason = `Inferred from confirmation response to: ${lastOutboundMessage?.slice(0, 100) ?? 'unknown'}`;
				}
			}
		}

		// Fetch conversation history if wamessageId and phone are available
		let conversationHistory;
		if (wamessageId && phone) {
			conversationHistory = await this.conversationHistoryService.getConversationHistory(
				phone,
				wamessageId,
			);
		}

		const providerResult = await this.provider.classifyText({
			rawMessage,
			phone,
			fromUserId,
			conversationHistory,
		});

		const allowedActions: AIIntentAction[] = [
			'TRACK_ORDER',
			'PLACE_ORDER',
			'CANCEL_ORDER',
			'DOWNLOAD_INVOICE',
			'UNKNOWN',
		];

		// Use inferred action if we have one and AI classified as UNKNOWN or the action is ambiguous
		// This allows confirmation messages to be properly classified based on context
		let finalAction: AIIntentAction;
		let finalConfidence: number;
		let finalReason: string;

		if (
			inferredAction &&
			(providerResult.action === 'UNKNOWN' || providerResult.confidence < 0.7)
		) {
			// Override with inferred action, but only if it's a strong confirmation signal
			finalAction = inferredAction;
			finalConfidence = 0.95; // High confidence for inference from context
			finalReason = inferenceReason;
		} else {
			finalAction = allowedActions.includes(providerResult.action as AIIntentAction)
				? (providerResult.action as AIIntentAction)
				: 'UNKNOWN';
			finalConfidence = providerResult.confidence ?? 0;
			finalReason = providerResult.reason;
		}

		// Check if user said "no" to a "saved address" prompt - if so, set askNewAddress=true
		const isNegativeResponse = /^(no|nah|nope|n|never|not interested)$/i.test(rawMessage.trim());
		const lastOutboundLower = lastOutboundMessage?.toLowerCase() ?? '';
		const isSavedAddressPrompt =
			lastOutboundLower.includes('saved address') &&
			(lastOutboundLower.includes('provide a new address') ||
				lastOutboundLower.includes('add a new address'));

		// Build entities - add askNewAddress if user responded "no" to saved address prompt
		let finalEntities = providerResult.extracted.entities ?? {};
		if (isNegativeResponse && isSavedAddressPrompt) {
			finalEntities = {
				...finalEntities,
				askNewAddress: true,
				cancelPendingOrder: false, // Ensure we don't cancel
			};
		}

		return {
			action: finalAction,
			confidence: finalConfidence,
			extracted: {
				orderId: providerResult.extracted.orderId ?? null,
				phone: providerResult.extracted.phone ?? phone,
				address: providerResult.extracted.address ?? null,
				deliveryName: providerResult.extracted.deliveryName ?? null,
				city: providerResult.extracted.city ?? null,
				state: providerResult.extracted.state ?? null,
				country: providerResult.extracted.country ?? null,
				pincode: providerResult.extracted.pincode ?? null,
				entities: finalEntities,
			},
			reason: finalReason,
			rawMessage,
		};
	}

	private async calculateOrderTotalWithoutShipping(
		products: Array<{ productName: string; quantity?: number }>,
		pincode: string,
	): Promise<{ totalWeight: number; orderTotal: number; productLines: string }> {
		if (!products.length) {
			return { totalWeight: 0, orderTotal: 0, productLines: '' };
		}

		const productNames = products.map((p) => p.productName);
		const dbProducts = await Product.findAll({
			where: {
				name: { [Op.in]: productNames },
			},
			include: [{ model: PriceList }],
		});

		const lines: string[] = [];
		let orderTotal = 0;
		let totalWeight = 0;

		for (const ordered of products) {
			const dbProduct = dbProducts.find(
				(p) => p.toJSON().name.toLowerCase() === ordered.productName.toLowerCase(),
			);
			const priceLists = dbProduct?.toJSON().PriceLists;
			const price = priceLists?.[0]?.unitprice ?? priceLists?.[0]?.basePrice ?? 0;
			const qty = ordered.quantity || 1;
			const subtotal = price * qty;
			orderTotal += subtotal;

			// Add weight
			const weight = priceLists?.[0]?.weight ?? '0g';
			totalWeight += this.shippingService.calculateOrderWeight([{ weight, quantity: qty }]);
			lines.push(
				`- ${ordered.productName}${ordered.quantity ? ` x ${ordered.quantity}` : ''} : ₹${subtotal.toFixed(2)}`,
			);
		}

		lines.push(`\n*Subtotal: ₹${orderTotal.toFixed(2)}*`);
		return { totalWeight, orderTotal, productLines: lines.join('\n') };
	}

	private async extractPincodeFromAddress(address: string, phone: string | null): Promise<string> {
		// Try to extract pincode from address string (typically 6 digits at the end)
		const pincodeMatch = address.match(/\d{6}/);
		if (pincodeMatch) {
			return pincodeMatch[0];
		}

		// Fall back to user's default address if phone is available
		if (phone) {
			const user = await User.findOne({
				where: { phone: this.getNormalizedPhoneWhereClause('phone', phone) },
			});
			if (user) {
				const defaultAddress = await UserAddress.findOne({
					where: { userId: user.toJSON().id, isDefault: true },
				});
				if (defaultAddress) {
					return defaultAddress.toJSON().pincode;
				}
			}
		}

		return '';
	}

	private async createOrderFromPending(
		pendingOrder: PendingOrder,
		shippingCost: number,
		existingUserAddress?: UserAddress | null,
		skipAddressConfirmation?: boolean,
	): Promise<Order | null> {
		try {
			const pendingData = pendingOrder.toJSON();
			const normalizedPhone = pendingData.phone;
			const address = pendingData.address ?? '';
			const skipConfirmation = skipAddressConfirmation ?? false;
			// Find or create user
			let user = await User.findOne({
				where: { phone: this.getNormalizedPhoneWhereClause('phone', normalizedPhone) },
			});
			if (!user) {
				const tempPassword = `${normalizedPhone}@renushomefoods.com`;
				const userName = pendingData.deliveryName || normalizedPhone;
				user = await User.create({
					phone: normalizedPhone,
					name: userName,
					email: `${normalizedPhone}@renushomefoods.com`,
					password: hashPassword(tempPassword),
				});
			}

			// Extract pincode from address
			const pincode = await this.extractPincodeFromAddress(address, normalizedPhone);

			// Determine userAddress - use provided existing address if available
			let userAddress = existingUserAddress ?? null;

			if (!userAddress && !skipConfirmation) {
				// Check if user already has a similar address
				const existingAddresses = await UserAddress.findAll({
					where: { userId: user.toJSON().id },
				});

				userAddress = existingAddresses.find((addr) => {
					const addrLine1 = addr.toJSON().addressLine1?.toLowerCase() ?? '';
					return addrLine1 === address.toLowerCase();
				});

				// If no exact match found, check by pincode and city similarity
				if (!userAddress) {
					userAddress = existingAddresses.find((addr) => {
						const addrPincode = addr.toJSON().pincode;
						return addrPincode === pincode && pincode !== '';
					});
				}

				// If matching address found, ask for confirmation to reuse
				if (userAddress) {
					const existingAddrData = userAddress.toJSON();
					const deliveryName = pendingData.deliveryName || existingAddrData.name || 'Customer';
					const confirmText = `We found a matching address for your phone number:\n\nName: ${deliveryName}\nAddress: ${existingAddrData.addressLine1}\n\nDo you want to use this for your order? Reply "yes" to confirm or "no" to add a new address.`;
					if (normalizedPhone) {
						const textResponse_a1 = await this.whatsAppService.sendText({
							phone: normalizedPhone,
							text: confirmText,
						});
						await this.saveOutboundMessage(
							normalizedPhone,
							confirmText,
							textResponse_a1.messages[0].id,
						);
					}
					// Set flag so subsequent "yes" knows we need to use existing address
					await pendingOrder.update({ confirmed: null });
					return null; // Return null to signal we need user confirmation
				}
			}

			// If we have an existing userAddress (provided or found), use it; otherwise create new
			if (!userAddress) {
				// Check if we have pincode - if not, ask for it
				if (!pincode) {
					const responseText = 'Please provide your delivery pincode for shipping calculation.';
					if (normalizedPhone) {
						await this.whatsAppService.sendText({
							phone: normalizedPhone,
							text: responseText,
						});
						await this.saveOutboundMessage(normalizedPhone, responseText, '');
					}
					await pendingOrder.update({ confirmed: null });
					return null;
				}

				// Check if we have city/state - if not, try to infer from address or use defaults
				const extractedCity = pendingData.city || 'Chennai';
				const extractedState = pendingData.state || 'Tamil Nadu';
				const extractedCountry = pendingData.country || 'India';

				const addressName = pendingData.deliveryName || 'Customer';
				userAddress = await UserAddress.create({
					userId: user.toJSON().id,
					name: addressName,
					addressLine1: address,
					city: extractedCity,
					state: extractedState,
					country: extractedCountry,
					pincode: pincode || '600000',
					phone: normalizedPhone,
					isDefault: true,
				});
			}

			// Create cart
			const cart = await Cart.create({
				createdBy: normalizedPhone,
				updatedBy: normalizedPhone,
				userId: user.toJSON().id,
				status: 'Created',
			});

			// Add products to cart
			const products =
				(pendingData.products as Array<{ productName: string; quantity?: number }>) ?? [];
			for (const orderedProduct of products) {
				// Use Op.like with wildcards for MySQL compatibility (LIKE is case-insensitive in MySQL)
				const dbProduct = await Product.findOne({
					where: { name: { [Op.like]: `%${orderedProduct.productName}%` } },
					include: [{ model: PriceList }],
				});
				if (dbProduct) {
					const priceLists = dbProduct.toJSON().PriceLists;
					const priceListId = priceLists?.[0]?.id ?? 0;
					await CartProduct.create({
						productId: dbProduct.toJSON().id,
						priceListId,
						cartId: cart.toJSON().id,
						quantity: orderedProduct.quantity || 1,
					});
				}
			}

			// Calculate totals for the order
			const { orderTotal } = await this.calculateOrderTotalWithoutShipping(products, pincode);
			const grandTotal = orderTotal + shippingCost;

			// Create order
			const order = await Order.create({
				userId: user.toJSON().id,
				userAddressId: userAddress.toJSON().id,
				notes: '',
				deliveryNote: '',
				shippingMethod: 'Home Delivery',
				paymentMethod: 'UPI',
				cartId: cart.toJSON().id,
				status: 'Ordered',
			});

			await order.reload();

			// Delete pending order
			await pendingOrder.destroy();

			return order;
		} catch (error) {
			logger.error(error.stack);
			logger.error(`Failed to create order from pending: ${error}`);
			return null;
		}
	}

	private async sendOrderInvoiceWithPaymentRequest(
		order: Order,
		phone: string,
		orderTotal: number,
	): Promise<void> {
		let tempFile = null;
		try {
			const orderId = order.get('id');
			const pdfBuffer = await this.appService.generateOrderInvoicePDF(orderId as string);
			const filename = `Renus Home Foods - Order Invoice - ${orderId}.pdf`;

			// Save PDF to temp directory
			tempFile = await saveBufferToTemp(pdfBuffer, filename, 'application/pdf');
			const downloadUrl = `${process.env.API_HOST}/temp/${tempFile.filename}`;
			// Get phone from order
			const orderData = order.toJSON();
			const user = await User.findByPk(orderData.userId as number);
			const normalizedPhone = user?.toJSON().phone ?? phone;
			// Always send payment screenshot request (this was previously skipped if document sending failed)
			await this.whatsAppService.sendText({
				phone: `${normalizedPhone.replace(/[\s+\-]/g, '')}`,
				text: `Once you have made the payment, please share the screenshot confirmation to proceed with your order.`,
			});
			// Try to send document - don't fail if document sending fails
			// We still want to send the payment request text regardless
			try {
				await this.whatsAppService.sendMedia({
					phone: `${normalizedPhone.replace(/[\s+\-]/g, '')}`,
					mediaUrl: downloadUrl,
					mediaType: 'document',
					filename,
					caption: `Please pay the total amount of ₹${orderTotal.toFixed(2)} to process your order.`,
				});
			} catch (docError) {
				logger.error(`Failed to send invoice document: ${docError}`);
				// Continue - we still want to send the payment request text
			}
		} catch (error) {
			logger.error(`Failed to send order invoice: ${error}`);
		} finally {
			// Delete temp file after sending or if it failed
			if (tempFile?.filename) {
				deleteTempFile(tempFile.filename);
			}
		}
	}
}
