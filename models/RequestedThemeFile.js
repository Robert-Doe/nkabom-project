const {DataTypes} = require('sequelize');
const db = require('../config/db');

const RequestedThemeFile = db.define('RequestedThemeFile', {
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
    },
    themeId: {
        type: DataTypes.STRING,
    },
    requestedFileName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = RequestedThemeFile;
