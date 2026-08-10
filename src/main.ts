import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';
import { join, resolve } from 'path';
import { AppModule } from './app.module';
dotenv.config({ quiet: true });
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({ origin: '*' });

	// Enable gzip compression globally
	app.use(compression());

	// Set global API prefix first!
	app.setGlobalPrefix('api');

	// Use Morgan middleware for HTTP request logging
	// app.use(morganMiddleware)

	// Serve static assets
	const staticPath = process.env.STATIC_PATH || path.join(__dirname, '../public');
	app.use('/static', express.static(staticPath));

	// Serve temp files for WhatsApp media (public access without /api prefix)
	const tempPath = process.env.TEMP_PATH || path.join(__dirname, '../public/temp');
	app.use('/temp', express.static(resolve(tempPath)));

	// Serve React static files
	app.use(express.static(join(__dirname, '..', 'web')));
	// SPA fallback for non-API routes
	app.use(/^((?!\/api).)*$/, (req, res) => {
		res.sendFile(join(__dirname, '..', 'web', 'index.html'));
	});
	const port = process.env.PORT || 3000;
	await app.listen(port);
}
void bootstrap();
