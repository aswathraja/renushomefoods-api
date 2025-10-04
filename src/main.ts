import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { join } from 'path';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });

  // Set global API prefix first!
  app.setGlobalPrefix('api');

  // Serve static assets
  const staticPath = process.env.STATIC_PATH || path.join(__dirname, '../public');
  app.use('/static', express.static(staticPath));

  // Serve React static files
  app.use(express.static(join(__dirname, '..', 'web')));

  // SPA fallback for non-API routes
  app.use(/^((?!\/api).)*$/, (req, res) => {
    res.sendFile(join(__dirname, '..', 'web', 'index.html'));
  });

  await app.listen(3000);
}
void bootstrap();
