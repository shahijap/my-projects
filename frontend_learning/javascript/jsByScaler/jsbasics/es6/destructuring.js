// The destructuring assignment syntax is a javascript expression that makes it possible to unpack values
// from arrays, or properties from objects, into distinct variables.

// destructuring arrays
let arr = ['Hi', 'I', 'am', ,'Shahija'];

let a = arr[1];
let b = arr[2];
let c = arr[3];
let d = arr[4];

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let [ele1, ele2, ele3, ele4, ele5] = arr;

console.log({ele2});
console.log({ele3});
console.log({ele4});

// let arr = ['Hi', 'I',  ,'am', 'Shahija'];
// here if we access empty value with c the result would be undefined
// and if there is no value and still u access that element that would be undefined

console.log({ele5});

//destructuring objects

let myObj = {
    name: 'shahija',
    age: 23,
    gender: 'F',
    address: {
        city: 'hyderabad',
        state: 'Andhra',
        country: 'india',
    }
}

let { f, g, h } = myObj; // undefined

console.log({f});
console.log({g});
console.log({h});

let { name: i } = myObj;
console.log({i}); // any name can be given to keys of object


let { name, age, gender, address:{ country }} = myObj; // destructuring with object should be done with same key names as variables

console.log({name});
console.log({age});
console.log({gender});
// console.log({address}); // get address object
console.log({country}); // nested object destructuring




