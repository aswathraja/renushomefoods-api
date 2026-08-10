import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { Product } from '../../models/models';

export type AIActionClassifierResult = {
	action: string;
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
		messageProducts?: Array<{ name: string; quantity?: number }>;
	};
	reason: string;
	rawMessage: string;
};

export type AiProviderInput = {
	rawMessage: string;
	phone: string | null;
	fromUserId?: string;
	conversationHistory?: Array<{ role: 'user'; content: string }>;
};

export const AI_ACTION_CLASSIFIER_PROVIDER_TOKEN = 'AI_ACTION_CLASSIFIER_PROVIDER';

export interface AIActionClassifierProvider {
	classifyText(input: AiProviderInput): Promise<AIActionClassifierResult>;
}

export type AIProviderName = 'OPENAI' | 'GEMINI' | 'MOONSHOT';

/**
 * Strategy 1: Fetch ALL products from database for PLACE_ORDER.
 * Default strategy for AI prompt injection.
 */
async function fetchAllProducts(): Promise<string> {
	const products = await Product.findAll({
		attributes: ['id', 'name', 'tagline'],
		order: [['id', 'ASC']],
	});

	if (!products.length) {
		return 'No products available.';
	}

	return products
		.map((p) => `- ${p.toJSON()?.name}${p.toJSON()?.tagline ? `: ${p.toJSON()?.tagline}` : ''}`)
		.join('\n');
}

export const getEnv = (key: string): string | undefined => {
	const v = process.env[key];
	if (v === undefined) {
		return undefined;
	}
	const trimmed = String(v).trim();
	return trimmed.length ? trimmed : undefined;
};

const getProviderName = (): AIProviderName => {
	const selector = (getEnv('AI_PROVIDER') ?? 'OPENAI').toUpperCase();
	if (selector.includes('OPENAI')) {
		return 'OPENAI';
	}
	if (selector.includes('GEMINI')) {
		return 'GEMINI';
	}
	if (selector.includes('MOONSHOT')) {
		return 'MOONSHOT';
	}
	return 'OPENAI';
};

const placeholderResult = (input: AiProviderInput, reason: string): AIActionClassifierResult => ({
	action: 'UNKNOWN',
	confidence: 0.05,
	extracted: {
		orderId: null,
		phone: input.phone,
		address: null,
		deliveryName: null,
		city: null,
		state: null,
		country: null,
		pincode: null,
		entities: {},
		messageProducts: [],
	},
	reason,
	rawMessage: input.rawMessage,
});

/**
 * Country calling codes mapping: ISO 2-letter country code → calling code
 * Used to strip country codes from phone numbers based on fromUserId country.
 */
const COUNTRY_CALLING_CODES: Record<string, string> = {
	IN: '91', // India
	US: '1', // United States
	CA: '1', // Canada
	GB: '44', // United Kingdom
	AU: '61', // Australia
	DE: '49', // Germany
	FR: '33', // France
	IT: '39', // Italy
	ES: '34', // Spain
	BR: '55', // Brazil
	MX: '52', // Mexico
	CN: '86', // China
	JP: '81', // Japan
	KR: '82', // South Korea
	SG: '65', // Singapore
	AE: '971', // UAE
	SA: '966', // Saudi Arabia
	TH: '66', // Thailand
	MY: '60', // Malaysia
	ID: '62', // Indonesia
	PH: '63', // Philippines
	NZ: '64', // New Zealand
	ZA: '27', // South Africa
	AR: '54', // Argentina
	CL: '56', // Chile
	CO: '57', // Colombia
	PE: '51', // Peru
	NL: '31', // Netherlands
	BE: '32', // Belgium
	CH: '41', // Switzerland
	AT: '43', // Austria
	PT: '351', // Portugal
	PL: '48', // Poland
	SE: '46', // Sweden
	NO: '47', // Norway
	DK: '45', // Denmark
	FI: '358', // Finland
	IE: '353', // Ireland
	RU: '7', // Russia
};

/**
 * Extract country code from from_user_id format: 'XX.123456'
 * Example: 'IN.27327500786938357' → 'IN'
 */
function extractCountryFromUserId(fromUserId: string | undefined): string | null {
	if (!fromUserId) {
		return null;
	}
	const match = fromUserId.match(/^([A-Z]{2})\./);
	return match ? match[1] : null;
}

/**
 * Strip country calling code from phone number based on the country in fromUserId
 * Example: fromUserId='IN.27327500786938357', phone='919500808653' → '9500808653'
 */
