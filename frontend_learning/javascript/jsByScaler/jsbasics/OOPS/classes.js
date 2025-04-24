// classes are created using constructors
class person {
    constructor(_name, _age) {
        this.name = _name,
        this.age = _age
    }
    // we create methods with in class like outside the constructor no need to use this keyword and function
    welcome() {
        console.log(`Welcome ${this.name}`);
    }
}

let person1 = new person('shahi', 23);
let person2 = new person('stella', 25);
let person3 = new person('stewart', 28);

console.log(person1);
console.log(person2);
console.log(person3);
person1.welcome();


