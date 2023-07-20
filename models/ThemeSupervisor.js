const { Sequelize } = require('sequelize');
const db = require('../config/db'); // Assuming you have a Sequelize instance named 'sequelize'
const InternshipThemes = require('./InternshipTheme')
const Supervisors = require('./Supervisor')
const ThemeSupervisor = db.define('ThemeSupervisors', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    themeId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'InternshipThemes', // Assuming you have an 'InternshipThemes' table
            key: 'id',
        },
    },
    supervisorId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'Supervisors', // Assuming you have a 'Supervisors' table
            key: 'id',
        },
    },
});



module.exports = ThemeSupervisor;
