import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as hbs from 'nodemailer-express-handlebars';
import emailConfig from 'src/config/email.config';
import * as path from 'path';
import { Transporter } from 'nodemailer';
import { addMinutes, differenceInMinutes } from 'date-fns';

@Injectable()
export class EmailService {
  private transporter: Transporter;

  constructor(private configService: typeof emailConfig) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.host,
      port: this.configService.port,
      secure: false,
      auth: {
        user: this.configService.user,
        pass: this.configService.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const hbsConfig = {
      viewEngine: {
        extName: '.hbs',
        partialsDir: path.resolve(__dirname, '../email/templates'),
        layoutsDir: path.resolve(__dirname, '../email/templates'),
        defaultLayout: '',
      },
      viewPath: path.resolve(__dirname, '../email/templates'),
      extName: '.hbs',
    };

    this.transporter.use('compile', hbs(hbsConfig));
  }

  async sendMail(options) {
    const mailOptions = {
      from: this.configService.user,
      to: options.to,
      subject: options.subject,
      template: options.template,
      context: options.context,
    };

    await this.transporter.sendMail(mailOptions);
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
        template: 'send-otp',
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
