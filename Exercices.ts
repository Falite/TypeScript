// Exercice de la Partie 3 :

function sayHello(target: { firstname: string, money: number }): string {
    return `Hello ${target.firstname}, you have ${target.money} on your bank account.`;
}
const message: string = sayHello({ firstname: 'World', money: 123 });

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

 //Exercices Partie 5 :
// Consigne n°1
// Les propriétés de "Stats" ci-dessous sont
// redondantes avec celles de "Character".
// Chercher dans la documentation un générique qui nous permettrait d'éviter la répétition.
type Stats = Omit<Character, 'name'> ;
 
// Consigne n°2
// De la même manière que pour "Stats", trouvez
// par quel moyen on pourrait éviter la répétion de 
// "attack" et "defense" dans ce type "Equipment".
// Attention au caractère "requis" ou "optionnel" des propriétés !
// "attack" et "defense" sont obligatoires dans "Stats"
// mais optionnelles dans "Equipment" !
type EquipmentGen = Omit<Partial<Stats>, 'life'> & {
   price: number;
};

// Consigne n°3
// Transformez ce type en générique.
// Il est utilisé plus bas dans ce code.
type WithMagicGen<T> = T & {
   magic: number;
}

// ====================
// lignes à ne pas modifier
// ====================

type PetGen = Character;
type MagicalPetGen = WithMagicGen<Pet>;

type HeroGen = Character & {
   pets?: Array<Pet>;
   equipments?: Array<Equipment>;
};

type MagicianGen = WithMagicGen<Hero>;

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

const smallMagicalWand: WithMagicGen<Equipment> = {
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
