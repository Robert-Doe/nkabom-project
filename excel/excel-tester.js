var xlsx = require('xlsx');

var workbook = xlsx.readFile('./customers.xlsx');
let worksheet = workbook.Sheets[workbook.SheetNames[0]];

var range = xlsx.utils.decode_range(worksheet['!ref']);
var numRows = range.e.r - range.s.r + 1;

var columnNames = [];
for (let c = range.s.c; c <= range.e.c; c++) {
    var cellAddress = xlsx.utils.encode_cell({ r: range.s.r, c });
    var columnName = worksheet[cellAddress].v;
    columnNames.push(columnName);
}

var rowData = [];
for (let r = range.s.r + 1; r <= range.e.r; r++) {
    var rowObject = {};
    for (let c = range.s.c; c <= range.e.c; c++) {
        var columnName = columnNames[c - range.s.c];
        var cellAddress = xlsx.utils.encode_cell({ r, c });
        var cellValue = worksheet[cellAddress].v;
        rowObject[columnName] = cellValue;
    }
    rowData.push(rowObject);
}

console.log(rowData);
