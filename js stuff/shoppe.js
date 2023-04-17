//adding the list of shop items as a js dict
function shoppeItem(name, type, price, level, rating, releaseDate, description='', image=''){
  let obj = {}
  obj.name = name;
  obj.type = type;
  obj.price = price;
  obj.level = level;
  obj.rating = rating;
  obj.releaseDate = releaseDate;
  obj.description = description;
  obj.image = image;
  return obj;
}

//books
let ComedyGold = shoppeItem('Comedy Gold', 'book', '$419.99', 'Novice', '5', '1999', 'Lorem Ipsum');
let EnchantedBook = shoppeItem('Enchanted Book', 'book', '$31.99', 'Intermediate', '3', '1999', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/books/comedy_gold.jpg');
let Forbidden = shoppeItem('[REDACTED]', 'book', '$899.99', 'Expert', '0', '69', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/books/enchanted_book.jpg');
let diy = shoppeItem('Do-It-Yourself', 'book', '$229.99', 'Intermediate', '5', '2003', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/books/hvac_wizzard.jpg');
let loveStory = shoppeItem('Love Story', 'book', '$14.99', 'Advanced', '1', '2018', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/books/love_book.jpg');
let freeBook = shoppeItem('Free Book', 'book', '$1299.99', 'Expert', '5', '2999', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/books/most_expensive_book_we_have.jpg');
let vvizard_of_oz = shoppeItem('VVizard of Oz', 'book', '$9.99', 'Novice', '2', '1933', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/books/oz.jpg');
let spellBook = shoppeItem('Spell Book', 'book', '$29.99', 'Novice', '5', '1999', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/books/spell_book.jpg');

//minions
let realOwl = shoppeItem('Real "Owl"', 'minion', '$9.99', 'novice', '3', '2023', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/minions/def_a_real_owl.jpg');
let goodBoi = shoppeItem('Good Boi', 'minion', '$99.99', 'Intermediate', '4', '2022', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/minions/good_boi.jpg');
let bestBoi = shoppeItem('The Bestest Boi', 'minion', '$867530.99', 'Expert', '6', '2023', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/minions/teddy.jpg');
let doug = shoppeItem('Doug', 'minion', 'Priceless', 'Expert', '6', '2023', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/minions/doug.jpg');
let homer = shoppeItem('Homer', 'minion', '$44.99', 'Advanced', '3', '2001', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/minions/homer.jpg');
let minionMinion = shoppeItem('Minion', 'minion', '$9.99', 'Novice', '3', '2023', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/minions/minion-minion.jpg');
let perry = shoppeItem('Perry the Platypus', 'minion', '$9.99', 'Novice', '3', '2023', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/minions/perry_da_p.jpg');
let radCondor = shoppeItem('Radical Condor', 'minion', '$9.99', 'Novice', '3', '2023', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/minions/radical_condor.jpg');

//vestments
let sheet = shoppeItem('Bed Sheet', 'vestments', '$9.99', 'Novice', '3', '680', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/robes/bed_sheet_ghost_wizard_robe.jpg');
let blueSatin = shoppeItem('Blue Satin', 'vestments', '$39.99', 'Intermediate', '4', '920', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/robes/blue_satin_robe.jpg');
let dark = shoppeItem('Shadow Shroud', 'vestments', '$99.99', 'Advanced', '5', '714', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/robes/dark_wizard_robe.jps');
let sideEffects = shoppeItem('Vestment of Side Effects', 'vestments', '$119.99', 'Intermediate', '3', '1987', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/robes/wizard_robe_that_makes_you_bald_and_maybe_a_monk.jpg');
let gold = shoppeItem('Golden Vestment Staff Combo', 'vestments', '$1199.99', 'Expert', '4', '001', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/robes/wealthy_wizard_robe.jpg');

//wondez
let fairy = shoppeItem('Fairy Wonde', 'wonde', '$9.99', 'Novice', '2', '1986', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/wondez/fairy_wonde.jpg');
let generic = shoppeItem('Generic Wonde', 'wonde', '$29.99', 'Intermediate', '3', '1988', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/wondez/generic_wonde.jpg');
let stick = shoppeItem('Stick from a tree', 'wonde', '34.99', 'Intermediate', '4', '0', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/wondez/normal_wooden_stick.jpg');
let johnHalo = shoppeItem('John Halo from Fortnite Signiture Series Wonde', 'wonde', '$1199.99', 'Expert', '5', '2003', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/wondez/john_halo_from_fortnite.jpg');
let terminator = shoppeItem('The Terminator', 'wonde', '$99.99', 'Advanced', '5', '2011', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/wondez/The_Terminator.jpg');
let stick2 = shoppeItem('Yet Another Stick', 'wonde', '$119.99', 'Novice', '4', '2014', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/wondez/tree_stuff.jpg');
let wrongFranchise = shoppeItem('Wrong Franchise', 'wonde', '2499.99', 'Expert', '5', '2983', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/wondez/wrong_franchise');
let glock = shoppeItem('Glock', 'wonde', '$449.99', 'Intermediate', '4', '1776', 'Lorem Ipsum something or whatever, this is made to be filler text to test the description box', '../images/wondez/glock');


//item dict
const shoppeItems = {
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
