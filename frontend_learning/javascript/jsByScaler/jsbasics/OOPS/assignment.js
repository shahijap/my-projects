function person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}
const member = new person('shahi', 'patnam');
person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
// console.log(member.getFullName());
const lydia = new person('Lydia', 'Hallie');
const sarah = person('sarah', 'smith');

console.log(lydia);
console.log(sarah);

const bird = {
    size: 'small'
};
const mouse = {
    name: 'Mickey',
    small: true,
}
console.log(mouse[bird["size"]]);

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
}
console.log(shape.diameter());
console.log(shape.perimeter());