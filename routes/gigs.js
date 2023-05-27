const express = require('express')
const router = express.Router()
const db = require('../config/db')
const Gig = require('../models/Gig')


router.get('/', (req, res) => {
    Gig.findAll().then((gigs) => {
        console.log(gigs)
        res.send(gigs)
    }).catch((err) => console.log(err))
})

router.get('/add', (req, res) => {
    const data = {
        title: 'Looking for a react developer',
        technologies: 'react,javascript,html,css',
        description: 'alkjcljlaj adjlfakjdlfjl aww jodjalkajdlkjafdljaflaksjadslkja ljkadljk',
        email: 'robert@doe.com',
        budget: '$3000'
    }

    let {title, technologies, budget, email, description} = data;
    Gig.create({title, technologies, budget, email, description}).then(r => {
        console.log("Inserted")
        res.redirect('/')
    })
})
module.exports = router