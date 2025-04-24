let arr = [1, 2, 3, 4, 5];
let squaredArr = [];
for(let i=0; i<arr.length; i++) {
    squaredArr.push(arr[i] * arr[i])
}
console.log({squaredArr});

// map

// map will loop through every element of array and will perform specific operations that you have provided. 
// map method will always return a new array with your results.

const num = [1, 2, 3, 4, 5, 6, 7, 8];
const squaredNum = num.map(function(n) {
    return n * n
});

console.log('squaredNum' ,squaredNum);

const resNum =  num.map(n => n*n);
console.log('resultNum', resNum);


const transactions = [1000, 2000, 3000, -898, -4500]; // - is withdrawn
const inrToBollar = 80;

let transactionsInDollars = transactions.map(amount => `$${(amount / inrToBollar).toFixed(0)}`); //toFixed is used to round decimals

console.log(transactionsInDollars);

// forEach doesnot return anything it can be used inside the scope and returns elements not array.

let transactionsInDollarsUsingForEach = transactions.forEach(amount => console.log(`$${(amount / inrToBollar).toFixed(0)}`));

console.log(transactionsInDollarsUsingForEach); //gives undefined 