import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { join } from 'path';
import { sequelize } from '../database/database';
import { logger } from '../logger/logger';
import { Message, WAMessage } from '../models/models';

import { AIActionClassifierService } from '../services/ai/ai-action-classifier.service';
import { AppService } from '../services/app.service';
import { decryptPayload, encryptPayload, extractWAMessageFromWebhook } from '../utils/utils';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly aiActionClassifierService: AIActionClassifierService,
	) {}

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
}
