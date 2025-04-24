// promise with async await 
function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if(drink === 'coffee') {
            resolve('Order for coffee is received')
        } else {
            reject('Other orders are rejected')
        }
    })
}

function processOrder(order) {
    return new Promise(function(resolve) {
        console.log('order is being processed');
        resolve(`${order} and served`)
    })
}

// chaining of promise
let promiseWithOutAsyncAwait = placeOrder('coffee').then(function(resolvedpromise) {
    console.log(resolvedpromise);
    let orderIsProcessed = processOrder(resolvedpromise);
    return orderIsProcessed;
}).then(function(processedOrderResPromise) {
    console.log(processedOrderResPromise);
}).catch(function(rejectedPromsise) {
    console.log(rejectedPromsise);
})

console.log('promiseWithOutAsyncAwait', promiseWithOutAsyncAwait);

console.log('PROMISE WITH ASYNC AWAIT');

// Async await -> syntactic sugar of promises

async function serveOrder() {
    // let orderPlaced = placeOrder('coffee')  // it returns promise and it is not waiting --> Promise { 'Order for coffee is received' }
    let orderPlaced = await placeOrder('coffee');  // AWAIT is wait for a promise to get completed and return state
    console.log(orderPlaced);
    let processedOrder = await processOrder(orderPlaced);
    console.log(processedOrder);
}

serveOrder();

// catch the error with async await using try and catch method

module.exports = {
    placeOrder: placeOrder,
    processOrder: processOrder,
}





