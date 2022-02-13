const { Vote } = require("../models");

const votedata = [
  {
    event_id: 1,
    days: ["Sunday", "Thursday", "Friday", "Saturday"],
  },
  {
    event_id: 1,
    days: ["Sunday", "Monday", "Saturday"],
  },
  {
    event_id: 1,
    days: ["Sunday", "Tuesday", "Wednesday", "Friday", "Saturday"],
  },
  {
    event_id: 2,
    days: ["Tuesday"],
  },
  {
    event_id: 2,
    days: ["Sunday"],
  },
  {
    event_id: 2,
    days: ["Sunday", "Tuesday"],
  },
  {
    event_id: 2,
    days: ["Sunday", "Tuesday"],
  },
  {
    event_id: 2,
    days: [],
  },
  {
    event_id: 2,
    days: ["Tuesday"],
  },
  {
    event_id: 2,
    days: ["Tuesday"],
  },
  {
    event_id: 2,
    days: ["Sunday", "Tuesday"],
  },
  {
    event_id: 2,
    days: ["Sunday", "Tuesday"],
  },
  {
    event_id: 2,
    days: ["Sunday", "Tuesday"],
  },
  {
    event_id: 2,
    days: ["Tuesday"],
  },
  {
    event_id: 2,
    days: ["Sunday", "Tuesday"],
  },
  {
    event_id: 2,
    days: ["Sunday"],
  },
  {
    event_id: 2,
    days: ["Sunday", "Tuesday"],
  },
  {
    event_id: 2,
    days: ["Sunday", "Tuesday"],
  },
  {
    event_id: 2,
    days: ["Sunday", "Tuesday"],
  },
  {
    event_id: 2,
    days: ["Sunday", "Tuesday"],
  },
  {
    event_id: 3,
    days: ["Monday", "Thursday", "Friday"],
  },
  {
    event_id: 3,
    days: ["Monday", "Tuesday"],
  },
  {
    event_id: 3,
    days: ["Wednesday", "Friday"],
  },
  {
    event_id: 3,
    days: ["Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  {
    event_id: 3,
    days: [],
  },
  {
    event_id: 4,
    days: ["Sunday", "Friday", "Saturday"],
  },
  {
    event_id: 4,
    days: ["Sunday", "Saturday"],
  },
  {
    event_id: 4,
    days: ["Sunday"],
  },
  {
    event_id: 4,
    days: ["Saturday"],
  },
  {
    event_id: 4,
    days: ["Friday", "Saturday"],
  },
  {
    event_id: 4,
    days: ["Sunday", "Saturday"],
  },
  {
    event_id: 4,
    days: ["Sunday", "Friday", "Saturday"],
  },
];

const voteSeeds = () => Vote.bulkCreate(votedata);

module.exports = voteSeeds;
