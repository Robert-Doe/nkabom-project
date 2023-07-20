const express = require('express');
const router = express.Router();
const { Department } = require('../models/Department');

// Get all departments
router.get('/', async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get a single department by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const department = await Department.findByPk(id);
        if (department) {
            res.json(department);
        } else {
            res.status(404).json({ message: 'Department not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Create a new department
router.post('/', async (req, res) => {
    const { id, name } = req.body;

    try {
        const department = await Department.create({ id, name });
        res.status(201).json(department);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update a department by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const department = await Department.findByPk(id);
        if (department) {
            department.name = name;
            await department.save();
            res.json(department);
        } else {
            res.status(404).json({ message: 'Department not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Delete a department by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const department = await Department.findByPk(id);
        if (department) {
            await department.destroy();
            res.json({ message: 'Department deleted' });
        } else {
            res.status(404).json({ message: 'Department not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
