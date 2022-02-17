const connectAndSendEmail = require("./utils/email-connect-and-send");

connectAndSendEmail("chancecrawford30@gmail.com", 
    'You have been invited to vote!',
    `You have received an invitation to vote on the event: "Biking".
     Please go to this URL to access the event vote page.
     http://localhost:3001/vote/6
    `
    );