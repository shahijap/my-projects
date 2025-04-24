// some method 
// some: condition check: to get true or false based on condition.
// it will returns true if even 1 element satisfies the condition.
const transactions = [-1000, -3000, -4000, -2000, 890, -3000, -4500];

let result = transactions.some(function(n) {
    return n > 0;
})
console.log(result);

// Every method

// every element should satisfy the condition then only it returns true

let resultsEvery = transactions.every(function(n) {
    return n > 0
})
console.log(resultsEvery);


