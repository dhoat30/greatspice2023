import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export default async (req, res) => {
  const { toEmail, fromEmail, message, formName } = req.body;
  const msg = {
    to: toEmail,
    from: fromEmail,
    subject: formName + 'Submission',
    text: message,
    html: message,
  };
  try {
    await sgMail.send(msg);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
};