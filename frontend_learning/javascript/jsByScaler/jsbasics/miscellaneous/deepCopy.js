//In shallow copy only one level of nesting mutable

let firstPerson = {
    name: 'Adam',
    age: 23,
    address: {
        city: 'lucknow',
        state: 'UP'
    }
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson)); // deep copy it creates a seperate reference.
firstPerson.address.city = 'Delhi';

console.log(firstPerson);
console.log(secondPerson);