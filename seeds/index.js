const userSeeds = require("./User-seeds");
const voteSeeds = require("./Vote-seeds");
const eventSeeds = require("./Event-seeds");

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
