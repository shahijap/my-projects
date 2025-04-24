// function defined inside a function is always have access to its outside function which is called as lexical scope.
function test() {
    let a = 2;
    function test1() {
        console.log(a);
    }
    return test1
}

let func = test();
console.log(test);
func();

function greet() {
    let name = 'shahija';
    function displayName() {
        console.log(`Hi ${name}`)
        let age = 23;
        function displayAge() {
            console.log(`My name is ${name} and iam ${age} years old.`);
        }
        return displayAge
    }
    return displayName
}
let g1 = greet();

g1()  // returns displayName

let g2 = g1();

g2() // returns displayAge