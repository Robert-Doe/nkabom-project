const express = require('express');
const router = express.Router();
const { ThemeSupervisor, InternshipTheme, Supervisors } = require('../models');

// Get all InternshipThemeupervisor
router.get('/', async (req, res) => {
    try {
        const InternshipThemeupervisor = await ThemeSupervisor.findAll({
            include: [
                { model: InternshipTheme },
                { model: Supervisors }
            ]
        });
        res.json(InternshipThemeupervisor);
    } catch (error) {
        console.error('Error fetching InternshipThemeupervisor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Create a new InternshipThemeupervisor
router.post('/', async (req, res) => {
    try {
        const { themeId, supervisorId } = req.body;

        // Create a new InternshipThemeupervisor
        const InternshipThemeupervisor = await ThemeSupervisor.create({
            themeId,
            supervisorId
        });

        res.status(201).json(InternshipThemeupervisor);
    } catch (error) {
        console.error('Error creating InternshipThemeupervisor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update an existing InternshipThemeupervisor
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { themeId, supervisorId } = req.body;

        // Update the InternshipThemeupervisor
        const [updatedRows] = await ThemeSupervisor.update(
            { themeId, supervisorId },
            { where: { id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'InternshipThemeupervisor not found' });
        }

        res.json({ message: 'InternshipThemeupervisor updated successfully' });
    } catch (error) {
        console.error('Error updating InternshipThemeupervisor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Get a specific InternshipThemeupervisor
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Find the InternshipThemeupervisor by ID
        const InternshipThemeupervisor = await ThemeSupervisor.findByPk(id, {
            include: [
                { model: InternshipTheme },
                { model: Supervisors }
            ]
        });

        if (!InternshipThemeupervisor) {
            return res.status(404).json({ message: 'InternshipThemeupervisor not found' });
        }

        res.json(InternshipThemeupervisor);
    } catch (error) {
        console.error('Error fetching InternshipThemeupervisor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// Delete an InternshipThemeupervisor
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Delete the InternshipThemeupervisor
        const deletedRows = await ThemeSupervisor.destroy({ where: { id } });

        if (deletedRows === 0) {
            return res.status(404).json({ message: 'InternshipThemeupervisor not found' });
        }

        res.json({ message: 'InternshipThemeupervisor deleted successfully' });
    } catch (error) {
        console.error('Error deleting InternshipThemeupervisor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
