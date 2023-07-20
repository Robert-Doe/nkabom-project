const express = require('express');
const router = express.Router();
const multer = require('multer');
const xlsx = require('xlsx');
const fs = require('fs');

const upload = multer({ dest: 'uploads/supervisors' });

// Upload supervisors from Excel file
router.post('/content', upload.single('file'), (req, res) => {
    const uploadDir = 'uploads/supervisors/';
    const filePath = uploadDir + req.file.originalname;
    console.log(filePath)
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
            //console.log(worksheet)
            rowObject[columnName] = worksheet[cellAddress].v;
        }
        rowData.push(rowObject);
    }

    res.json(rowData);
});

module.exports = router;
