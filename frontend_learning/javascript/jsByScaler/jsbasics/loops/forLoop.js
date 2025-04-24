// loops are the statements that we can use to control the flow of programs and to do some repetition

var a = 'hello world';

//the for loop
for(var i = 0; i <= 10; i++) {
    console.log(a);
}

//you have an array and you have to square each element of that array

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var squaredArr = [];

for(var i = 0; i < num.length; i++){
    squaredArr.push(num[i] * num[i]);
}
console.log({squaredArr});



