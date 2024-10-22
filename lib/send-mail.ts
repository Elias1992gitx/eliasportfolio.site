import nodemailer,{Transporter} from 'nodemailer';
import ejs from 'ejs';
import path  from 'path';
require('dotenv').config();

interface EmailOptions {
    email: string
    subject: string
    template: string
    data: {[key: string]: any}
}

const sendMail = async(options:EmailOptions):Promise<void>=>{
    const transport:Transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port:465,
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.SENDER_EMAIL_PASSWORD,
        },
    });

    const { email, subject, template, data } = options;

    
    const templatePath = path.join(__dirname, '../mails', template)


    const html: string = await ejs.renderFile(templatePath, data)

    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject,
        html
    }

    await transport.sendMail(mailOptions)
}

export default sendMail;