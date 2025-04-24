let arr = [
    {name: 'A', age: 14, gender: 'M'},
    {name: 'B', age: 24, gender: 'F'},
    {name: 'C', age: 34, gender: 'M'},
    {name: 'D', age: 44, gender: 'F'},
    {name: 'E', age: 54, gender: 'M'},
    {name: 'F', age: 24, gender: 'F'},
    {name: 'G', age: 74, gender: 'M'},
    {name: 'H', age: 24, gender: 'F'},
    {name: 'I', age: 84, gender: 'M'}

]

// Age of all the men(males)

let males = arr.filter(function(obj){
    return obj.gender === 'M'
})

let ageOfMales = males.map(function(male) {
    return male.age
})

console.log(males);
console.log(ageOfMales);

let malesAges = arr.filter(obj => obj.gender === 'M').map(maleObj => maleObj.age);
console.log('using chaining -> ', malesAges);

// from the transactions array filter out postive elements and calculate total amount
// use filter and reduce to achieve this

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let depositedTransactions = transactions.filter(amount => amount > 0).reduce((acc, value) => { return acc + value }, 0);

console.log(depositedTransactions);