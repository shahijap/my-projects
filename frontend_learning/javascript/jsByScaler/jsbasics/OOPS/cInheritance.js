// inheritance is getting properties from parent class and inherit to child class
// we can inherit methods from one class to another class
class Person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }
    welcome() {
        console.log(`Welcome ${this.name}`)
    }
}

//Teacher class has common properties that are same as base class
//so using extends keyword saying that this Teacher class extends all properties of person class
//and Teacher property
//to pass parent class properties we use super keyword
//super keyword is used to pass the properties that are inherit from parent class
class Teacher extends Person {
    constructor(_name, _age, _classStrength) {
        super(_name, _age)
        this.classStrength = _classStrength
    }
    test() {
        super.welcome()
    }
}

class Student extends Person {
    constructor(_name, _age, _cgpa) {
        super(_name, _age)
        this.cgpa = _cgpa
    }
}

let Person1 = new Person('shahi', 23);
let Teacher1 = new Teacher('Mark', 34, 75);
let Student1 = new Student('Steve', 23, '75%');

console.log(Person1);
console.log(Teacher1);
console.log(Student1);
Teacher1.test();