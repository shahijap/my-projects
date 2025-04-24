const Excel = require('exceljs');
const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet('My First Excel Worksheet');
worksheet.addRows([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]);
//refer to the top-left cell via the 'A1' address. and get the value
const v0 = worksheet.getCell('A1').value;
console.log({ v0 });
//Another way is to pass a row and a column number to the getCell function.
const v1 = worksheet.getCell(1, 2).value;
console.log({ v1 });
//The third way is to chain the getRow and getCell calls
const v2 = worksheet.getRow(2).getCell(2).value;
console.log({ v2 });
