import { MailAdapter, SendMailData } from "../adapters/mail-adapter";
import nodemailer from 'nodemailer'; 
import { brotliCompressSync } from "zlib";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c889d5d63defc2",
    pass: "9e4eabdb9287c6"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData) {

      await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com',
        to: 'César Pinto <caugusto3110@gmail.com> ', 
        subject: subject,
        html: body
    });

  };
}

