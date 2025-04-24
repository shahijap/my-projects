// spread operator {...}

let firstPerson = {
    name: 'Adam',
    age: 23,
    address: {
        city: 'lucknow',
        state: 'UP'
    }
}

let secondPerson = { ...firstPerson };  // shallow copy the issue is when we have nested objects it become tidious to use more spread operators

secondPerson.name = 'steve';
secondPerson.address.city = 'Delhi' // it changed for both

console.log(firstPerson);
console.log(secondPerson);