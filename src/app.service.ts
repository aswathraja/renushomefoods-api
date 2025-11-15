import { Injectable } from '@nestjs/common'
import * as nodemailer from 'nodemailer'
import { logger } from './logger'
import { MailOptions } from './models'

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!'
    }

    /**
     * Generates a random number of the specified length.
     * @param length The length of the random number to generate.
     * @returns A string representation of the random number.
     */
    public generateRandomNumber(length: number): string {
        if (length <= 0) {
            throw new Error('Length must be a positive integer.')
        }
        const min = Math.pow(10, length - 1)
        const max = Math.pow(10, length) - 1
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        return randomNumber.toString()
    }

    public maskEmail(email: string): string {
        return email.replace(/(.{2}).*(@.*)/, '$1***$2')
    }

    /**
     * Sends an HTML email using Nodemailer with a responsive template.
     */
    public async sendMail({
        to,
        subject,
        message,
        userFullName,
        logoUrl,
    }: MailOptions) {
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'smtp.gmail.com',
                port: Number(process.env.SMTP_PORT) || 587,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            })

            const logo = logoUrl || 'https://renushomefoods.com/static/logo.png'

            const html = `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #fdf7ee; /* Light beige background */
      font-family: 'Helvetica Neue', Arial, sans-serif;
      justify-content: center !important;
    }

    .container {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: center !important;
      background-color: #fdf7ee;
    }

    .email-wrapper {
      background-color: #fdf7ee;
      max-width: 100%;
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .header {
      text-align: center;
      padding: 40px 20px 20px;
      background-color: #fdf7ee;
    }

    .header img {
      max-width: 180px;
      height: auto;
    }

    /* Message container */
    .message-box {
      background-color: #ffffff; /* White inner box */
      border: 2px solid #8b5e3c; /* Elegant brown border */
      border-radius: 10px;
      padding: 30px 40px;
      margin: 0 auto 30px;
      font-size: 17px;
      color: #333333;
      line-height: 1.8;
      text-align: left;
      max-width: 90%;
    }

    .message-box strong {
      color: #8b5e3c; /* Highlight brand color */
    }

    .footer {
      text-align: center;
      padding: 20px;
      font-size: 13px;
      color: #888888;
      border-top: 1px solid #e0e0e0;
      background-color: #fdf7ee;
    }

    @media only screen and (max-width: 600px) {
      .email-wrapper {
        width: 95%;
      }

      .header img {
        max-width: 130px;
      }

      .message-box {
        padding: 20px 25px;
        font-size: 15px;
        margin: 0 10px 25px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="email-wrapper">
      <div class="header">
        <img src="${logo}" alt="Logo" />
      </div>
      <div class="message-box">
        <strong>Greetings From Renu's Home Foods</strong><br/> <br/>
        Dear ${userFullName},<br/><br/>
        ${message}
      </div>
      <div class="footer">
        <p>© ${new Date().getFullYear()} Renu’s Home Foods. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
      `

            const info = await transporter.sendMail({
                from: `"Renu's Home Foods" <${process.env.SMTP_USER}>`,
                to,
                subject,
                html,
            })

            logger.info('✅ Email sent')
            return { success: true, messageId: info.messageId }
        } catch (error) {
            const cleanMessage =
                'Error in sendMail: ' +
                (error?.original?.sqlMessage ||
                    error?.parent?.sqlMessage ||
                    error.message ||
                    'Unknown error')
            const err = new Error(cleanMessage)
            err.stack = error.stack // keep original stack

            logger.error(err) // Winston now logs message + stack
            return { success: false, error }
        }
    }
}
