// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = function (
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
      console.log("Email sent to " + emailAddressOfRecipient);
    })
    .catch((error) => {
      console.log("There was an error sending to " + emailAddressOfRecipient);
      console.error(error);
    });
};

const sendInviteEmails = function (
  emailAddressesArray,
  eventTitle,
  newEventID
) {
  if (emailAddressesArray.length) {
    for (let i = 0; i < emailAddressesArray.length; i++) {
      const msg = {
        to: emailAddressesArray[i],
        from: "gp-penguin-email@bau-dev.com",
        subject: eventTitle,
        text: `You've been invited to an event.  Please click this link to let us know your availability.  http://localhost:3001/vote/${newEventID}`,
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent to " + emailAddressesArray[i]);
        })
        .catch((error) => {
          console.log(
            "There was an error sending to " + emailAddressesArray[i]
          );
          console.error(error);
        });
    }
  }
};

module.exports = {
  sendEmail,
  sendInviteEmails,
};