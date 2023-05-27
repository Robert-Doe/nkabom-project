// Import the required libraries
const express = require('express');
const router = express.Router();

// Import the Coordinator model
const Coordinator = require('../models/coordinator');

// Get all coordinators
router.get('/', async (req, res) => {
    try {
        // Retrieve all coordinators from the database
        const coordinators = await Coordinator.findAll();

        // Return the coordinators data as JSON
        res.json(coordinators);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Get a single coordinator by ID
router.get('/:id', async (req, res) => {
    try {
        // Retrieve the coordinator with the specified id from the database
        const coordinator = await Coordinator.findByPk(req.params.id);

        // Return the coordinator data as JSON
        res.json(coordinator);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Create a new coordinator
router.post('/', async (req, res) => {
    try {
        // Create a new coordinator using the request body data
        const coordinator = await Coordinator.create(req.body);

        // Return the new coordinator data as JSON
        res.status(201).json(coordinator);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Update an existing coordinator by ID
router.put('/:id', async (req, res) => {
    try {
        // Retrieve the coordinator with the specified id from the database
        const coordinator = await Coordinator.findByPk(req.params.id);

        // Update the coordinator record with the request body data
        await coordinator.update(req.body);

        // Return the updated coordinator data as JSON
        res.json(coordinator);
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Delete an existing coordinator by ID
router.delete('/:id', async (req, res) => {
    try {
        // Retrieve the coordinator with the specified id from the database
        const coordinator = await Coordinator.findByPk(req.params.id);

        // Delete the coordinator record
        await coordinator.destroy();

        // Return a success message as JSON
        res.json({ message: 'Coordinator record deleted successfully.' });
    } catch (error) {
        // Return an error message if an error occurs
        res.status(500).json({ message: error.message });
    }
});

// Export the router for use in other modules
module.exports = router;
