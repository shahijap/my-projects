// setTimeOut(cb, 2ms)
console.log('Before');

function greet() {
    console.log('Hello from SetTimeOut');
}

setTimeout(greet, 5000);  // settimeout is async method

console.log('after');