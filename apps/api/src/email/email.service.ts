import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as hbs from 'nodemailer-express-handlebars';
import emailConfig from 'src/config/email.config';
import * as path from 'path';
import { Transporter } from 'nodemailer';

@Injectable()
export class MailService {
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

  async sendMail(to: string, subject: string, template: string, context: any) {
    const mailOptions = {
      from: this.configService.user,
      to,
      subject,
      template,
      context,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
