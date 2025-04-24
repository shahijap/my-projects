const Excel = require('exceljs');
const workbook = new Excel.Workbook();

const worksheet = workbook.addWorksheet('my Sheet');
const fileName = 'basicexcel.xlsx';

const headers = [
    { header: 'First Name', key: 'fn', width: 15 },
    { header: 'Last Name', key: 'ln', width: 15 },
    { header: 'Occupation', key: 'occ', width: 15 },
    { header: 'Salary', key: 'sal', width: 15 },
];

//Via the columns property, we add column headers and define column keys and widths.

worksheet.columns = headers;

//We add row data with addRow.

worksheet.addRows([
    ['John', 'Richard', 'Business Analyst', 250000],
    ['Roger', 'Roe', 'driver', 980],
    ['Lucy', 'Mallory', 'teacher', 780],
    ['Peter', 'Smith', 'programmer', 2300]
]);

worksheet.getRow(1).font = { size: 16 }
worksheet.getRow(1).fill = { 
    type: 'pattern', 
    pattern:'darkTrellis', 
    fgColor: { argb: 'FFFFFF00' }, 
    bgColor: { argb : 'FF0000FF' } 
}

//We refer to the first column via the key name. The eachCell is used to iterate over data.

worksheet.getColumn('fn').eachCell((cell, rn) => {
    console.log(cell.value);
});
console.log('------------------------------');

//Here, we get the column by the assigned letter.

worksheet.getColumn('B').eachCell((cell, rn) => {
    console.log(cell.value);
});
console.log('--------------------------------');

//we refer to the third column via the index value.

worksheet.getColumn(3).eachCell((cell, rn) => {
    console.log(cell.value);
});
console.log('--------------------------------');

//We get the number of columns with data with the actualColumnCount property.

console.log(`There are ${worksheet.actualColumnCount} columns`);

workbook.xlsx.writeFile(fileName)
.then(() => {
    console.log('file created');
})
.catch(err => {
    console.log(err.message);
})

