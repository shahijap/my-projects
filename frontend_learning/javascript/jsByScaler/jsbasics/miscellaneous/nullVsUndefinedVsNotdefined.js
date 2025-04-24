// undefined

let a;
console.log(a); // if value is not assigned by default it is undefined

let arr = [1, 2, 3, , 4];
console.log(arr[3]); // for empty element we get undefined

function add(x, y) {
    let c = x + y;
    return c
}

let sum = add(2, 3);
console.log(sum);

function sub(x, y) {
    let c = x - y; // whenever there is no return value then also it is undefined
}
let subtract = sub(3, 2)
console.log(subtract);

// null --> the variable has no value

let myLife = null;

console.log(myLife);

// not defined --> accessing varaible without declaring it gives undefined

console.log(myVar);  // ReferenceError: myVar is not defined



