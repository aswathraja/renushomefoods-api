import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { WAMessage } from '../../models/models';
import { normalizePhone } from '../../utils/utils';

const MAX_HISTORY_BYTES = 64 * 1024; // 64KB

export type ConversationMessage = { role: 'user' | 'assistant'; content: string };

@Injectable()
export class ConversationHistoryService {
	async getConversationHistory(
		phone: string,
		currentMessageId: number,
	): Promise<ConversationMessage[]> {
		// Normalize input phone for query
		const normalizedPhone = normalizePhone(phone);

		// Query messages for this phone before current message, ordered ascending
		// Try direct match first (handles already-normalized phone numbers)
		let priorMessages = await WAMessage.findAll({
			where: {
				whatsappNumber: normalizedPhone,
				id: { [Op.lt]: currentMessageId },
			},
			order: [['id', 'ASC']],
			attributes: ['id', 'message', 'action', 'type'],
		});

		// If no results, try matching by suffix (handles legacy entries with country code)
		if (priorMessages.length === 0) {
			priorMessages = await WAMessage.findAll({
				where: {
					id: { [Op.lt]: currentMessageId },
				},
				order: [['id', 'ASC']],
				attributes: ['id', 'message', 'action', 'type'],
			});
			// Filter in-memory for numbers ending with normalizedPhone
			priorMessages = priorMessages.filter(
				(msg) => normalizePhone(msg.toJSON().whatsappNumber ?? '') === normalizedPhone,
			);
		}

		if (!priorMessages.length) {
			return [];
		}

		// Walk backwards to find the trigger point (last UNKNOWN or /start message)
		let triggerIndex = -1;
		for (let i = priorMessages.length - 1; i >= 0; i--) {
			const msg = priorMessages[i].toJSON();
			const isUnknown = msg.action === 'UNKNOWN';
			const isStart = msg.message?.trim().toLowerCase() === '/start';
			if (isUnknown || isStart) {
				triggerIndex = i;
				break;
			}
		}

		// Start from the message after the trigger
		const startIndex = triggerIndex + 1;
		const contextMessages = priorMessages.slice(startIndex);

		// Build conversation history with 24KB limit
		const history: ConversationMessage[] = [];
		let totalBytes = 0;

		for (const msg of contextMessages) {
			const msgData = msg.toJSON();
			const content = msgData.message ?? '';
			const contentBytes = Buffer.byteLength(content, 'utf8');
			const isOutbound = msgData.type === 'outbound' || msgData.name === 'bot';

			if (totalBytes + contentBytes > MAX_HISTORY_BYTES) {
				// Truncate this message if possible
				const remainingBytes = MAX_HISTORY_BYTES - totalBytes;
				if (remainingBytes > 10) {
					// Only add if we can fit at least a few chars
					const truncated = content.slice(0, remainingBytes);
					history.push({ role: 'assistant', content: `${truncated}...[truncated]` });
				}
				break;
			}

			history.push({ role: isOutbound ? 'assistant' : 'user', content });
			totalBytes += contentBytes;
		}

		return history;
	}
}
