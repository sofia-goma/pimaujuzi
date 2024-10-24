import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { addMinutes, differenceInMinutes } from 'date-fns';
import emailConfig from 'src/config/email.config';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(options) {
    const mailOptions = {
      to: options.to,
      from: emailConfig.user,
      subject: options.subject,
      template: options.template,
      context: options.context,
    };

    await this.mailerService.sendMail(mailOptions);
  }
  async sendOtpEmail(
    email: string,
    otpCode: string,
    firstName: string,
    expiresAt: Date,
  ): Promise<void> {
    const expiresIn = differenceInMinutes(expiresAt, new Date());
    try {
      const mailOptions = {
        to: email,
        subject: 'One Time Password',
        template: './send-otp',
        context: {
          firstName,
          otpCode,
          expiresIn,
        },
      };

      await this.sendMail(mailOptions);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
