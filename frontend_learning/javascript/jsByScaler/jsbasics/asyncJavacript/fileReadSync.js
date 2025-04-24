// fs module is used to read a file in sync
var fs = require('fs');

console.log('First Line');


let data = fs.readFileSync('f1Test.txt');

console.log('The file 1 data has -> ' + data);  // if we have a larger time then it takes some time to execute

let data1 = fs.readFileSync('f2Test.txt');

console.log('The file 2 data has -> ' + data1);


console.log('Last Line');