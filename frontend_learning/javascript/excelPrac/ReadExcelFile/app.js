//Exceljs read file
// reads data from three columns of the sheet.
const Excel = require('exceljs');

const workbook = new Excel.Workbook();
const fileName = 'myexcel.xlsx';

//To read the worksheet data, we use the readFile function.
workbook.xlsx.readFile(fileName)
.then(() => {
    //We get the worksheet with the getWorksheet function.
    const worksheet = workbook.getWorksheet('Sheet1');
    //We get the first column with getColumn
    const c1 = worksheet.getColumn(1);
    //We iterate over the current cells using the eachCell function.
    c1.eachCell(c => {
        console.log(c.value);
    });
    // Name
    // Stella
    // Richard
    const c2 = worksheet.getColumn(2);
    c2.eachCell(c => {
        console.log(c.value);
    });
    // Age
    // 23
    // 25
    const c3 = worksheet.getColumn(3);
    c3.eachCell(c => {
        console.log(c.value);
    });
    // Gender
    // F
    // M
})
.catch(err => {
    console.log(err.message);
})