// The for-of statement creates a loop iterating over iterable objects,
// including built in string. Array, array-like objects like NodeList and also map and set


var scores = [60, 90, 80, 75];

for(var score of scores){
    //here score is each element
    console.log(score);
}

// method - entries() --> This method carries index and values

let colors = ['red', 'white', 'green'];
for(var [index, color] of colors.entries()){
        console.log(index +' -> '+ color);
}

//strings

var str = 'Shahija Patnam';

for(var c of str){
    console.log(c);
}