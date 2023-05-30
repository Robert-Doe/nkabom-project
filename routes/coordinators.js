// Import the required libraries
const express = require('express');
const router = express.Router();

// Import the Coordinator model
const Coordinator = require('../models/coordinator');

const secretKey = process.env.COORDINATOR_ACCESS_TOKEN_SECRET;

// Get all coordinators
router.get('/', async (req, res) => {
    try {
        const coordinators = await Coordinator.findAll();
        res.json(coordinators);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single coordinator by ID
router.get('/:id', async (req, res) => {
    try {
        const coordinator = await Coordinator.findByPk(req.params.id);
        res.json(coordinator);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new coordinator
router.post('/', async (req, res) => {
    try {
        const coordinator = await Coordinator.create(req.body);
        res.status(201).json(coordinator);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an existing coordinator by ID
router.put('/:id', async (req, res) => {
    try {
        const coordinator = await Coordinator.findByPk(req.params.id);
        await coordinator.update(req.body);
        res.json(coordinator);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an existing coordinator by ID
router.delete('/:id', async (req, res) => {
    try {
        const coordinator = await Coordinator.findByPk(req.params.id);
        await coordinator.destroy();
        res.json({ message: 'Coordinator record deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Authentication and Authorization
router.post('/login', async (req, res) => {
    const { coordinatorId, passKey } = req.body;

    try {
        const coordinator = await authenticateCoordinator(coordinatorId, passKey);

        if (!coordinator) {
            return res.status(401).json({ message: 'Invalid coordinator ID or password' });
        }

        const token = generateToken(coordinator);
        res.json({ token, coordinator });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

async function authenticateCoordinator(coordinatorId, password) {
    try {
        // Retrieve the coordinator with the specified coordinatorId from the database
        const coordinator = await Coordinator.findByPk(coordinatorId);

        if (!coordinator) {
            // The coordinator doesn't exist in the database
            return null;
        }

        const isPasswordValid = bcrypt.compareSync(password, coordinator.password);

        if (!isPasswordValid) {
            // The password is incorrect
            return null;
        }

        // The coordinator exists and the password is correct, so we can return the coordinator object
        return coordinator;
    } catch (error) {
        console.error(error);
        return null;
    }
}


// Export the router for use in other modules
module.exports = router;

