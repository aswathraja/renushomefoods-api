import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { getEnv } from '../ai/ai-agent.providers';
import {
	MediaUploadResponse,
	WhatsAppConfig,
	WhatsAppMessageResponse,
} from './whatsapp.interfaces';

@Injectable()
export class WhatsAppClientService {
	private readonly logger = new Logger(WhatsAppClientService.name);
	private readonly client: AxiosInstance;
	private readonly config: WhatsAppConfig;

	constructor() {
		this.config = {
			businessUrl: getEnv('WHATSAPP_BUSINESS_URL'),
			phoneNumberId: getEnv('WHATSAPP_PHONE_NUMBER_ID'),
			accessToken: getEnv('WHATSAPP_ACCESS_TOKEN'),
		};

		this.client = axios.create({
			baseURL: this.config.businessUrl,
			headers: {
				Authorization: `Bearer ${this.config.accessToken}`,
				'Content-Type': 'application/json',
			},
		});
	}

	async sendMessage(payload: Record<string, unknown>): Promise<WhatsAppMessageResponse> {
		try {
			const response = await this.client.post<WhatsAppMessageResponse>(
				`${this.config.phoneNumberId}/messages`,
				payload,
			);
			return response.data;
		} catch (error) {
			this.logger.error(`Failed to send message: ${error}`);
			throw error;
		}
	}

	async uploadMediaFromBuffer(
		buffer: Buffer,
		filename: string,
		mediaType: string,
	): Promise<MediaUploadResponse> {
		try {
			const formData = new FormData();
			const file = new File([new Uint8Array(buffer)], filename, {
				type: this.getMimeType(mediaType),
			});
			formData.append('file', file);
			formData.append('messaging_product', 'whatsapp');
			formData.append('type', mediaType);

			const response = await axios.post<MediaUploadResponse>(
				`${this.config.phoneNumberId}/media`,
				formData,
				{
					headers: {
						Authorization: `Bearer ${this.config.accessToken}`,
					},
				},
			);
			return response.data;
		} catch (error) {
			this.logger.error(`Failed to upload media: ${error}`);
			throw error;
		}
	}

	private getMimeType(mediaType: string): string {
		const mimeTypes: Record<string, string> = {
			image: 'image/jpeg',
			audio: 'audio/ogg',
			video: 'video/mp4',
			document: 'application/pdf',
		};
		return mimeTypes[mediaType] || 'application/octet-stream';
	}
}