export function stripCountryCodeFromPhone(
	phone: string | null,
	fromUserId: string | undefined,
): string | null {
	if (!phone) {
		return null;
	}

	const countryCode = extractCountryFromUserId(fromUserId);
	if (!countryCode) {
		return phone;
	}

	const callingCode = COUNTRY_CALLING_CODES[countryCode];
	if (!callingCode) {
		return phone;
	}

	// Normalize phone: remove leading + if present
	const normalizedPhone = phone.startsWith('+') ? phone.slice(1) : phone;

	// Check if phone starts with the calling code
	if (normalizedPhone.startsWith(callingCode)) {
		return normalizedPhone.slice(callingCode.length);
	}

	return phone;
}

const SYSTEM_PROMPT_BASE = `You are an assistant that classifies inbound customer text messages into exactly ONE of these actions:
- TRACK_ORDER
- PLACE_ORDER
- CANCEL_ORDER
- DOWNLOAD_INVOICE
- UNKNOWN

You must use 2-step reasoning internally (do NOT show your reasoning):
1) Intent detection: decide the most likely action based on message meaning and common synonyms.
2) Entity extraction: only extract useful identifiers relevant to the chosen action.
   - Try to extract orderId if present (otherwise null).
   - Also extract any other helpful entities into "entities".
   - If the message contains an address (delivery address, location, etc.), extract it into "address".
   - If the message does not clearly fit any action, return action=UNKNOWN and set confidence low.

For PLACE_ORDER only:
- The user message may include products they want to buy.
- You must map extracted products from the user message ONLY to the products list that is provided in the user prompt under "SYSTEM_PRODUCTS".
- The returned mapped products MUST be returned as "entities.matchedProducts" in this exact format:
  "matchedProducts": [{ "productName": string, "quantity": number|null }]
- CONTEXT AWARENESS: If the conversation history shows a pending order is already being processed (e.g., products have been selected and confirmation is pending), do NOT extract new products from the user's follow-up message (e.g., when user provides name, address, or confirms with "yes"). Only extract products if the user is explicitly adding NEW items to an existing order. When in doubt, prefer NOT adding products if address or name is being collected.

For any action other than PLACE_ORDER:
- "entities.matchedProducts" MUST be an empty array [].

Output MUST be strict JSON matching this schema exactly (no extra keys, no markdown):
{
  "action": "TRACK_ORDER | PLACE_ORDER | CANCEL_ORDER | DOWNLOAD_INVOICE | UNKNOWN",
  "confidence": number between 0 and 1,
  "extracted": {
    "orderId": string|null,
    "phone": string|null,
    "address": string|null,
    "entities": {
      "matchedProducts": Array<{ "productName": string, "quantity": number|null }>
    }
  },
  "reason": string,
  "rawMessage": string
}

Rules:
- If action is UNKNOWN, confidence must be < 0.5.
- If confident, confidence should be >= 0.6.
- Never guess orderId if not explicitly present.
- Only use "address" field for delivery addresses found in the message.
- IMPORTANT: When extracting address with name (e.g., "John, 123 Main Street"), separate them: put only the address part in "address" field and the name part (e.g., "John") in "deliveryName" field. Do NOT merge the name into the address field.
- LOCATION EXTRACTION: Also extract city, state, country, and pincode from the message when provided. For Indian addresses, typical pincode is 6 digits (e.g., "600001"). If the user provides a full address with city/state/pincode (e.g., "123 Main Street, Chennai, Tamil Nadu, 600001"), extract each part into the appropriate field. Set to null if not provided or not inferable.
- For general how-to questions or questions about how to use the service (e.g., "how can I order", "how do I place an order", "what can I order", "how does this work", "hello how can i order from you", "I want to order food", any question asking for instructions or guidance), return action=UNKNOWN but set confidence to 0.8 to indicate the message was clearly understood as a general inquiry and should be handled by the unknown handler.
- EXPLICIT ORDER INTENT: Messages that express a clear intent to place an order (e.g., "New Order", "Place a new order", "I want to place an order", "Order food", "I want food", "Place order", "New order") MUST be classified as PLACE_ORDER, even if no specific products are mentioned.
- ORDER CONFIRMATION RESPONSE: When the user responds with "no", "nah", "nope", or similar negative confirmation words to an order confirmation prompt (e.g., "Please confirm your order", "Reply yes to confirm or no to cancel", "Do you want to confirm this order"), this is a cancellation intent. Return action=PLACE_ORDER with confidence 0.9, reason="User declined order confirmation", and set extracted.entities.cancelPendingOrder=true. The matchedProducts should be empty [].
- CANCEL WITHOUT ORDER ID: When the user wants to cancel their order but does not provide an order ID (e.g., "Cancel the pending order", "Cancel Order", "I want to cancel my order", "Cancel my order"), set extracted.entities.cancelPendingOrder=true and extracted.orderId=null. The AI should signal that the pending order for this phone number should be cancelled.
- ADDRESS CONFIRMATION RESPONSE: When the user responds with "yes", "yeah", "yep" or similar positive confirmation words to an address confirmation prompt (e.g., "Do you want to use this for your order?", "We found your saved address... Reply yes to confirm or no to provide a new address", "We found a matching address... Reply yes to confirm or no to add a new address"), set extracted.entities.useExistingAddress=true and extracted.orderId=null. The matchedProducts should be empty [].
- **ASK NEW ADDRESS RULE** (VERY IMPORTANT): When user responds with "no", "nah", "nope", "n", or similar negative words to ANY message that mentioned "saved address", "provide a new address", "add a new address", or used the saved address in the prompt, you MUST set extracted.entities.askNewAddress=true. This signals they want to provide a new address instead of cancelling the order. The matchedProducts should be empty [] and extracted.orderId should be null. Do NOT set cancelPendingOrder=true in this case.
- CANCEL CONFIRMATION RESPONSE: When the user responds with "yes", "yeah", "yep", "ya", "ok" or similar positive confirmation words to a cancel order confirmation prompt (e.g., "Are you sure you want to cancel order (ID: X)? Please reply 'yes' to confirm cancellation.", "Do you want to cancel your order?", "Shall I cancel this order?"), this is a confirmation to cancel the order. Return action=CANCEL_ORDER with confidence 0.9, reason="User confirmed order cancellation", and set extracted.orderId to the order ID if found in the conversation. The matchedProducts should be empty [].`;

