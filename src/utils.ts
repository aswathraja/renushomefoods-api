// cryptoUtil.ts
import { HttpException, HttpStatus } from '@nestjs/common'
import { AES, SHA256, Utf8 } from 'crypto-es'
import * as dotenv from 'dotenv'
import { existsSync, mkdirSync, unlinkSync, writeFileSync } from 'fs'
import path, { resolve } from 'path'
import { logger } from './logger'
dotenv.config({ path: path.resolve(__dirname, '../.env') })

// Use a strong secret key (store securely, never hardcode in production)
const SECRET_KEY = process.env.ENCRYPTION_KEY
const adsPath = process.env.STATIC_PATH
const inventoryPath = process.env.INVENTORY_PATH
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

// Helper to save uploaded file based on type and return imagePath
export const saveFile = (
    uploadedFile: Express.Multer.File,
    type: string,
): string => {
    if (!uploadedFile) return null

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
    } else {
        throw new Error('Invalid type')
    }

    if (!existsSync(path.join(basePath, returnPrefix))) {
        mkdirSync(path.join(basePath, returnPrefix), { recursive: true })
    }

    const fileName = uploadedFile.originalname
    const filePath = path.join(basePath, returnPrefix, fileName)
    writeFileSync(filePath, uploadedFile.buffer)
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
        } catch (err) {
            logger.error(
                new Error(`Failed to delete file ${filePath}: ${err.message}`),
            )
        }
    }
}
