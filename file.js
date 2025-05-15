// Partie 2 
var age = 25;
function addition(a, b) {
    return a + b;
}
var result = addition(5, 10);
console.log("The result of the addition is: ".concat(result));
// Partie 3
function dommages(personnageDommages, montant) {
    personnageDommages.vie -= montant;
    return personnageDommages.vie;
}
var resultdommages = dommages({ vie: 100 }, 20);
console.log("Le r\u00E9sultat des dommages est : ".concat(resultdommages));
// Exercice de la Partie 3 :
function sayHello(target) {
    return "Hello ".concat(target.firstname, ", you have ").concat(target.money, " on your bank account.");
}
var message = sayHello({ firstname: 'World', money: 123 });
// ====================
// lignes à ne pas modifier
// ====================
var babyDragon = {
    name: 'Typeon',
    life: 50,
    attack: 10,
    defense: 20,
};
var babyLicorn = {
    name: 'Typemoor',
    life: 80,
    attack: 5,
    defense: 30,
    magic: 50,
};
var smallArmor = {
    price: 30,
    attack: 2,
    defense: 5,
};
var smallSword = {
    price: 20,
    attack: 5,
};
var smallShield = {
    price: 15,
    defense: 10,
};
var smallMagicalWand = {
    price: 50,
    attack: 4,
    magic: 10,
};
var myWarriorHero = {
    name: 'TSolomon',
    life: 200,
    attack: 30,
    defense: 50,
    pets: [babyDragon, babyLicorn],
    equipments: [
        smallArmor,
        smallSword,
        smallShield,
    ],
};
var myMagicienHero = {
    name: 'TSoren',
    life: 150,
    attack: 20,
    defense: 40,
    equipments: [smallMagicalWand],
    magic: 200,
};
