// A while loop evaluates the condition inside the parenthesis().
// If the condition evaluates to true, the code inside the while loop is executed.
// The condition is evaluated again.
// This process continues until the condition is false.
// When the condition evaluates to false, the loop stops.

//syntax

//we have to print 1 to 10 using while

var i = 1;
var n = 10;
while(i <= 10){
    console.log({i}); // 1 2 3 4 5 6 7 8 9 10
    i++
}

// Do while loop - code runs atleast once, first it prints later checks for condition.
var i = 5;
var n = 20;

do{
    console.log(i);
    i++
}while(i <= n)
