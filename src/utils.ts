// cryptoUtil.ts
import { AES, Utf8 } from 'crypto-es'
import * as dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../.env') })

// Use a strong secret key (store securely, never hardcode in production)
const SECRET_KEY = process.env.ENCRYPTION_KEY
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
