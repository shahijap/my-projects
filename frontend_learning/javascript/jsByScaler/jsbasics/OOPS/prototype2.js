function Person (_name, _age) {
    this.name = _name
    this.age = _age
    this.getNameAndAge = function() {
        console.log(`Iam ${this.name} and my age is ${this.age}`);
    }
}

let PersonWithoutProto1 = new Person('Adam', 25);
let PersonWithoutProto2 = new Person('Steve', 30);

// here the method is getting repeated for two objects even name and age are different this is violation.

console.log('PersonWithoutProto1', PersonWithoutProto1);  // Person {name: 'Adam', age: 25, getNameAndAge: ƒ}
console.log('PersonWithoutProto2', PersonWithoutProto2);  // Person {name: 'Steve', age: 30, getNameAndAge: ƒ}

// here prototype concept comes that put this method/function into person prototype(custom prototype) and it link to personproto1, personproto2 objects.

function PersonProto (_name, _age) {
    this.name = _name
    this.age = _age
}
PersonProto.prototype.getNameAndAge = function() {
    console.log(`Iam ${this.name} and my age is ${this.age}`);
}

let PersonWithProto1 = new PersonProto('stella', 30);
let PersonWithProto2 = new PersonProto('william', 30);

console.log('PersonWithProto1', PersonWithProto1);
console.log('PersonWithProto2', PersonWithProto2);

PersonWithProto1.getNameAndAge();
PersonWithProto2.getNameAndAge();

