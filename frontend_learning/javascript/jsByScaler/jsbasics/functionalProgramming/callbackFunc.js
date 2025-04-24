const printFirstName = (firstName, cb) => {
    console.log(firstName);
    cb('patnam')
};

const printLastName = (lastName) => console.log(lastName);

printFirstName(('shahija'), printLastName); //callback 

let isEven = (n) => n % 2 === 0;

let printResult = (evenFn, num) => {
    let isNumEven = evenFn(num);
    console.log(`The number ${num} is an even number ${isNumEven}`);
}
printResult(isEven, 16);
printResult(isEven, 7);





