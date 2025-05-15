// Partie 2 
const age: number = 25;

function addition(a: number, b: number): number {
  return a + b;
}
const result: number = addition(5, 10);
console.log(`The result of the addition is: ${result}`);

// Partie 3

function dommages(personnageDommages: {vie: number}, montant: number): number {
    personnageDommages.vie -= montant;
    return personnageDommages.vie;
}

const resultdommages = dommages({vie: 100}, 20);
console.log(`Le résultat des dommages est : ${resultdommages}`);

// Exercice de la Partie 3 :

function sayHello(target: { firstname: string, money: number }): string {
    return `Hello ${target.firstname}, you have ${target.money} on your bank account.`;
}
const message: string = sayHello({ firstname: 'World', money: 123 });

// Partie 4

type Personnage = {
    nom: string;
    vie: number;
    attaque: number;
    defense: number;
}

type Animal = Personnage;
type Héro = Personnage & {
    animal?: Animal
}

// Exercice de la Partie 4 :

type Character = {
    name: string;
    life: number;
    attack: number;
    defense: number;
 };
 
 type Pet = Character;
 
 type Hero = Character & {
    pets?: Pet[];
    equipments?: Equipment[];
 };

 //On définit un animal qui a de la magie
 type MagicalPet = Pet & {
    magic: number;
 };

 //On définit un équiment avec son prix, son attaque et sa défense. La défense et l'attaque ne sont pas obligatoires
 type Equipment = {
    price: number;
    attack?: number;
    defense?: number;
 };

 type WithMagic = {
    magic: number;
 }

    type Magician = Character & {
        equipments: Equipment[];
        magic: number;
    };
 
 // ====================
 // lignes à ne pas modifier
 // ====================
 
 const babyDragon: Pet = {
    name: 'Typeon',
    life: 50,
    attack: 10,
    defense: 20,
 };
 
 const babyLicorn: MagicalPet = {
    name: 'Typemoor',
    life: 80,
    attack: 5,
    defense: 30,
    magic: 50,
 };
 
 const smallArmor: Equipment = {
    price: 30,
    attack: 2,
    defense: 5,
 };
 
 const smallSword: Equipment = {
    price: 20,
    attack: 5,
 };
 
 const smallShield: Equipment = {
    price: 15,
    defense: 10,
 };
 
 const smallMagicalWand: Equipment & WithMagic = {
    price: 50,
    attack: 4,
    magic: 10,
 };
 
 const myWarriorHero: Hero = {
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
 
 const myMagicienHero: Magician = {
    name: 'TSoren',
    life: 150,
    attack: 20,
    defense: 40,
    equipments: [smallMagicalWand],
    magic: 200,
 };

 //Partie 5

 //type générique
 type Magasin<T> = {
    name: string;
    items: Array<T>;
 }      //n'importe quel type peut être passé en paramètre

 //type Partial : propriété optionnelle
 type PersonnagePartial = Partial<Personnage> //toutes les propriétés de Personnage sont optionnelles

 //type Record : permet de créer un type d'objet avec des clés et des valeurs
    type PersonnageRecord = Record<string, Personnage>; //clé de type string et valeur de type Personnage

//Exercices Partie 5 :

