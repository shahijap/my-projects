// currying is an application of closure
// currying is basically dividing function params into small chunks of functions that allows to pass all params
let sum = function(x,y) {
    console.log(x+y);
} 
// sum(); // returns NaN bcz there is no arguments passed
sum(2, 3)

let sumCurried = function(x) {
    return function(y) {
        console.log(x+y);
    }
}

let sumTwoVariables = sumCurried(2);  // return x

sumTwoVariables(6); // return y