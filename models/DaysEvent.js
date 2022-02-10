const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class DaysEvent extends Model {}

DaysEvent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "event",
        key: "id",
      },
    },
    day_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "day",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "daysEvent",
  }
);

module.exports = DaysEvent;
