let car1 = {
    name: 'A1',
    company: 'A1com',
    color: 'green'
}
let car2 = {
    name: 'A2',
    company: 'A2com',
    color: 'orange'
}
let car3 = {
    name: 'A3',
    company: 'A3com',
    color: 'purple'
}
// Constructors are useful when creating multiple objects wuth same keys.
// Constructor is like a template which is used to create multiple objects

function createCar(_name, _company, _color) {
    this.name = _name,    // here this creates an  {} object.
    this.company = _company,
    this.color = _color
    this.drive = function() {   // we can create method in a constructor
        console.log(`Iam driving ${this.name} car and it is of ${this.color} color`);
    }
}

let carCons1 = new createCar('BMW', 'xyz', 'green'); // new keyword creates a constructor
let carCons2 = new createCar('Hyundai', 'kxyz', 'blue');
console.log(carCons1);
console.log(carCons2);
carCons1.drive();
carCons2.drive();
