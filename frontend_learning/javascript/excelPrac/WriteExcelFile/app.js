const Excel = require('exceljs');
const workbook = new Excel.Workbook();

const worksheet = workbook.addWorksheet('Iam Writing a sheet');
const fileName = 'simple.xlsx';

worksheet.getCell('A1').value = 'John Henry';
worksheet.getCell('B1').value = 'Gardener';
worksheet.getCell('C1').value = new Date();

const row3 = worksheet.getRow(3);
row3.values = [1, 2, 3, 4, 5, 6];

workbook.xlsx.writeFile(fileName)
.then(() => {
    console.log('File created');
})
.catch(err => {
    console.log(err.message);
})