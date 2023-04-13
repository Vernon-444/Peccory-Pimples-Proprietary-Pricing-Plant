//adding the list of shop items as a js dict
function shoppeItem(name, type, price, level, rating, releaseDate){
  this.name = name;
  this.type = type;
  this.price = price;
  this.level = level;
  this.rating = rating;
  this.releaseDate = releaseDate;
}

//books
let ComedyGold = shoppeItem('Comedy Gold', 'book', '$419.99', 'Novice', '5', '1999');
let EnchantedBook = shoppeItem('Enchanted Book', 'book', '$31.99', 'Intermediate', '3', '1999');
let Forbidden = shoppeItem('[REDACTED]', 'book', '$899.99', 'Expert', '0', '69');
let diy = shoppeItem('Do-It-Yourself', 'book', '$229.99', 'Intermediate', '5', '2003');
let loveStory = shoppeItem('Love Story', 'book', '$14.99', 'Advanced', '1', '2018');
let freeBook = shoppeItem('Free Book', 'book', '$1299.99', 'Expert', '5', '2999');
let vvizard_of_oz = shoppeItem('VVizard of Oz', 'book', '$9.99', 'Novice', '2', '1933');
let spellBook = shoppeItem('Spell Book', 'book', '$29.99', 'Novice', '5', '1999');

//minions
let realOwl = shoppeItem('Real "Owl"', 'minion', '$9.99', 'novice', '3', '2023');
let goodBoi = shoppeItem('Good Boi', 'minion', '$99.99', 'Intermediate', '4', '2022');
let bestBoi = shoppeItem('The Bestest Boi', 'minion', '$867530.99', 'Expert', '6', '2023');
let homer = shoppeItem('Homer', 'minion', '$44.99', 'Advanced', '3', '2001');
let minionMinion = shoppeItem('Minion', 'minion', '$9.99', 'Novice', '3', '2023');
let perry = shoppeItem('Real', 'minion', '$9.99', 'Novice', '3', '2023');
let radCondor = shoppeItem('Real', 'minion', '$9.99', 'Novice', '3', '2023');
let doug = shoppeItem('Doug', 'minion', 'Priceless', 'Expert', '6', '2023');

//vestments
let sheet = shoppeItem('Bed Sheet', 'vestments', '$9.99', 'Novice', '3', '680');
let blueSatin = shoppeItem('Blue Satin', 'vestments', '$39.99', 'Intermediate', '4', '920');
let dark = shoppeItem('Shadow Shroud', 'vestments', '$99.99', 'Advanced', '5', '714');
let sideEffects = shoppeItem('Vestment of Side Effects', 'vestments', '$119.99', 'Intermediate', '3', '1987');
let gold = shoppeItem('Golden Vestment Staff Combo', 'vestments', '$1199.99', 'Expert', '4', '001');

//wondez
let fairy = shoppeItem('Fairy Wonde', 'wonde', '$9.99', 'Novice', '2', '1986');
let generic = shoppeItem('Generic Wonde', 'wonde', '$29.99', 'Intermediate', '3', '1988');
let stick = shoppeItem('Stick from a tree', 'wonde', '34.99', 'Intermediate', '4', '0');
let johnHalo = shoppeItem('John Halo from Fortnite Signiture Series Wonde', 'wonde', '$1199.99', 'Expert', '5', '2003');
let terminator = shoppeItem('The Terminator', 'wonde', '$99.99', 'Advanced', '5', '2011');
let stick2 = shoppeItem('Yet Another Stick', 'wonde', '$119.99', 'Novice', '4', '2014');
let wrongFranchise = shoppeItem('Wrong Franchise', 'wonde', '2499.99', 'Expert', '5', '2983');
let glock = shoppeItem('Glock', 'wonde', '$449.99', 'Intermediate', '4', '1776');


//item dict
let shoppeItems = {
  book: [
    {ComedyGold}, 
    {EnchantedBook}, 
    {Forbidden}, 
    {diy}, 
    {loveStory}, 
    {freeBook}, 
    {vvizard_of_oz}, 
    {spellBook}
  ],

  minions: [
    {realOwl},
    {goodBoi},
    {bestBoi},
    {homer},
    {minionMinion},
    {perry},
    {radCondor},
    {doug}
  ],

  vestments: [
    {sheet},
    {blueSatin},
    {dark},
    {sideEffects},
    {gold},
  ],

  wondez: [
    {fairy},
    {generic},
    {stick},
    {stick2},
    {johnHalo},
    {terminator},
    {wrongFranchise},
    {glock},
  ]
}

console.log(shoppeItems);

//module.exports = shoppeItems;
