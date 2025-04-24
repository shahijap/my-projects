var a = 20;

// Solution of the redeclaration problem.

let b = 40;

// let b = 50;   SyntaxError: Identifier 'b' has already been declared

b = 49;

console.log({a});

// variables with let can be reassigned.

console.log({b});

// Variables declared with let keyword are block scoped.

if(true) {
    let c = 100;
    console.log({c}); // 40
}

// console.log({c}); // ReferenceError: c is not defined

// with let not able to redeclare, access outside of block, but able to reassign.

// const

// with const not able to redeclare, access outside of block, reassign.


const d = 100;

d = 120; // TypeError: Assignment to constant variable.

console.log({d});


