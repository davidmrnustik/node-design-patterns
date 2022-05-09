const Shopper = require('./Shopper')
const {
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem,
} = require('./InventoryItem')

const david = new Shopper("David", 4000);

const walkman = new InventoryItem("Walkman", 29.99);
const neclace = new InventoryItem("Neclace", 9.99);

const gold_neclace = new GoldenInventoryItem(neclace);
const diamond_gold_neclace = new DiamondInventoryItem(gold_neclace);

const diamond_walkman = new DiamondInventoryItem(walkman);

david.purchase(diamond_gold_neclace);
david.purchase(diamond_walkman);

david.printStatus();

diamond_walkman.print();