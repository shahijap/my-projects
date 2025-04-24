let test1 = function() {
    console.log(1);
}
let test2 = function(a) {
    console.log(a + 2);
}
let test3 = function(a, b) {
    console.log(a + b);
}
test1();
test2(2);
test3(3, 4);

// Arrow functions

// remove function keyword before paranthesis

let test4 = () => {
    console.log(1);
}

// if there is only one paramter u can remove paranthesis
// if the function returning single line code u can remove curly braces as well.

let test5 = a => console.log(a + 2);

let test6 = (a, b)  => {
    console.log(a + b);
}

console.log('Arrow functions:');

test4();
test5(4);
test6(12, 45);

