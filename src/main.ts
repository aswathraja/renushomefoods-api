import { NestFactory } from '@nestjs/core'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as path from 'path'
import { join } from 'path'
import { AppModule } from './app.module'
dotenv.config()
async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.enableCors({ origin: '*' })

    // Set global API prefix first!
    app.setGlobalPrefix('api')

    // Use Morgan middleware for HTTP request logging
    // app.use(morganMiddleware)

    // Serve static assets
    const staticPath =
        process.env.STATIC_PATH || path.join(__dirname, '../public')
    app.use('/static', express.static(staticPath))

    // Serve React static files
    app.use(express.static(join(__dirname, '..', 'web')))
    // SPA fallback for non-API routes
    app.use(/^((?!\/api).)*$/, (req, res) => {
        res.sendFile(join(__dirname, '..', 'web', 'index.html'))
    })
    const port = process.env.PORT || 3000
    await app.listen(port)
}
void bootstrap()
