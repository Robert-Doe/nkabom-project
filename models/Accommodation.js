const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Accommodation = db.define('Accommodation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
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
    ownerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ownerEmail: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ownerPhone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Accommodation;


