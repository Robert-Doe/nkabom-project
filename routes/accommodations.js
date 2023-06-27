const express = require('express');
const router = express.Router();

// Import the Accommodation model or define it if not already done
const Accommodation = require('../models/Accommodation');

// Route: POST /accommodations
// Description: Create a new accommodation
router.post('/', async (req, res) => {
    console.log("Posting Accomodation : ....")

    try {
        // Extract the accommodation data from the request body
        const {
            name,
            location,
            description,
            price,
            availability,
            accommodationType,
            roomType,
            ownerEmail,
            ownerName,
            ownerPhone,
            additionalNotes,
        } = req.body;

        // Create a new instance of the Accommodation model
        const newAccommodation = new Accommodation({
            name,
            location,
            description,
            price,
            availability,
            accommodationType,
            roomType,
            ownerEmail,
            ownerName,
            ownerPhone,
            additionalNotes,
        });

        // Save the new accommodation to the database
        const createdAccommodation = await newAccommodation.save();

        res.status(201).json(createdAccommodation);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
});

// Route: GET /accommodations
// Description: Get all accommodations
router.get('/', async (req, res) => {
    try {
        console.log("Someone tried visiting")
        const accommodations = await Accommodation.findAll();
        res.json(accommodations);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
});

// Route: GET /accommodations/:id
// Description: Get a single accommodation by ID
router.get('/:id', async (req, res) => {
    try {
        const accommodation = await Accommodation.findByPk(req.params.id);
        if (!accommodation) {
            return res.status(404).json({message: 'Accommodation not found'});
        }
        res.json(accommodation);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
});

// Route: PUT /accommodations/:id
// Description: Update a single accommodation by ID
router.put('/:id', async (req, res) => {
    try {
        const accommodation = await Accommodation.upsert(
            req.params.id,
            req.body,
            {new: true}
        );
        if (!accommodation) {
            return res.status(404).json({message: 'Accommodation not found'});
        }
        res.json(accommodation);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
});

// Route: DELETE /accommodations/:id
// Description: Delete a single accommodation by ID
router.delete('/:id', async (req, res) => {
    try {
        const accommodation = await Accommodation.findByIdAndRemove(req.params.id);
        if (!accommodation) {
            return res.status(404).json({message: 'Accommodation not found'});
        }
        res.json({message: 'Accommodation deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
});

// Export the router
module.exports = router;
