const hero = {
    name: "James",
    class: "warrior",
    level: 20,
    isAlive: true,

    stats: {
        hp: 100,
        mana: 100,
        strength: 15,
        agility: 25,
        intelligence: 35,
    },

    inventory: ['sword', 'potion', 'shield', 'helmet', 'armour'],

    abilities: {
        attack: function() { return `${hero.name} атакує!`; },
        heal: () => { return `${hero.name} лікую!`; },
        levelUp: () => { return `${hero.name} новий рівень!`; }
},

    location: {
    region: "Крайнє Північ",
    city: "Whitewind",
    coordinates: {
        x: 15,
        y: 22,
        z: 55,
    } 
    
}
}
console.log(hero);
console.log(hero.name);
console.log(hero.class);
console.log(hero.level);
console.log(hero.isAlive);

console.log(hero.stats);
console.log(hero.stats.strength);

console.log(hero.stats.intelligence * 2);

console.log(hero.inventory);
console.log(hero.inventory[0]);
console.log( hero.inventory[hero.inventory.length-1]);
console.log(hero.inventory.length);

const enemy = {
    name: "Daniel",
    'critical hit chance': 0.15,
    'attack-speed': 2.5,
    ['damage-' + hero.class]: 50,

}
console.log(enemy.name);
console.log(enemy['critical hit chance']);// через крапку видає пмилка тому що ключ визивається з пробілами, потрібні квадратичні дужки.
console.log( enemy['attack-speed']);
console.log(enemy['damage-' + hero.class]);

console.log(hero.abilities.attack());
console.log(hero.abilities.heal());
console.log(hero.abilities.levelUp());


console.log(hero.location.region);
console.log(hero.location.coordinates.z);


const villain  = {
    name: "Jeremy",
    class: "Mag",
    level: 21,
    isAlive: true,

    stats: {
        hp: 100,
        mana: 110,
        strength: 10,
        agility: 22,
        intelligence: 32,
    },

    inventory: ['book', 'staff', 'crystal', 'helmet'],

    abilities: {
        attack: function() { return `${villain.name} атакує!`; },
        heal: () => { return `${villain.name} лікую!`; },
        levelUp: () => { return `${villain.name} новий рівень!`; }
},
    location: {
    region: "Крайнє Північ",
    city: "Whitewind",
    coordinates: {
        x: 15,
        y: 22,
        z: 55,
    } 
    
}
}

console.log(`${hero.name} і ${villain.name}`); 

if( hero.stats.hp > villain.stats.hp ){
    console.log(hero.name, hero.stats.hp); 
} else console.log(villain.name, villain.stats.hp); 

let resultOne = hero.inventory.join(', ');
let resultTwo = villain.inventory.join(', ');

console.log( `Учасники дуелі: ${hero.name} (${resultOne}) vs ${villain.name} (${resultTwo}).`);