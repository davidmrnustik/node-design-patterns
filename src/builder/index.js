const PersonBuilder = require('./PersonBuilder');

// Employees
const sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
// const sue = new Person('Sue', true, true, 60);

const bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build;
// const bill = new Person('Bill', true, false, 20);

const phil = new PersonBuilder('Phil').makeEmployee().build;
// const phil = new Person('Phil', true, true);

// Shoppers
const charles = new PersonBuilder('Charles')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();
// const charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);

const tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();
// const tabbitha = new Person('Tabbitha', false, false, 0, 1000);

console.log(charles.toString());
console.log(sue.toString());