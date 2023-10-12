const API_KEY = process.env.MAILGUN_API_KEY; 
const DOMAIN = 'sandboxddf1feb4a91c492fb633e4a349e5074d.mailgun.org';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY});
import { NextResponse } from 'next/server'

export async function GET(req, res) {

  return NextResponse.json(response)
}

export async function POST(req, res) {
  const { emailTo, fromEmail, message, replyTo, formName, firstName } = await req.json();
  console.log(emailTo)
  const messageData = {
    from: replyTo,
    to: emailTo,
    subject: 'Form Submission',
    text: message
  };
  

  try {
    let response = await client.messages.create(DOMAIN, messageData)

    return NextResponse.json({ message: "This Worked", success: true, data: response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error, success: false });
    // res.status(500).send('Error sending email');

  }
};