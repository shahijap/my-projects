const getData = async() => {
    const data = 'Hello World with using async';
    return data;
}
getData().then(data => console.log(data));

const getData1 = async() => {
    const data1 = await 'Hello World with using await'
    console.log(data1);
}
console.log(1);
getData1();
console.log(2);

const AskPermission = async() => {
    const student = 'Hello mam can i come in';
    return student;
}

const grantPermission = async() => {
    const teacher = await AskPermission();
    return `${teacher}: Yes! You can come`
}
grantPermission().then(data => console.log(data));

function asyncFunctionOperation() {
    let firstPromise = new Promise((resolve, reject) => resolve('Hello'));
    let secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async Await using promises');
        }, 1000)
    });
    let combinedPromise = Promise.all([firstPromise, secondPromise]);
    return combinedPromise;
}
async function display() {
    let data = await asyncFunctionOperation();
    return data;
}
display().then(data => console.log(data));
