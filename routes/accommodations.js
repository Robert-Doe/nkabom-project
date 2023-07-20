const express = require('express');
const router = express.Router();
const Accommodation = require('../models/Accommodation');
const multer = require("multer");
const fs = require("fs");
const xlsx = require("xlsx");

const upload = multer({ dest: 'uploads/accommodations' });

// Upload accommodations from Excel file
router.post('/upload', upload.single('file'), async (req, res) => {
  const uploadDir = 'uploads/accommodations/';
  const filePath = uploadDir + req.file.originalname;
  console.log(filePath);

  //Create the directory if it doesn't exist
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  fs.renameSync(req.file.path, filePath);

  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  const range = xlsx.utils.decode_range(worksheet['!ref']);
  const numRows = range.e.r - range.s.r + 1;

  const columnNames = [];
  for (let c = range.s.c; c <= range.e.c; c++) {
    const cellAddress = xlsx.utils.encode_cell({ r: range.s.r, c });
    const columnName = worksheet[cellAddress].v;
    columnNames.push(columnName);
  }

  const rowData = [];
  for (let r = range.s.r + 1; r <= range.e.r; r++) {
    const rowObject = {};
    for (let c = range.s.c; c <= range.e.c; c++) {
      const columnName = columnNames[c - range.s.c];
      const cellAddress = xlsx.utils.encode_cell({ r, c });
      if(columnName){
        rowObject[columnName] = worksheet[cellAddress].v;
      }
    }
    rowData.push(rowObject);
  }

  // Insert the data into the database using Sequelize
  try {
    const createdData = await Accommodation.bulkCreate(rowData);
    res.json(createdData);
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ message: 'Error inserting data' });
  }
});



// Get all accommodations
router.get('/', async (req, res) => {
  try {
    const accommodations = await Accommodation.findAll();
    res.json(accommodations);
  } catch (error) {
    console.error('Error fetching accommodations:', error);
    res.status(500).json({ message: 'Failed to fetch accommodations' });
  }
});

// Create a new accommodation
router.post('/', async (req, res) => {
  try {
    const { name, location, description, ownerName, ownerEmail, ownerPhone } = req.body;
    const newAccommodation = await Accommodation.create({
      name,
      location,
      description,
      ownerName,
      ownerEmail,
      ownerPhone,
    });
    res.status(201).json(newAccommodation);
  } catch (error) {
    console.error('Error creating accommodation:', error);
    res.status(500).json({ message: 'Failed to create accommodation' });
  }
});

// Get a single accommodation by ID
router.get('/:id', async (req, res) => {
  try {
    const accommodation = await Accommodation.findByPk(req.params.id);
    if (!accommodation) {
      return res.status(404).json({ message: 'Accommodation not found' });
    }
    res.json(accommodation);
  } catch (error) {
    console.error('Error fetching accommodation:', error);
    res.status(500).json({ message: 'Failed to fetch accommodation' });
  }
});

// Update an accommodation by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, location, description, ownerName, ownerEmail, ownerPhone } = req.body;
    const accommodation = await Accommodation.findByPk(req.params.id);
    if (!accommodation) {
      return res.status(404).json({ message: 'Accommodation not found' });
    }
    await accommodation.update({
      name,
      location,
      description,
      ownerName,
      ownerEmail,
      ownerPhone,
    });
    res.json(accommodation);
  } catch (error) {
    console.error('Error updating accommodation:', error);
    res.status(500).json({ message: 'Failed to update accommodation' });
  }
});

// Delete an accommodation by ID
router.delete('/:id', async (req, res) => {
  try {
    const accommodation = await Accommodation.findByPk(req.params.id);
    if (!accommodation) {
      return res.status(404).json({ message: 'Accommodation not found' });
    }
    await accommodation.destroy();
    res.json({ message: 'Accommodation deleted successfully' });
  } catch (error) {
    console.error('Error deleting accommodation:', error);
    res.status(500).json({ message: 'Failed to delete accommodation' });
  }
});

// Export the router
module.exports = router;
