const Sequelize= require('sequelize')
const db = require('../config/db')

const Department = db.define('Department', {
    id:{
        primaryKey:true,
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports=Department