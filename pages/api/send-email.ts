import type { NextApiRequest, NextApiResponse } from 'next';
import mailgun from 'mailgun-js';

const mg = mailgun({
    domain: process.env.MAILGUN_DOMAIN as string,
    apiKey: process.env.MAILGUN_API as string,
});

type Data =
    | {
          name: string;
          email: string;
          message: string;
      }
    | {
          error?: string;
          success?: boolean;
      };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const msg = {
            from: `postmaster@${process.env.MAILGUN_DOMAIN}`,
            to: `${process.env.RECIPIENT}`,
            subject: 'Email from gerar.ca',
            html: `
            <p>You have a new contact request</p>
            <h3>Contact details</h3>
            <ul>
            <li>FirstName: ${name}</li>
            <li>Email: ${email}</li>
            <li>Message: </li>
            </ul>
            <p>${message}</p>
            `,
        };

        try {
            const response = await mg.messages().send(msg);
           
            if (response) {
                console.log(response);
               return res.status(200).json({
                    success: true,
                });
            }
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error sending email' });
        }

        //return res.status(200).end();
    }
}