/**
 * Build system prompt with optional SYSTEM_PRODUCTS injection.
 * Products are injected ONLY for PLACE_ORDER action (Strategy 1: FETCH_ALL).
 */
async function buildSystemPrompt(action: string, systemProducts?: string): Promise<string> {
	if (action === 'PLACE_ORDER' && systemProducts) {
		return `${SYSTEM_PROMPT_BASE}\n\nSYSTEM_PRODUCTS:\n${systemProducts}`;
	}
	return SYSTEM_PROMPT_BASE;
}

const safeJsonParse = <T>(text: string): T | null => {
	try {
		return JSON.parse(text) as T;
	} catch {
		return null;
	}
};

@Injectable()
export class OpenAIAIActionClassifierProvider implements AIActionClassifierProvider {
	private readonly model = getEnv('AI_OPENAI_MODEL') ?? 'gpt-4o-mini';
	private readonly apiKey = getEnv('AI_OPENAI_API_KEY');

	async classifyText(input: AiProviderInput): Promise<AIActionClassifierResult> {
		if (!this.apiKey) {
			return placeholderResult(input, `OpenAI not configured: missing AI_OPENAI_API_KEY`);
		}

		// Step 1: Initial classification to determine action
		const initialResp = await this.makeRequest(SYSTEM_PROMPT_BASE, input);
		const initial = safeJsonParse<AIActionClassifierResult>(initialResp);
		const action = initial?.action ?? 'UNKNOWN';

		// Step 2: Fetch all products for PLACE_ORDER only (Strategy 1)
		const systemProducts = action === 'PLACE_ORDER' ? await fetchAllProducts() : undefined;

		// Step 3: Final request with products if PLACE_ORDER
		const systemPrompt = await buildSystemPrompt(action, systemProducts);
		const finalResp = await this.makeRequest(systemPrompt, input);
		const parsed = safeJsonParse<AIActionClassifierResult>(finalResp);

		return parsed ?? placeholderResult(input, 'OpenAI: failed to parse JSON output');
	}

