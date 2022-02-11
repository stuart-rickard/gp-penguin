// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const connectAndSendEmail = function (
  emailAddressOfRecipient,
  emailSubject,
  emailMessage
) {
  const msg = {
    to: emailAddressOfRecipient,
    from: "gp-penguin-email@bau-dev.com",
    subject: emailSubject,
    text: emailMessage,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

// this function expects: emailAddressOfRecipient (string), emailSubject (string), emailMessage (string)

module.exports = connectAndSendEmail;
