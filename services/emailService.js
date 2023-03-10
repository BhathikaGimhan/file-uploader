const nodemailer = require('nodemailer');
// let mailTransporter = nodemailer.createTransport(transport);
// mailTransporter.sendMail()

module.exports = async({
        from,
        to,
        subject,
        text,
        html
    }) => {
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            service: 'gmail',
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `FileShare <${from}>`,
            to: to,
            subject: subject,
            text: text,
            html: html
        });
    }
    // transport.sendMail()
