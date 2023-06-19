const { DataTypes } = require('sequelize');
const db = require('../config/db'); // Assuming you have a Sequelize instance named 'sequelize'

const InternshipTheme = db.define('InternshipTheme', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    themeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = InternshipTheme;
