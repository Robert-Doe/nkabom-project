const Sequelize = require('sequelize')
const db = require('../config/db')

const Gig = db.define('gigs',{
    title:{
        type:Sequelize.STRING,
    },
    description:{
        type:Sequelize.STRING
    },
    technologies:{
        type:Sequelize.STRING
    },
    budget:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
})



module.exports=Gig;