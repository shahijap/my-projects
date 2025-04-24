// this in non strict mode

// refers {} empty object

console.log(this); 

function displayThis() {
    console.log(this);
}

// this in a function refers global object

displayThis(); 

let myObj = {
    name: 'shahija',
    age: 23,
    myFn: function() {
        console.log(this);
    }
}

// { name: 'shahija', age: 23, myFn: [Function: myFn] } 
// --> this with in method() of object refers that particular object.
// obj -> fn: refers object itself

myObj.myFn();  

let myObj2 = {
    name: 'shahija',
    age: 23,
    myFunc: function() {
        function myFunc1() {
            console.log(this);
        }
        myFunc1()
    }
}

// this in function inside the method in an object refers global object. (obj -> fn -> fn: global object)

myObj2.myFunc(); 
