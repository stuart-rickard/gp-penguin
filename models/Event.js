const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model { }

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // name of the Event
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        days: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('days').split(';')
            },
            set(val) {
                this.setDataValue('days', val.join(';'));
            }
        },
        invite_emails: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('invite_emails').split(';')
            },
            set(val) {
                this.setDataValue('invite_emails', val.join(';'));
            }
        }
    },

    // we are going to need to keep track of the links we are sending; suggest using array of links in event model



    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "event",
    }
);

module.exports = Event;
