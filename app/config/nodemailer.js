const nodemailer = require('nodemailer');

const { SMTP_USERNAME, SMTP_PASSWORD, FRONTEND_URL, SMTP_HOST, SMTP_PORT } =
  process.env;

const transport = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});

module.exports.sendConfirmationEmail = (email, confirmationCode) => {
  transport
    .sendMail({
      from: SMTP_USERNAME,
      to: email,
      subject: 'Account Confirmation',
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${email}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=${FRONTEND_URL}/confirm/${confirmationCode}> Click here</a>
          </div>`,
    })
    .catch((err) => console.log(err));
};
