const Sequelize = require('sequelize')
const db = require('../config/db')

const Intern = db.define('Intern', {
    studentId: {
        primaryKey: true, type: Sequelize.STRING, allowNull: false,
    }, firstName: {
        type: Sequelize.STRING, allowNull: false
    }, lastName: {
        type: Sequelize.STRING, allowNull: false
    }, email: {
        type: Sequelize.STRING, allowNull: false,
    }, phone: {
        type: Sequelize.STRING, allowNull: true
    }, address: {
        type: Sequelize.STRING, allowNull: true
    }, departmentId: {
        type: Sequelize.STRING, allowNull: false
    }, photoUrl: {
        type: Sequelize.STRING, allowNull: true
    }, dob: {
        type: Sequelize.STRING, allowNull: false
    }, bio: {
        type: Sequelize.TEXT, allowNull: true
    }
});

module.exports = Intern