const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require("fs");
const News=require("../models/News")
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Directory for storing uploaded files
const uploadDirectory = 'uploads/news/';

// Create the directory if it doesn't exist
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}



// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory); // Directory where the uploaded files will be stored
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
});

const upload = multer({ storage });

// Handle the POST request
// Handle the POST request
router.post('/', upload.single('picture'), async (req, res) => {
    const {title, description, link} = req.body;
    const picture = req.file;

    // Perform any necessary operations with the form data and picture
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Link:', link);
    console.log('Picture:', picture);

    // Generate the URL of the uploaded picture
    const pictureUrl = req.protocol + '://' + req.get('host') + `/${uploadDirectory}` + picture.filename;

    // Construct the updated news object
    const updatedNews = {
        title,
        description,
        link,
        pictureUrl
    };

    // Create the news item in the database
    const newsItem = await News.create({
        id: uuidv4(),
        title,
        description,
        link,
        pictureUrl,
    });

    // Respond with the success message and the updated news data
    res.status(201).json({
        message: 'Data received and image uploaded successfully',
        news: updatedNews
    });
});


/*// Create a new news item
router.post('/', async (req, res) => {
    try {
        const { title, description, link, pictureUrl } = req.body;

            // Create the news item in the database
            const newsItem = await News.create({
                title,
                description,
                link,
                pictureUrl,
            });

            res.status(201).json(newsItem);
        } catch (error) {
            console.error('Error creating news item:', error);
            res.status(500).json({ error: 'Failed to create news item' });
        }
});*/

// Read all news items
router.get('/', async (req, res) => {
    try {
        // Fetch all news items from the database
        const newsItems = await News.findAll();

        res.json(newsItems);
    } catch (error) {
        console.error('Error retrieving news items:', error);
        res.status(500).json({ error: 'Failed to retrieve news items' });
    }
});

// Read a single news item by ID
router.get('/:id', async (req, res) => {
    try {
        const newsItemId = req.params.id;

        // Find the news item by ID in the database
        const newsItem = await News.findByPk(newsItemId);

        if (newsItem) {
            res.json(newsItem);
        } else {
            res.status(404).json({ error: 'News item not found' });
        }
    } catch (error) {
        console.error('Error retrieving news item:', error);
        res.status(500).json({ error: 'Failed to retrieve news item' });
    }
});

// Update a news item
router.put('/:id', async (req, res) => {
    try {
        const newsItemId = req.params.id;
        const { title, description, link, pictureUrl } = req.body;

        // Find the news item by ID in the database
        const newsItem = await News.findByPk(newsItemId);

        if (newsItem) {
            // Update the news item in the database
            await newsItem.update({
                title,
                description,
                link,
                pictureUrl,
            });

            res.json(newsItem);
        } else {
            res.status(404).json({ error: 'News item not found' });
        }
    } catch (error) {
        console.error('Error updating news item:', error);
        res.status(500).json({ error: 'Failed to update news item' });
    }
});

// Delete a news item
router.delete('/:id', async (req, res) => {
    try {
        const newsItemId = req.params.id;

        // Find the news item by ID in the database
        const newsItem = await News.findByPk(newsItemId);

        if (newsItem) {
            // Delete the news item from the database
            await newsItem.destroy();

            res.json({ message: 'News item deleted successfully' });
        } else {
            res.status(404).json({ error: 'News item not found' });
        }
    } catch (error) {
        console.error('Error deleting news item:', error);
        res.status(500).json({ error: 'Failed to delete news item' });
    }
});

module.exports = router;
