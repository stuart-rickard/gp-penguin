const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Vote extends Model { }

Vote.init(
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
        days: {
            type: DataTypes.STRING,
            allownull: false,
            get() {
                return this.getDataValue("days").split(";");
            },
            set(val) {
                this.setDataValue("days", val.join(";"));
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "vote",
    }
);

module.exports = Vote;
