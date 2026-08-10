import { Injectable, Logger } from '@nestjs/common';
import { WhatsAppClientService } from './whatsapp-client.service';
import {
	MediaMessageOptions,
	MediaUploadResponse,
	SendDocumentOptions,
	SendImageOptions,
	SendStickerOptions,
	SendTemplateOptions,
	SendTextOptions,
	SendVideoOptions,
	WhatsAppMessageResponse,
} from './whatsapp.interfaces';

@Injectable()
export class WhatsAppService {
	private readonly logger = new Logger(WhatsAppService.name);

	constructor(private readonly whatsappClient: WhatsAppClientService) {}

	async sendText(options: SendTextOptions): Promise<WhatsAppMessageResponse> {
		const { phone, text } = options;

		const response = await this.whatsappClient.sendMessage({
			messaging_product: 'whatsapp',
			// recipient_type: 'individual',
			to: `91${phone}`,
			type: 'text',
			text: {
				preview_url: true,
				body: text,
			},
		});
		return response;
	}

	async sendTextWithLinkPreview(options: SendTextOptions): Promise<WhatsAppMessageResponse> {
		const { phone, text } = options;

		return this.whatsappClient.sendMessage({
			messaging_product: 'whatsapp',
			recipient_type: 'individual',
			to: `91${phone}`,
			type: 'text',
			text: {
				preview_url: true,
				body: text,
			},
		});
	}

	async sendImage(options: SendImageOptions): Promise<WhatsAppMessageResponse> {
		const { phone, imageUrl, caption } = options;

		return this.whatsappClient.sendMessage({
			messaging_product: 'whatsapp',
			recipient_type: 'individual',
			to: `91${phone}`,
			type: 'image',
			image: {
				link: imageUrl,
				caption,
			},
		});
	}

	async sendVideo(options: SendVideoOptions): Promise<WhatsAppMessageResponse> {
		const { phone, videoUrl, caption } = options;

		return this.whatsappClient.sendMessage({
			messaging_product: 'whatsapp',
			recipient_type: 'individual',
			to: `91${phone}`,
			type: 'video',
			video: {
				link: videoUrl,
				caption,
			},
		});
	}

	async sendSticker(options: SendStickerOptions): Promise<WhatsAppMessageResponse> {
		const { phone, stickerUrl } = options;

		return this.whatsappClient.sendMessage({
			messaging_product: 'whatsapp',
			recipient_type: 'individual',
			to: `91${phone}`,
			type: 'sticker',
			sticker: {
				link: stickerUrl,
			},
		});
	}

	async sendDocument(options: SendDocumentOptions): Promise<WhatsAppMessageResponse> {
		const { phone, fileUrl, filename, caption } = options;

		return this.whatsappClient.sendMessage({
			messaging_product: 'whatsapp',
			recipient_type: 'individual',
			to: `91${phone}`,
			type: 'document',
			document: {
				link: fileUrl,
				filename,
				caption,
			},
		});
	}

	/**
	 * Generic method to send any media type (image, video, document, sticker)
	 * Use this for sending media files stored in temp path
	 * Delegates to the respective sendImage, sendVideo, sendSticker, or sendDocument methods
	 */
	async sendMedia(options: MediaMessageOptions): Promise<WhatsAppMessageResponse> {
		const { phone, mediaUrl, mediaType, caption, filename } = options;

		switch (mediaType) {
			case 'image':
				return this.sendImage({ phone, imageUrl: mediaUrl, caption });
			case 'video':
				return this.sendVideo({ phone, videoUrl: mediaUrl, caption });
			case 'sticker':
				return this.sendSticker({ phone, stickerUrl: mediaUrl });
			case 'document':
				return this.sendDocument({ phone, fileUrl: mediaUrl, filename, caption });
			default:
				throw new Error(`Unsupported media type: ${mediaType}`);
		}
	}

	async sendTemplate(options: SendTemplateOptions): Promise<WhatsAppMessageResponse> {
		const { phone, templateName, languageCode = 'en', components } = options;
		return this.whatsappClient.sendMessage({
			messaging_product: 'whatsapp',
			recipient_type: 'individual',
			to: `91${phone}`,
			type: 'template',
			template: {
				name: templateName,
				language: {
					code: languageCode,
				},
				components: components || [],
			},
		});
	}

	async uploadMediaFromBuffer(
		buffer: Buffer,
		filename: string,
		mediaType: 'image' | 'audio' | 'video' | 'document',
	): Promise<MediaUploadResponse> {
		return this.whatsappClient.uploadMediaFromBuffer(buffer, filename, mediaType);
	}

	async sendMediaById(
		phone: string,
		mediaId: string,
		type: 'image' | 'audio' | 'video' | 'document',
		caption?: string,
	): Promise<WhatsAppMessageResponse> {
		return this.whatsappClient.sendMessage({
			messaging_product: 'whatsapp',
			recipient_type: 'individual',
			to: phone,
			type,
			[type]: {
				id: mediaId,
				caption,
			},
		});
	}
}
