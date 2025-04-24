function fn() {
    return 4+5;
}
var add = fn(3, 7);
console.log(add);

function checkAge(data) {
    if(data === { age: 18 }) {
        console.log('You are an adult');
    } else if(data == { age: 18 }) {
        console.log('You are still and adult');
    } else {
        console.log('Hmm.. You dont have an age I guess');
    }
}
checkAge({age: 18});