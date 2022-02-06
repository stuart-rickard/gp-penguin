const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Day extends Model { }

Day.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // name of the day: Monday through Sunday
        dayname: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'day'
    }
);

module.exports = Day;