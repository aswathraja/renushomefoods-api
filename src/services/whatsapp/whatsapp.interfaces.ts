export interface WhatsAppConfig {
	businessUrl: string;
	phoneNumberId: string;
	accessToken: string;
}

export interface SendTextOptions {
	phone: string;
	text: string;
}

export interface SendImageOptions {
	phone: string;
	imageUrl: string;
	caption?: string;
}

export interface SendVideoOptions {
	phone: string;
	videoUrl: string;
	caption?: string;
}

export interface SendStickerOptions {
	phone: string;
	stickerUrl: string;
}

export interface SendDocumentOptions {
	phone: string;
	fileUrl: string;
	filename: string;
	caption?: string;
}

export interface TemplateComponent {
	type: 'header' | 'body' | 'button';
	subType?: string;
	index?: string;
	parameters: Array<{
		type: 'text' | 'image' | 'document' | 'video';
		text?: string;
		image?: { link: string };
		document?: { link: string; filename: string };
		video?: { link: string };
	}>;
}

export interface SendTemplateOptions {
	phone: string;
	templateName: string;
	languageCode?: string;
	components?: TemplateComponent[];
}

export interface MediaUploadOptions {
	fileUrl: string;
	mediaType: 'image' | 'audio' | 'video' | 'document';
}

export interface WhatsAppMessageResponse {
	messaging_product: string;
	contacts: Array<{ wa_id: string }>;
	messages: Array<{ id: string }>;
}

export interface MediaUploadResponse {
	id: string;
	url?: string;
}

export type WhatsAppMessageType = 'text' | 'image' | 'audio' | 'video' | 'document' | 'sticker' | 'template';

export interface MediaMessageOptions {
	phone: string;
	mediaUrl: string;
	mediaType: 'image' | 'video' | 'document' | 'sticker';
	caption?: string;
	filename?: string;
}
