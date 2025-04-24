// Hoisting allows you to move all declarations to top.

console.log('logging a before declaration:', a);
greet();
add(10, 20);  //TypeError: add is not a function. you cannot call function expression before defining.

var a = 'hi';

function greet() {
    console.log('Hello from shahija');
}
console.log('logging a after declaration:', a);
greet();

var add = function(a, b) {
    console.log(a+b);
}
add(2,3);