const userSeeds = require("./user-seeds");
const voteSeeds = require("./event-seeds");
const eventSeeds = require("./vote-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await userSeeds();
  console.log("--------------");

  await eventSeeds();
  console.log("--------------");

  await voteSeeds();
  console.log("--------------");
  process.exit(0);
};

seedAll();
