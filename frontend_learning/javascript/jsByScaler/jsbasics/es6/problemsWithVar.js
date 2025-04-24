//The two major issues with var
var a = 21;
var a = 35; // 1. redeclaration and reassigned to same variable.
console.log({a});

if(a === 35) {
    var b = 40;
    console.log({b});
}
// 2. variables declared with var keyword are not blocked scope they are function scoped

console.log({b}); // b should not be allowed to access outside of the block.

function test() {
    var c = 100;
    console.log({c});
}

console.log({c}); // ReferenceError: c is not defined.

