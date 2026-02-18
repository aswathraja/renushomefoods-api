// cryptoUtil.ts
import { HttpException, HttpStatus } from '@nestjs/common'
import { spawn } from 'child_process'
import { AES, SHA256, Utf8 } from 'crypto-es'
import * as dotenv from 'dotenv'
import { existsSync, mkdirSync, unlinkSync, writeFileSync } from 'fs'
import path, { resolve } from 'path'
import sharp from 'sharp'
import { logger } from '../logger/logger'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

// Use a strong secret key (store securely, never hardcode in production)
const SECRET_KEY = process.env.ENCRYPTION_KEY
const adsPath = process.env.STATIC_PATH
const inventoryPath = process.env.INVENTORY_PATH
const FFMPEG_PATH = process.env.FFMPEG_PATH || 'ffmpeg'

// Encrypt payload
export function encryptPayload(payload: any): string {
    const data = JSON.stringify(payload)
    const encrypted = AES.encrypt(data, SECRET_KEY).toString()
    return encrypted
}

// Decrypt payload
export function decryptPayload(cipherText: string): any {
    const bytes = AES.decrypt(cipherText, SECRET_KEY)
    const decrypted = bytes.toString(Utf8)
    try {
        return JSON.parse(decrypted)
    } catch {
        return decrypted
    }
}

export function hashPassword(password: string): string {
    return SHA256(password).toString()
}

export function comparePassword(password: string, hash: string): boolean {
    return SHA256(password).toString() === hash
}

// Helper to validate media file types (images and videos)
const isValidMediaType = (mimeType: string): boolean => {
    const allowedImageTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/svg+xml',
    ]
    const allowedVideoTypes = [
        'video/mp4',
        'video/quicktime',
        'video/webm',
        'video/avi',
        'video/x-msvideo',
        'video/mov',
    ]

    return (
        allowedImageTypes.includes(mimeType) ||
        allowedVideoTypes.includes(mimeType) ||
        mimeType.startsWith('image/')
    )
}

// Helper to check if file is an image
const isImage = (mimeType: string): boolean => {
    return mimeType.startsWith('image/')
}

// Helper to check if file is a video
const isVideo = (mimeType: string): boolean => {
    const videoTypes = [
        'video/mp4',
        'video/quicktime',
        'video/webm',
        'video/avi',
        'video/x-msvideo',
        'video/mov',
    ]
    return videoTypes.includes(mimeType)
}

// Helper to convert image to WebP using sharp
const convertImageToWebp = async (
    buffer: Buffer,
    quality: number = 95,
): Promise<Buffer> => {
    const convertedBuffer = await sharp(buffer).webp({ quality }).toBuffer()
    return convertedBuffer
}

// Helper to convert video to MP4 using FFmpeg CLI
const convertVideoToMp4 = async (
    inputBuffer: Buffer,
    outputPath: string,
): Promise<void> => {
    return new Promise((resolve, reject) => {
        // Create a temporary input file
        const tempInputPath = outputPath + '.temp' + Date.now()

        // Write input buffer to temp file
        writeFileSync(tempInputPath, inputBuffer)

        // Spawn FFmpeg process
        const ffmpeg = spawn(FFMPEG_PATH, [
            '-i',
            tempInputPath,
            '-c:v',
            'libx264',
            '-preset',
            'fast',
            '-crf',
            '23',
            '-c:a',
            'aac',
            '-b:a',
            '128k',
            '-movflags',
            '+faststart',
            '-y',
            outputPath,
        ])

        let stderr = ''

        ffmpeg.stderr.on('data', (data) => {
            stderr += data.toString()
        })

        ffmpeg.on('close', (code) => {
            // Clean up temp input file
            try {
                unlinkSync(tempInputPath)
            } catch (err) {
                logger.error(
                    new Error(
                        `Failed to delete temp input file: ${err.message}`,
                    ),
                )
            }

            if (code === 0) {
                resolve()
            } else {
                reject(
                    new Error(
                        `FFmpeg conversion failed with code ${code}: ${stderr}`,
                    ),
                )
            }
        })

        ffmpeg.on('error', (err: any) => {
            // Clean up temp input file on error
            try {
                unlinkSync(tempInputPath)
            } catch (cleanupErr: any) {
                logger.error(
                    new Error(
                        `Failed to delete temp input file: ${cleanupErr.message}`,
                    ),
                )
            }
            reject(new Error(`FFmpeg process error: ${err.message}`))
        })
    })
}

