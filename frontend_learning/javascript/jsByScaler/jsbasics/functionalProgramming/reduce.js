// you need the sum of every element in an array;
// imperative way
let num = [1, 2, 3, 4, 5, 6];

let sum = 0;

for(let i = 0; i < num.length; i++) {
    sum = sum + num[i];
}
console.log('sum -> ', sum);

//declarative way: use reduce method
// reduce method returns a single element or result
// reduce takes four parameters.

let result = num.reduce(function(accumulator, value) {
    let updatedSum = accumulator + value;  // 0 + 1 = 1
    return updatedSum; // 1 accumulator is updated as 1 by taking updated sum returned value.
    
}, 0) // here 0 is the accumulator initial value

console.log('sum using reduce -> ', result);  // the passes are 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10, 10 + 5 = 15, 15 + 6 = 21;

let product = num.reduce(function(acc, value) {
    let updatedProduct = acc * value;
    return updatedProduct;
}, 1);
console.log('product using reduce -> ', product);