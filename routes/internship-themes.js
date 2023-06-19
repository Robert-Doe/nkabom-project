const express = require('express');
const router = express.Router();
const InternshipTheme = require('../models/InternshipTheme');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const xlsx = require('xlsx');
const fs = require('fs');

const upload = multer({ dest: 'uploads/supervisors' });

// Create a new internship theme
router.post('/', async (req, res) => {
    try {
        const id = uuidv4(); // Generate a unique ID using uuidv4
        const { themeName, startDate, endDate, comments } = req.body;

        console.log("Entering Internship Theme")

        const internshipTheme = await InternshipTheme.create({
            id,
            themeName,
            startDate,
            endDate,
            comments
        });

        res.status(201).json(internshipTheme);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Upload supervisors from Excel file
router.post('/:id/supervisors', upload.single('file'), (req, res) => {
    const uploadDir = 'uploads/supervisors';
    const filePath = uploadDir + req.file.originalname;

    // Create the directory if it doesn't exist
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
            const cellValue = worksheet[cellAddress].v;
            rowObject[columnName] = cellValue;
        }
        rowData.push(rowObject);
    }

    res.json(rowData);
});

// Get all internship themes
router.get('/', async (req, res) => {
    try {
        const internshipThemes = await InternshipTheme.findAll();
        res.status(200).json(internshipThemes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get a single internship theme by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const internshipTheme = await InternshipTheme.findByPk(id);
        if (!internshipTheme) {
            res.status(404).json({ message: 'Internship theme not found' });
        } else {
            res.status(200).json(internshipTheme);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:id/supervisors', async (req, res) => {
    try {
        const supervisors = [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' },
            { id: 3, name: 'David Johnson' },
            { id: 4, name: 'Emily Brown' },
            { id: 5, name: 'Michael Wilson' },
        ];
        res.json(supervisors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update an internship theme
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { themeName, startDate, endDate, comments } = req.body;
        const updatedInternshipTheme = await InternshipTheme.update(
            { themeName, startDate, endDate, comments },
            { where: { id }, returning: true }
        );
        if (updatedInternshipTheme[0] === 0) {
            res.status(404).json({ message: 'Internship theme not found' });
        } else {
            res.status(200).json(updatedInternshipTheme[1][0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete an internship theme
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCount = await InternshipTheme.destroy({ where: { id } });
        if (deletedCount === 0) {
            res.status(404).json({ message: 'Internship theme not found' });
        } else {
            res.status(204).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
