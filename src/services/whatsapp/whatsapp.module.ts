import { Module } from '@nestjs/common';
import { WhatsAppClientService } from './whatsapp-client.service';
import { WhatsAppService } from './whatsapp.service';

@Module({
	imports: [],
	providers: [WhatsAppClientService, WhatsAppService],
	exports: [WhatsAppService],
})
export class WhatsAppModule {}
