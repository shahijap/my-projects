// we resolved promise chaining using async await 
// catching err using try catch method
const coffeeShop = require('./coffeeShop1')
let promiseWithAsyncAwait = async function serveOrder() {
    try {
        let orderPlaced = await coffeeShop.placeOrder('tea');
        console.log(orderPlaced);
        let processedOrder = await coffeeShop.processOrder(orderPlaced);
        console.log(processedOrder);
    } catch(err) {
        console.log(err);
    }

}

promiseWithAsyncAwait();