// this in browser

console.log(this);  // refers window object

function displayThis() {
    console.log(this); // refers window object
}
displayThis();

let myObj = {
    name: 'shahija',
    age: 23,
    myFn: function() {
        console.log(this); // refers object itself
    }
}

myObj.myFn(); 

let myObj2 = {
    name: 'shahija',
    age: 23,
    myFunc: function() {
        function myFunc1() {
            console.log(this); // refers window object
        }
        myFunc1()
    }
}
myObj2.myFunc();