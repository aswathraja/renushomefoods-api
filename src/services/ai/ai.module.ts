import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { ShippingService } from '../shipping.service';
import { WhatsAppModule } from '../whatsapp/whatsapp.module';
import { AIActionClassifierService } from './ai-action-classifier.service';
import { ConversationHistoryService } from './conversation-history.service';
import {
	AI_ACTION_CLASSIFIER_PROVIDER_TOKEN,
	GeminiAIActionClassifierProvider,
	MoonshotAIActionClassifierProvider,
	OpenAIAIActionClassifierProvider,
	RuntimeSelectedAIActionClassifierProvider,
} from './ai-agent.providers';

@Module({
	imports: [WhatsAppModule],
	providers: [
		OpenAIAIActionClassifierProvider,
		GeminiAIActionClassifierProvider,
		MoonshotAIActionClassifierProvider,
		RuntimeSelectedAIActionClassifierProvider,
		{
			provide: AI_ACTION_CLASSIFIER_PROVIDER_TOKEN,
			useExisting: RuntimeSelectedAIActionClassifierProvider,
		},
		AIActionClassifierService,
		ConversationHistoryService,
		AppService,
		ShippingService,
	],
	exports: [AIActionClassifierService],
})
export class AIModule {}
