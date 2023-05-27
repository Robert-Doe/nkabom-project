const Sequelize = require('sequelize')
const db = require('../config/db')

const InternAuth = db.define('InternAuth', {
    studentId: {
       primaryKey:true,
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keyHash: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = InternAuth