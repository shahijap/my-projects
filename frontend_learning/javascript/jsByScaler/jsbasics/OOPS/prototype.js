// whenever object is created along with that prototype object is linked from which we can access all prototype
// properties functions and methods.
// we check in browser by link this to html file

let myProtoObj = {};
console.log('myProtoObj', myProtoObj);

let myProtoPersonObj = {
    name: 'Adam',
    age: 25
}
console.log('myProtoPersonObj', myProtoPersonObj);
console.log(myProtoPersonObj.hasOwnProperty('name')); //it check for the property same as key in that object -> true
console.log(myProtoPersonObj.hasOwnProperty('gender')); // false

// constructor fn

// when using class to create object it have its own prototype that created using constructor method

function Person(_name, _age){
    this.name = _name
    this.age = _age
}
let Person1 = new Person('SteveJobs', 34);
console.log(Person1);