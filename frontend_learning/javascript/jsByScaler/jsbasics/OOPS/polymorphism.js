// same named method calling differently gives different output
class Animal {
    sound() {
        console.log('Animals make different sounds');
    }
}

class Dog {
    sound() {
        console.log('Dog Barks');
    }
}

class Cat {
    sound() {
        console.log('Cat Meows');
    }
}

let Animal1 = new Animal();
let Tommy = new Dog();
let Percy = new Cat();

Animal1.sound();
Tommy.sound();
Percy.sound();