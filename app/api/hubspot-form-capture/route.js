import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
import { NextResponse } from 'next/server'

export async function GET(req, res) {
  return NextResponse.json(response)
}

export async function POST(req, res) {
  const { replyTo, firstName, lastName, phoneNumber } = await req.json();
  let data = JSON.stringify({
    "properties": {
      "email": replyTo,
      "firstname": firstName,
      "lastname": lastName,
      "phone": phoneNumber,
    }
  });

  var requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: data,
    redirect: 'follow'
  };


  try {
    let response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", requestOptions)

    return NextResponse.json({ message: "Success", success: true, data: response });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: error, success: false });
    // res.status(500).send('Error sending email');

  }
};