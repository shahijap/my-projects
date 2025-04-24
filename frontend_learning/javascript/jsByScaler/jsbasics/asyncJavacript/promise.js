// how to produce a promise

let myPromise = new Promise(function(resolve, reject) {
    const a = 4;
    const b = 5;
    setTimeout(() => {
        if(a === b) {
            resolve('The values are equal')
        } else {
            reject('The values are not equal')
        }

    }, 2000)
})

// here the promise is in pending state we have method to get the promise states by passing to respective methods
// pending state

console.log(myPromise);   // Promise { <pending> }

// fulfilled promise -> using then method
// consuming promise

myPromise.then(function(resolved) {
    console.log(resolved)
})

// rejected promise -> using catch method

myPromise.catch(function(rejected) {
    console.log(rejected);
})

// promise will get settled