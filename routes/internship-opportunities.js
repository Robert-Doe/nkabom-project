const express = require('express');
const router = express.Router();
const InternshipOpportunity = require('../models/InternshipOpportunity');
const {v4: uuidv4} = require("uuid");
// Get all internship opportunities
router.get('/', async (req, res) => {
    try {
        const internships = await InternshipOpportunity.findAll();
        res.json(internships);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get a specific internship opportunity
router.get('/:id', async (req, res) => {
    try {
        const internship = await InternshipOpportunity.findByPk(req.params.id);
        if (!internship) {
            return res.status(404).json({ message: 'Internship Opportunity not found' });
        }
        res.json(internship);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Create a new internship opportunity
router.post('/', async (req, res) => {
    const id=uuidv4()
    try {
        const {
            title,
            description,
            program,
            link,
            startDate,
            endDate,
            phone,
            email,
            location,
            region,
        } = req.body;

        const internship = await InternshipOpportunity.create({
           id,
            title,
            description,
            program,
            link,
            startDate,
            endDate,
            phone,
            email,
            location,
            region,
        });

        res.status(201).json(internship);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Update an existing internship opportunity
router.put('/:id', async (req, res) => {
    try {
        const {
            title,
            description,
            program,
            link,
            startDate,
            endDate,
            phone,
            email,
            location,
            region,
        } = req.body;

        const internship = await InternshipOpportunity.findByPk(req.params.id);
        if (!internship) {
            return res.status(404).json({ message: 'Internship Opportunity not found' });
        }

        await internship.update({
            title,
            description,
            program,
            link,
            startDate,
            endDate,
            phone,
            email,
            location,
            region,
        });

        res.json(internship);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Delete an internship opportunity
router.delete('/:id', async (req, res) => {
    try {
        const internship = await InternshipOpportunity.findByPk(req.params.id);
        if (!internship) {
            return res.status(404).json({ message: 'Internship Opportunity not found' });
        }

        await internship.destroy();

        res.json({ message: 'Internship Opportunity deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
