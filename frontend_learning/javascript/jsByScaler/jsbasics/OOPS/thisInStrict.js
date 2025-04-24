// In strict mode
'use strict'
// refers {} empty object
console.log(this); 

function displayThis() {
    console.log(this); // undefined
}
displayThis();

let myObj = {
    name: 'shahija',
    age: 23,
    myFn: function() {
        console.log(this); // { name: 'shahija', age: 23, myFn: [Function: myFn] } --> refers object itself
    }
}
myObj.myFn();

let myObj2 = {
    name: 'shahija',
    age: 23,
    myFunc: function() {
        function myFunc1() {
            console.log(this); // undefined
        }
        myFunc1()
    }
}
myObj2.myFunc();