// The three methods that are important to know in oops (call, apply, bind)
let person1 = {
    firstName: 'steve',
    lastName: 'Rogers',
    age: 28,
    printDetails: function() {
        console.log(`Hi Iam ${this.firstName} ${this.lastName} and my age is ${this.age} years`);
    }
}
let person2 = {
    firstName: 'shahi',
    lastName: 'Patnam',
    age: 23,
    printDetails: function() {
        console.log(`Hi Iam ${this.firstName} ${this.lastName} and my age is ${this.age} years`);
    }
}
// here the print details method is repeating and prototype is only used for constructors and classes.
// now solve this using call method
console.log(person1);
console.log(person2);

let person3 = {
    firstName: 'mariyam',
    lastName: 'Patnam',
    age: 23,
}

// call method

person2.printDetails.call(person3);

// we can make method as global and call that method for different objects

let welcomeMsg = function(descr, response) {
    console.log(`Welcome ${this.lastName}! ${descr} 
    ${response}`);
}
welcomeMsg.call(person2,'take your seat', 'thankyou');

// apply method
// difference between apply and call method is u need to pass arguments in an array

welcomeMsg.apply(person2, ['grab your seat', 'thankyou']);

// bind method

// bind method is used to store a function and invoke it in particular time

let myFunc = welcomeMsg.bind(person2, 'grab your seat', 'thankyou');
console.log(myFunc);
myFunc();
