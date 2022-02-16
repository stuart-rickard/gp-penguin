// const sequelize = require("../config/connection");
const { Event } = require("../models");

const eventdata = [
  {
    title: "Office party",
    user_id: 1,
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    invite_emails: ["test@t.com", "test2@t.com", "test3@t.com", "test4@t.com"],
  },
  {
    title: "Birthday party",
    user_id: 2,
    days: ["Sunday", "Tuesday"],
    invite_emails: [
      "test@t.com",
      "test22@t.com",
      "test23@t.com",
      "test24@t.com",
    ],
  },
  {
    title: "Work meeting",
    user_id: 3,
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    invite_emails: [
      "test@t.com",
      "test32@t.com",
      "test33@t.com",
      "test34@t.com",
    ],
  },
  {
    title: "Hike",
    user_id: 4,
    days: ["Sunday", "Friday", "Saturday"],
    invite_emails: [
      "test@t.com",
      "test42@t.com",
      "test43@t.com",
      "test44@t.com",
    ],
  },
  {
    title: "Surf",
    user_id: 5,
    days: ["Monday", "Wednesday", "Friday"],
    invite_emails: [
      "test@t.com",
      "test52@t.com",
      "test53@t.com",
      "test54@t.com",
    ],
  },
];
const eventSeeds = () => Event.bulkCreate(eventdata, { individualHooks: true });

module.exports = eventSeeds;
