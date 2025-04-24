let firstObj = {
    name: 'Adam',
    age: 23
}

let secondObj = firstObj;

firstObj.name = 'steve'

console.log(firstObj);
console.log(secondObj);