
// encapsulation means hiding data
// dont allow access particular data, method outside of that class
// keep data, functions inside class hiding outside is encapsulation
// encapsulate methods, properties inside of a class and do not allow them to access outside of it.
class Person {
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }
}
let Person1 = new Person('Adam', 24);
console.log(Person1);
// Outside of the class we can access the property and modify it this is the issue
Person1.name = 'Steve';
console.log(Person1);

class Car {
    constructor(_company, _color) {
        this.company = _company
        let color = _color
        this.getColor = function() {
            return color
        }
    }        
}
let Car1 = new Car('xyz', 'green');
console.log(Car1);
Car1.color = 'blue';   // to Avoid this issue we write a method
console.log(Car1.getColor());