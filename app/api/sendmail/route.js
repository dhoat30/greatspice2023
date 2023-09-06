import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
import { NextResponse } from 'next/server'

export async function GET(req, res) {

  return NextResponse.json(response)
}

export async function POST(req, res) {
  const { emailTo, fromEmail, message, replyTo, formName, firstName } = await req.json();
  var raw = JSON.stringify({
    "personalizations": [
      {
        "to": [
          {
            "email": emailTo,
            "name": "Contact Form"
          }
        ],
        "subject": `${formName} Submission`
      }
    ],
    "content": [
      {
        "type": "text/plain",
        "value": message
      }
    ],
    "from": {
      "email": fromEmail,
      "name": `Great Spice - ${formName} `
    },
    "reply_to": {
      "email": replyTo,
      "name": firstName
    }
  });

  var requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer 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',
      'Content-Type': 'application/json'
    },
    body: raw,
    redirect: 'follow'
  };


  try {
    let response = await fetch("https://api.sendgrid.com/v3/mail/send", requestOptions)


    return NextResponse.json({ message: "This Worked", success: true, data: response });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: error, success: false });
    // res.status(500).send('Error sending email');

  }
};