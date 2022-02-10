const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // name of the Event
    eventname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // we are going to need to keep track of the links we are sending; suggest using array of links in event model

    // code below is unfinished -- needs to be matched with similar code in User.js?
    organizer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

module.exports = Event;
