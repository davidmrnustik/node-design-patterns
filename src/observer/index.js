const Store = require('./Store');
const Shopper = require('./Shopper');
const Mall = require('./Mall');

const catsAndThings = new Store('Cats & Things');
const insAndOuts = new Store('Ins & Outs');

const david = new Shopper("David");
const sara = new Shopper("Sara");
const alex = new Shopper("Alex");
const mike = new Shopper("Mike");

const valleyMall = new Mall();

catsAndThings.subscribe(david);
catsAndThings.subscribe(sara);
catsAndThings.subscribe(alex);
catsAndThings.subscribe(valleyMall);

insAndOuts.subscribe(mike);
insAndOuts.subscribe(valleyMall);

catsAndThings.sale(20);
insAndOuts.sale(50);

console.log(valleyMall.sales);