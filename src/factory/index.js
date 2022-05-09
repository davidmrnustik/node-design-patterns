const userFactory = require('./userFactory');

const david = userFactory('David Mrnustik', 100);
const sara = userFactory('Sara Gracia', 100, 'employee', 'This and That');

sara.payDay(100);

console.log(david);
console.log(sara);