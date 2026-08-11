import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Op, WhereOptions } from 'sequelize';
import { join } from 'path';
import { sequelize } from '../database/database';
import { logger } from '../logger/logger';
import { Message, WAMessage } from '../models/models';

import { AIActionClassifierService } from '../services/ai/ai-action-classifier.service';
import { AppService } from '../services/app.service';
import {
	decryptPayload,
	encryptPayload,
	extractWAMessageFromWebhook,
	normalizePhone,
} from '../utils/utils';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly aiActionClassifierService: AIActionClassifierService,
	) {}

	private buildWhatsappPhoneWhereClause(phone: string): WhereOptions {
		const normalizedPhone = normalizePhone(phone).slice(-10);
		return normalizedPhone
			? {
					[Op.or]: [
						{ whatsappNumber: normalizedPhone },
						{ whatsappNumber: `91${normalizedPhone}` },
						sequelize.where(
							sequelize.fn(
								'RIGHT',
								sequelize.fn(
									'REPLACE',
									sequelize.fn(
										'REPLACE',
										sequelize.fn(
											'REPLACE',
											sequelize.fn(
												'REPLACE',
												sequelize.fn('REPLACE', sequelize.col('whatsappNumber'), '+', ''),
												' ',
												'',
											),
											'-',
											'',
										),
										'(',
										'',
									),
									')',
									'',
								),
								10,
							),
							normalizedPhone,
						),
					],
				}
			: { whatsappNumber: phone };
	}

	@Get()
	getHello(@Body() body: any, @Query() query: any, @Res() res): any {
		// Serve the React build index.html file
		res.sendFile(join(__dirname, 'web', 'index.html'));
	}

	@Get('status')
	async getStatus(): Promise<{
		status: string;
		checks: Record<string, any>;
	}> {
		const checks: Record<string, any> = {};
		let allHealthy = true;

		// Check required environment variables
		const requiredEnvVars = [
			'DB_NAME',
			'DB_USERNAME',
			'DB_PASSWORD',
			'DB_HOST',
			'CONTACT_EMAIL',
			'ORDERS_EMAIL',
			'CONTACT_PASS',
			'ORDERS_PASS',
		];

		for (const envVar of requiredEnvVars) {
			const value = process.env[envVar];
			const isSet = value !== undefined && value !== '';
			checks[envVar] = {
				required: true,
				set: isSet,
				value: isSet ? '***' : 'NOT SET',
			};
			if (!isSet) {
				allHealthy = false;
			}
		}

		// Check database connectivity
		try {
			await sequelize.authenticate();
			checks.database = {
				status: 'connected',
				healthy: true,
			};
		} catch (error) {
			checks.database = {
				status: 'disconnected',
				healthy: false,
				error: error instanceof Error ? error.message : 'Unknown error',
			};
			allHealthy = false;
		}

		return {
			status: allHealthy ? 'healthy' : 'unhealthy',
			checks,
		};
	}

	@Post('message')
	async createMessage(@Body() body: { request?: string }) {
		try {
			const decryptedBody = decryptPayload(body.request);
			if (!decryptedBody.name || !decryptedBody.phone || !decryptedBody.message) {
				return {
					error: encryptPayload({
						error: 'Name, Phone, Message fields are required.',
					}),
				};
			}
			const msg = await Message.create({
				name: decryptedBody.name,
				phone: decryptedBody.phone,
				email: decryptedBody.email,
				message: decryptedBody.message,
			});
			await this.appService.sendMail({
				to: process.env.CONTACT_EMAIL,
				subject: `Renu's Home Foods - Message from ${decryptedBody.name}`,
				template: 'simple-message',
				data: {
					logo: 'https://renushomefoods.com/static/logo.png',
					userFullName: 'Renuga',
					message: `Message from ${decryptedBody.name} (${decryptedBody?.phone} - ${decryptedBody.email}). <br/><br/> ${decryptedBody.message.replace(/\n/gim, '<br/>')}`,
					year: new Date().getFullYear().toString(),
				},
			});
			return { response: encryptPayload(msg) };
		} catch (error) {
			const cleanMessage = `Error in createMessage: ${
				error?.original?.sqlMessage || error?.parent?.sqlMessage || error.message || 'Unknown error'
			}`;
			const err = new Error(cleanMessage);
			err.stack = error.stack; // keep original stack

			logger.error(err); // Winston now logs message + stack
			return {
				error: encryptPayload({ error: 'Failed to create message.' }),
			};
		}
	}

	@Get('conversation')
	verifyWABA(@Query() query: any): any {
		try {
			const _hubMode = query?.['hub.mode'];
			const hubChallenge = query?.['hub.challenge'];

			const hubVerifyToken = query?.['hub.verify_token'];

			logger.info('WhatsApp webhook verification attempt');
			logger.info(JSON.stringify(query));
			logger.info(hubVerifyToken);
			if (hubVerifyToken === 'renushomefoods@1234321') {
				return hubChallenge;
			} else {
				throw new Error('Failed verification');
			}
		} catch (error) {
			const cleanMessage = `Error in conversation: ${
				error?.original?.sqlMessage || error?.parent?.sqlMessage || error.message || 'Unknown error'
			}`;
			const err = new Error(cleanMessage);
			err.stack = error.stack; // keep original stack

			logger.error(err); // Winston now logs message + stack
			return {
				error: encryptPayload({ error: 'Failed to verify conversation webhook.' }),
			};
		}
	}

	@Post('conversation')
	async answerMessage(@Body() body: any): Promise<any> {
		try {
			const waMessages = extractWAMessageFromWebhook(body);
			for (const waMessage of waMessages) {
				logger.info(
					`WA message: name=${waMessage.name}, whatsappNumber=${waMessage.whatsappNumber}, timestamp=${waMessage.timestamp}, type=${waMessage.type}, message=${waMessage.message}`,
				);
				const created = await WAMessage.create({
					name: waMessage.name,
					whatsappNumber: waMessage.whatsappNumber,
					timestamp: waMessage.timestamp,
					type: waMessage.type,
					message: waMessage.message,
					rawMessageId: waMessage.rawMessageId ?? null,
					fromUserId: waMessage.fromUserId,
				});

				// An explicit /end is stored as the durable session boundary, but must not
				// be handed to the AI or generate a further reply. The next inbound message
				// will therefore begin a new history window for this phone number.
				if (waMessage.message?.trim().toLowerCase() === '/end') {
					continue;
				}

				// Background job placeholder: do not block webhook response.
				// When you add a real queue (BullMQ/Agenda), replace this.
				setImmediate(() => {
					void this.aiActionClassifierService.classifyAndLogIfNeeded(created);
				});
			}

			return 'Thanks for the message';
		} catch (error) {
			const cleanMessage = `Error in conversation: ${
				error?.original?.sqlMessage || error?.parent?.sqlMessage || error.message || 'Unknown error'
			}`;
			const err = new Error(cleanMessage);
			err.stack = error.stack; // keep original stack

			logger.error(err); // Winston now logs message + stack
			return {
				error: encryptPayload({ error: 'Failed to verify conversation webhook.' }),
			};
		}
	}

	@Post('conversation/messages')
	async getConversationMessages(@Body() body: { request?: string }) {
		try {
			const decryptedBody = decryptPayload(body.request);
			const phone = decryptedBody.phone ?? decryptedBody.whatsappNumber;

			if (!phone) {
				return {
					error: encryptPayload({ error: 'Phone number is required.' }),
				};
			}

			const messages = await WAMessage.findAll({
				where: this.buildWhatsappPhoneWhereClause(phone),
				order: [
					['timestamp', 'ASC'],
					['id', 'ASC'],
				],
			});

			const serializedMessages = messages.map((message) => message.toJSON());
			const lastMessage = serializedMessages[serializedMessages.length - 1] ?? null;
			const sessionActive = lastMessage
				? (lastMessage.message ?? '').trim().toLowerCase() !== '/end'
				: false;

			return {
				response: encryptPayload({
					phone: normalizePhone(phone).slice(-10),
					sessionActive,
					messages: serializedMessages,
				}),
			};
		} catch (error) {
			const cleanMessage = `Error in getConversationMessages: ${
				error?.original?.sqlMessage || error?.parent?.sqlMessage || error.message || 'Unknown error'
			}`;
			const err = new Error(cleanMessage);
			err.stack = error.stack;

			logger.error(err);
			return {
				error: encryptPayload({ error: 'Failed to fetch WhatsApp messages.' }),
			};
		}
	}
}
