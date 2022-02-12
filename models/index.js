// import models
const Event = require("./Event");
const User = require("./User");
const Vote = require("./Vote");

// user and event association
User.hasMany(Event, {
  foreignKey: 'user_id'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});

// event and vote association
Vote.belongsTo(Event, {
  foreignKey: 'event_id'
});

Event.hasMany(Vote, {
  foreignKey: 'event_id'
})


module.exports = {
  Event,
  User,
  Vote,
};