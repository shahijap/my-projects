// In Javascript, the for-in loop allows you to loop through the properties of an object.
// The statements of code found within the loop body will be executed once for each property of the object.

var colors = {
    primary: 'blue',
    secondary: 'red',
    teritary: 'white',
}

// syntax
for(var color in colors){
    console.log(color + ' -> ' +colors[color]);
}

//arrays are also treated as objects in javascript

var colorsArr = ['yellow', 'green', 'orange', 'pink'];

for(var colorArr in colorsArr){
    console.log(colorArr + ' -> ' +colorsArr[colorArr]);
}