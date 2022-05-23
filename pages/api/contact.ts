import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { resolve } from 'path';
const nodemailer = require('nodemailer');

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URL
);

oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken,
    },
});

const mailOpts = {
    from: process.env.GMAIL_USER,
    to: process.env.RECIPIENT,
    subject: 'New message from your website',
    html: '<p>You have a new message from your website!</p>',
};

type Data =
    | {
          name: string;
          email: string;
          message: string;
      }
    | {
          error: string;
      };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { name, email, message } = req.body;

    const output = `
        <p>You have a new contact request</p>

        <h3>Contact details</h3>
        <ul>
        <li>FirstName: ${name}</li>
        <li>Email: ${email}</li>
        <li>Message: </li>
        </ul>
        <p>${message}</p>
        `;

    mailOpts.html = output;
    try {
        transporter.sendMail(mailOpts, (error: any, res: any) => {
            if (error) {
                throw new Error(error);
            }
            //console.log('Message sent: ', res);
        });
    
    } catch (error) {
        //console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }

    return res.status(200).json({ name, email, message });
}
