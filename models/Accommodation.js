const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Accommodation = sequelize.define(
    'Accommodation',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        availability: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        accommodationType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roomType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        additionalNotes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    }
);

module.exports = Accommodation;
