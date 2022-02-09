// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// the code below sends a test email
const msg = {
  to: "stuart@bau-dev.com",
  from: "gp-penguin-email@bau-dev.com",
  subject: "Test with SendGrid",
  text: "Using Node.js",
  html: "<strong>HTML code as example</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
