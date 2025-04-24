'use strict'
// this in browser

console.log('Browser In Strict mode');

console.log(this);  // refers window object

function displayThis1() {
    console.log(this); // undefined
}
displayThis1();

let myObj1 = {
    name: 'shahija',
    age: 23,
    myFn: function() {
        console.log(this); // refers object itself
    }
}

myObj1.myFn(); 

let myObj12 = {
    name: 'shahija',
    age: 23,
    myFunc: function() {
        function myFunc1() {
            console.log(this); // undefined
        }
        myFunc1()
    }
}
myObj12.myFunc();