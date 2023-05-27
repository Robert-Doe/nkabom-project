const {Sequelize} = require('sequelize');
const express = require('express')
const db=require('./config/db')
const app = express()
const path = require('path');
const PORT=process.env.PORT || 9999;

// ADD THIS
var cors = require('cors');
app.use(cors());

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

app.use(express.static(path.join(__dirname, 'build')));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/gigs',require('./routes/gigs'));
app.use('/api/interns',internRouter);
app.use('/api/supervisors',supervisorRouter);
app.use('/api/coordinators',coordinatorRouter);

app.get('/',(req,res)=>{
    res.send("Over Here Nothing dey /")
})

/*
app.get('/item',(req,res)=>{
    res.sendFile(path.resolve(__dirname+'/excel/extract.js'))
})
*/


// Handle all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


async function tryConnection() {

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

app.listen(PORT,()=>console.log(`Listening to PORT :${PORT}`))