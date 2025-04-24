// Arrays provides you an ordered collection of data
var arr = [];  // array initialization

arr = [12, 'Ferrari', true, 12.4];

console.log(arr);

// accessing the elements

var strArr = arr[1];

console.log(strArr);

//Replacing elements of an array by using index.

arr[1] = 'Hyundai';

console.log(arr);

//getting length of an array

console.log('The length of the array is:' , arr.length);

// inbuilt js array methods
var arr1 = [12, 14, 15, 57, 60];

// pop method --> removes last element from array

var popEle = arr1.pop();

console.log(popEle);

console.log('popped array', arr1);

//push method --> add element at the end of array

arr1.push(100);

console.log('pushed array' ,arr1);

//shift method --> removes first element from the array

var shiftEle = arr1.shift();

console.log(shiftEle);
console.log('shifted array', arr1);

//unshift method --> add element at start of an array

var unshiftEle = arr1.unshift(200);

console.log(unshiftEle);
console.log('unshifted array', arr1);