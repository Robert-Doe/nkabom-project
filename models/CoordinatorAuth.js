const Sequelize = require('sequelize')
const db = require('../config/db')

const CoordinatorAuth = db.define('CoordinatorAuth', {
    staffId: {
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

module.exports = CoordinatorAuth