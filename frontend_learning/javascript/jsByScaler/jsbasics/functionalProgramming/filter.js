// you have to check for even numbers and put them in a seperate array.

let numbers = [1, 2, 20, 35, 12, 17, 46];
let evenNumbers = [];
let isEven = numbers.map(num => {
    if(num % 2 === 0) {
        evenNumbers.push(num)
    } else return;
});
console.log(evenNumbers);

// filter

// filter return a new array it will return all those elements that matches the specific condition
// if the condition is true it will return the element for that condition and if it is false it will discard that element.

let num = [1, 2, 20, 35, 12, 17, 46];
let evenNum = num.filter(function(n) {
    return n % 2 === 0
})
console.log('filterMethod -> ', evenNum);

const transactions = [1000, 3000, 4000, 2000, -898, 3000, -4500];

const depositedAmount = transactions.filter(function(amount) {
    return amount > 0
});
console.log(depositedAmount);