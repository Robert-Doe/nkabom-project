const { DataTypes } = require('sequelize');
const db = require('../config/db');

const News = db.define('News', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pictureUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = News;
