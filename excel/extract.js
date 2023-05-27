var xlsx = require('xlsx')

var workbook = xlsx.readFile("./customers.xlsx")
let worksheet = workbook.Sheets[workbook.SheetNames[0]]

for (let index = 2; index < 7; index++) {
    const id = worksheet[`A${index}`].v;
    const name = worksheet[`B${index}`].v;

    console.log({
        id, name
    })
}