// find always return the first element of an array that satisfies the condition.

const transactions = [1000, 2000, 300, -4500, 3500, -838];

const firstWithDrawl = transactions.find(function(n) {
    return n < 0;
})
console.log('firstWithDrawl -> ', firstWithDrawl);

// findIndex 

const firstWithDrawlIndex = transactions.findIndex(function(n) {
    return n < 0;
})
console.log('firstWithDrawlIndex -> ', firstWithDrawlIndex);


