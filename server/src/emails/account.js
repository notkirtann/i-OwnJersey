import 'dotenv/config'
import nodemailer from 'nodemailer'

    const auth = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        port: 465,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS

        }
    })

    export const welcomeMail =async (emailofUser)  => {
        const mailThis = {
            from: process.env.USER_EMAIL,
            to: emailofUser,
            subject: "Welcome to i-OwnJersey ",
            html :`
            <h2>Hello Jersey Addict,</h2>
            <p>Welcome to <strong>i-OwnJersey Official Website</strong>!</p>
            <p>Your account has been successfully created. Start owning original jersey from today itself! 🚀</p>
            <p>Also Subsribe to our speical Premium Membership to get <strong >10-15% off.</strong> on each Jersey you Own </p>
            <br>
            <p>Best Regards,<br>i-OwnJersey Team</p>
            `
        };
        await auth.sendMail(mailThis) 
    };

    export const deleteMail =async (emailofUser)  => {
        const mailThis = {
            from: process.env.USER_EMAIL,
            to: emailofUser,
            subject: "Sad to see you go",
            html :`
            <h2>Hello Sir,</h2>
            <p>We are very sad to see you leave <strong>i-OwnJersey</strong>!</p>
            <p>Your account has been successfully deleted.</p>
            <br>
            <p>Best Regards,<br>i-OwnJersey Team</p>
            `
        };
        await auth.sendMail(mailThis) 
    };