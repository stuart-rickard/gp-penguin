// const sequelize = require('../config/connection');
const { User } = require("../models");

const userdata = [
  {
    username: "Brian",
    email: "brian@gmail.com",
    password: "ruby",
  },
  {
    username: "Chance",
    email: "chance@gmail.com",
    password: "diamond",
  },
  {
    username: "Noah",
    email: "noah@gmail.com",
    password: "emerald",
  },
  {
    username: "Joanne",
    email: "joanne@gmail.com",
    password: "sapphire",
  },
  {
    username: "Stuart",
    email: "stuart@gmail.com",
    password: "tanzanite",
  },
  {
    username: "Kevin",
    email: "kevin@gmail.com",
    password: "opal",
  },
  {
    username: "David",
    email: "david@gmail.com",
    password: "amethyst",
  },
  {
    username: "VJ",
    email: "vj@gmail.com",
    password: "pearl",
  },
];

const userSeeds = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = userSeeds;
