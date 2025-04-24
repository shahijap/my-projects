// we will be given number and we have to check if the square is even or not.

// Imperative way of writing code
const a = 20;
const aSquared = a * a;
let isEven;
if(aSquared % 2 === 0) {
    isEven = true;
} else {
    isEven = false;
}
console.log({isEven});

//Declarative way of writing code

const checkForSquare = a => (a*a % 2) === 0 ? true : false;

console.log(checkForSquare(2));