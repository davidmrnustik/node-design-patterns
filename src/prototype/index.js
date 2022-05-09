const scout_prototype = require('./scout_prototype');

const david = scout_prototype.clone();
david.name = 'David Mrnustik';
david.addItemToList('slingshot');

const sara = scout_prototype.clone();
sara.name = "Sara Gracia";
sara.addItemToList('reading light');

console.log(`${david.name}: ${david.shoppingList}`);
console.log(`${sara.name}: ${sara.shoppingList}`);