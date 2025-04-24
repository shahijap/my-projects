// Here it is parallel execution 
// so the order of execution can be random (f3, f4 and next f4, f3)
var fs = require('fs');

console.log('first line');

fs.readFile('f3Test.txt', cb1) 

function cb1(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('The file has data -> ' + data)
    }
}

fs.readFile('f4Test.txt', cb2)

function cb2(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('The file has data -> ' + data);
    }
}

console.log('last line');