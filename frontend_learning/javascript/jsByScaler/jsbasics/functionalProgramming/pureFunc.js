// impure function --> for the same input we are getting different output
var a = 4;

function addImpure(x) {
    console.log(x + a);
    a++;
}
addImpure(2)
addImpure(2)
addImpure(2)

// pure function

function addPure(x, a) {
    // console.log(x + a);  // using console(side effect)external resource that not part of the function --> state
    return x + a;
}
console.log(addPure(4, 5));

addPure(2, 3);
addPure(2, 3);
addPure(2, 3);