	private async makeRequest(systemPrompt: string, input: AiProviderInput): Promise<string> {
		const client = new OpenAI({ apiKey: this.apiKey });
		const processedPhone = stripCountryCodeFromPhone(input.phone, input.fromUserId);
		const userMessage = `fromUserId: ${input.fromUserId ?? 'null'}\nPhone: ${processedPhone ?? 'null'}\nMessage: ${input.rawMessage}`;

		// Build messages array with optional conversation history prepended
		const messages: Array<{ role: 'user'; content: string }> = [
			{ role: 'user', content: systemPrompt },
		];

		// Prepend conversation history if available
		if (input.conversationHistory && input.conversationHistory.length > 0) {
			for (const msg of input.conversationHistory) {
				messages.push({ role: 'user', content: msg.content });
			}
		}

		messages.push({ role: 'user', content: userMessage });

		const resp = await client.chat.completions.create({
			model: this.model,
			temperature: 0.2,
			messages,
		});
		return resp.choices?.[0]?.message?.content ?? '';
	}
}

@Injectable()
export class GeminiAIActionClassifierProvider implements AIActionClassifierProvider {
	private readonly model = getEnv('AI_GEMINI_MODEL') ?? 'gemini-1.5-flash';
	private readonly apiKey = getEnv('AI_GEMINI_API_KEY');

	async classifyText(input: AiProviderInput): Promise<AIActionClassifierResult> {
		if (!this.apiKey) {
			return placeholderResult(input, `Gemini not configured: missing AI_GEMINI_API_KEY`);
		}

		const genai = new GoogleGenAI({ apiKey: this.apiKey });

		// Step 1: Initial classification to determine action
		const initialResp = await this.makeRequest(genai, SYSTEM_PROMPT_BASE, input);
		const initial = safeJsonParse<AIActionClassifierResult>(initialResp);
		const action = initial?.action ?? 'UNKNOWN';

		// Step 2: Fetch all products for PLACE_ORDER only (Strategy 1)
		const systemProducts = action === 'PLACE_ORDER' ? await fetchAllProducts() : undefined;

		// Step 3: Final request with products if PLACE_ORDER
		const systemPrompt = await buildSystemPrompt(action, systemProducts);
		const finalResp = await this.makeRequest(genai, systemPrompt, input);
		const parsed = safeJsonParse<AIActionClassifierResult>(finalResp);

		return parsed ?? placeholderResult(input, 'Gemini: failed to parse JSON output');
	}

	private async makeRequest(
		genai: GoogleGenAI,
		systemPrompt: string,
		input: AiProviderInput,
	): Promise<string> {
		const processedPhone = stripCountryCodeFromPhone(input.phone, input.fromUserId);
		const userMessage = `fromUserId: ${input.fromUserId ?? 'null'}\nPhone: ${processedPhone ?? 'null'}\nMessage: ${input.rawMessage}`;

		// Build contents array with optional conversation history prepended
		const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [
			{ role: 'user', parts: [{ text: systemPrompt }] },
		];

		// Prepend conversation history if available
		if (input.conversationHistory && input.conversationHistory.length > 0) {
			for (const msg of input.conversationHistory) {
				contents.push({ role: msg.role, parts: [{ text: msg.content }] });
			}
		}

		contents.push({ role: 'user', parts: [{ text: userMessage }] });

		const result = await genai.models.generateContent({
			model: this.model,
			contents,
		});
		return (
			(result as any)?.response?.text ??
			result?.text ??
			(result as any)?.response?.candidates?.[0]?.content?.parts?.[0]?.text ??
			''
		);
	}
}

@Injectable()
export class MoonshotAIActionClassifierProvider implements AIActionClassifierProvider {
	private readonly apiKey = getEnv('AI_MOONSHOT_API_KEY');

	async classifyText(input: AiProviderInput): Promise<AIActionClassifierResult> {
		if (!this.apiKey) {
			return placeholderResult(input, `Moonshot not configured: missing AI_MOONSHOT_API_KEY`);
		}
		return Promise.resolve(placeholderResult(input, 'Moonshot provider not implemented'));
	}
}

@Injectable()
export class RuntimeSelectedAIActionClassifierProvider implements AIActionClassifierProvider {
	constructor(
		private readonly openai: OpenAIAIActionClassifierProvider,
		private readonly gemini: GeminiAIActionClassifierProvider,
		private readonly moonshot: MoonshotAIActionClassifierProvider,
	) {}

	classifyText(input: AiProviderInput): Promise<AIActionClassifierResult> {
		const provider = getProviderName();
		switch (provider) {
			case 'OPENAI':
				return this.openai.classifyText(input);
			case 'GEMINI':
				return this.gemini.classifyText(input);
			case 'MOONSHOT':
			default:
				return this.moonshot.classifyText(input);
		}
	}
}
