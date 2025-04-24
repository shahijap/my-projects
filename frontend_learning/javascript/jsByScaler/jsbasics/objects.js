// in js objects are key-value pairs

var person = {
    firstName: 'shahija',
    lastName: 'patnam',
    age: 50,
    ownsCar: false
};

var cap = {
    firstName: 'steve',
    lastName: 'Rogers',
    age: 102,
    friends: ['Bucky Bermes', 'Bruce Banner', 'Tony Stark'],
    isAvenger: true,
    address: {
        state: 'New York',
        city: {
            name: 'Brooklyn',
            pincode: 123456
        }
    }

}

console.log(person);

// dot notation

var age = person.age;

console.log('access value of age is:', age);

//bracket notation

var lastName = person['lastName'];

console.log('access value of lastName is:', lastName);

console.log(cap.friends[1]);

console.log(cap.address.city.name);
cap.isAvenger = false;
console.log(cap);

cap.movies = ['age of altron', 'civil war', 'first avenger'];

console.log(cap);

//delete property by using delete keyword.

delete cap.age;
console.log(cap);