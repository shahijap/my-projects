// setInterval set some interval of time after that time code execute again

function hello() {
    console.log('Hello');
}

let timer = setInterval(hello, 1000); // here it goes to infinte loop we can clear interval at certain time

setTimeout(function() {
    clearInterval(timer)
}, 3000)