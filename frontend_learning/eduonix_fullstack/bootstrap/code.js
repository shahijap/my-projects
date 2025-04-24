function myFunction() {
    alert('Hello!')
}
function myFunc() {
    //the below command rewrited the whole document with hello
    document.write('Hello');
}
function variableFunc() {
    var number1 = 1;
    let number2 = 2;
    alert(number1 + number2);
}

// conditional statements
function conditionalFunc() {
    let priceItem = 300;
    let userPayment = 250;
    if (priceItem == userPayment) {
        alert('Payment Successful!')
    } else {
        alert('Payment Failed!')
    }
}

function arrFunc() {
    const products = ['computer', 'laptop', 'phone'];
    console.log(products[0]); //to access array elements it gives computer
    products[0] = "Desktop Computer" // to modify array elements
    products.push('keyboard') // to add elements at the end of an array
    products.length; // this gives length of array
    products[products.length - 1] // this give last element of an array
    products.pop() // this remove elements from end of an array
    products.unshift('mouse') // this add elements at start of an array
    products.shift() // this remove elements from start of an array
    console.log(products);
}

function stringFunc() {
    let welcome = 'Hello'; // ['H', 'e', 'l', 'l', 'o'] the string is nothing but list of characters
    console.log(welcome[0]) // this gives H as output
    welcome.length // gives length of the string
}
// loop -> repeat instructions specified number of times

(function loopFunc() {
    const productsArr = ['computer', 'laptop', 'mouse', 'keyboard'];

    // this for loop iterate through each element in array and prints that elements
    for (let i=0; i < productsArr.length; i++) {
        console.log(productsArr[i]);
    }

    // this loop iterate through each index of element in an array
    for(let product in productsArr) {
        // console.log(product); -> this gives index 
        console.log(productsArr[product]);
    }

    // this loop iterate through each value of element in an array

    for (let product of productsArr) {
        console.log(product);
    }
})()

let j = 0;
const products = ['computer', 'laptop', 'phone'];
while(j < products.length) {
    console.log(j);
    j++;
    break;
}

