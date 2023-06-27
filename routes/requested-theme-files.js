const express = require('express');
const router = express.Router();
const RequestedThemeFile = require('../models/RequestedThemeFile');
const {v4: uuidv4} = require("uuid");

// Get all requested theme files
router.get('/', async (req, res) => {
    try {
        const files = await RequestedThemeFile.findAll();
        res.json(files);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error'});
    }
});


// Route to fetch all RequestedThemeFiles with a specific themeId
router.get('/theme/:themeId', async (req, res) => {
    try {
        const themeId = req.params.themeId;
        const requestedThemeFiles = await RequestedThemeFile.findAll({ themeId });
        res.json(requestedThemeFiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get a specific requested theme file by themeId
router.get('/:fileId', async (req, res) => {
    const {fileId} = req.params;
    try {
        const file = await RequestedThemeFile.findByPk(fileId);
        if (!file) {
            return res.status(404).json({error: 'Requested theme file not found'});
        }
        res.json(file);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error'});
    }
});

// Create a new requested theme file
router.post('/', async (req, res) => {
    const {themeId, id, requestFileName} = req.body;
    try {
        const file = await RequestedThemeFile.create({themeId, id, requestFileName});
        res.status(201).json(file);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error'});
    }
});

// Delete a requested theme file
router.delete('/:id', async (req, res) => {
    const fileId = req.params.id;
    try {
        // Find the requested theme file by ID
        const file = await RequestedThemeFile.findByPk(fileId);

        if (!file) {
            return res.status(404).json({ error: 'Requested theme file not found' });
        }

        // Delete the requested theme file
        await file.destroy();

        res.status(200).json({ message: 'Requested theme file deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});



/*
router.post('/multiple-upload', async (req, res) => {
    const { fileNames,themeId, id} = req.body;

    try {
        for (const file of fileNames) {
            /!*const id = new Date().getTime();*!/
            const fileRequest={requestedFileName:file,id, themeId}
            const fileRequestedSaved = await RequestedThemeFile.create(fileRequest);
            console.log(fileRequestedSaved)
        }

        res.status(201).json({msg: "Insert Successful"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});
*/

router.post('/multiple-upload', async (req, res) => {
    const {requestedFiles, themeId} = req.body;

    try {
        for (const file of requestedFiles) {
            /*const id = new Date().getTime();*/
            const id = uuidv4();
            /*const fileRequest = {requestedFileName: file.name, id: file.id, themeId, type: file.type}*/
            const fileRequest = {requestedFileName: file.name, id, themeId, type: file.type}
            const fileRequestedSaved = await RequestedThemeFile.create(fileRequest);
            console.log(fileRequestedSaved)
        }

        res.status(201).json({msg: "Insert Successful"});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error'});
    }
});


module.exports = router;