// Helper to save uploaded file based on type and return imagePath
export const saveFile = async (
    uploadedFile: Express.Multer.File,
    type: string,
    reviewId?: number,
): Promise<string> => {
    if (!uploadedFile) return null

    // Validate file type (images and videos only)
    if (!isValidMediaType(uploadedFile.mimetype)) {
        throw new HttpException(
            {
                error: encryptPayload({
                    error: 'Invalid file type. Only images (JPEG, PNG, GIF, WebP, SVG) and videos (MP4, MOV, WebM, AVI) are allowed.',
                }),
            },
            HttpStatus.BAD_REQUEST,
        )
    }

    let basePath: string
    let returnPrefix: string

    if (type === 'ads') {
        basePath = adsPath
        returnPrefix = '/ads/'
    } else if (
        ['inventory', 'category', 'product', 'item', 'location'].includes(type)
    ) {
        basePath = inventoryPath
        if (type === 'category') returnPrefix = '/categories/'
        else if (type === 'product') returnPrefix = '/products/'
        else if (type === 'item') returnPrefix = '/items/'
        else if (type === 'location') returnPrefix = '/locations/'
        else if (type === 'inventory') returnPrefix = '/inventory/'
    } else if (type === 'reviews') {
        basePath = adsPath
        returnPrefix = '/reviews/'
    } else {
        throw new Error('Invalid type')
    }

    if (!existsSync(path.join(basePath, returnPrefix))) {
        mkdirSync(path.join(basePath, returnPrefix), { recursive: true })
    }

    // Determine file extension based on file type and conversion
    let fileExtension: string
    let convertedBuffer: Buffer = uploadedFile.buffer
    let needsConversion = false

    if (isImage(uploadedFile.mimetype)) {
        // Convert image to WebP
        fileExtension = '.webp'
        convertedBuffer = await convertImageToWebp(uploadedFile.buffer)
        needsConversion = true
    } else if (isVideo(uploadedFile.mimetype)) {
        // Convert video to MP4
        fileExtension = '.mp4'
        needsConversion = true
    } else {
        // Keep original extension for other types
        fileExtension = path.extname(uploadedFile.originalname) || ''
    }

    // Build filename with proper extension
    const originalBaseName = path.basename(
        uploadedFile.originalname,
        path.extname(uploadedFile.originalname),
    )
    let fileName = type + '-' + originalBaseName + fileExtension

    // For review photos, ad campaign images, and inventory items, prepend the ID to the filename
    if (
        (type === 'reviews' ||
            type === 'ads' ||
            type === 'category' ||
            type === 'product' ||
            type === 'item' ||
            type === 'location') &&
        reviewId
    ) {
        fileName = `${type}-${reviewId}-${originalBaseName}${fileExtension}`
    }

    const filePath = path.join(basePath, returnPrefix, fileName)

    // Save file (converted or original)
    if (needsConversion && isVideo(uploadedFile.mimetype)) {
        // For videos, use FFmpeg CLI conversion
        await convertVideoToMp4(uploadedFile.buffer, filePath)
    } else {
        // For images (already converted to WebP) or other files
        writeFileSync(filePath, convertedBuffer)
    }

    return returnPrefix + fileName
}

// Helper to delete file if exists
export const deleteFileIfExists = (filePath: string) => {
    if (!adsPath) {
        throw new HttpException(
            {
                error: encryptPayload({
                    error: 'STATIC_PATH environment variable is not set.',
                }),
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
        )
    }
    if (
        adsPath + filePath &&
        existsSync(resolve(path.join(adsPath, filePath.split('/').pop())))
    ) {
        try {
            unlinkSync(
                path.resolve(path.join(adsPath, filePath.split('/').pop())),
            )
        } catch (err: any) {
            logger.error(
                new Error(`Failed to delete file ${filePath}: ${err.message}`),
            )
        }
    }
}
