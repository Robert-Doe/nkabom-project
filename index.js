/*
const {Sequelize} = require('sequelize');
const express = require('express')
const db=require('./config/db')
const app = express()
const PORT=process.env.PORT || 9999;

const internRouter= require('./routes/interns')
const supervisorRouter= require('./routes/supervisors')
const coordinatorRouter= require('./routes/coordinators')

app.use(express.json())

tryConnection().then(r => console.log('Done'));
db.sync()
    .then(() => {
        console.log('Tables created successfully');
    })
    .catch((err) => {
        console.error('Error creating tables: ', err);
    });
app.get('/',(req,res)=>{
    res.send("Over Here Nothing dey /")
})

app.use('/gigs',require('./routes/gigs'));

app.use('/api/interns',internRouter);
app.use('/api/supervisors',supervisorRouter);
app.use('/api/coordinators',coordinatorRouter);




async function tryConnection() {

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

app.listen(PORT,()=>console.log(`Listening to PORT :${PORT}`))*/


const bcrypt = require('bcrypt');
const saltRounds = 10;

// Function to hash a password
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

// Example usage
const plainTextPassword = 'mySecurePassword123';
hashPassword(plainTextPassword)
    .then(hashedPassword => {
        console.log('Hashed password:', hashedPassword);
    })
    .catch(err => {
        console.error('Error hashing password:', err);
    });