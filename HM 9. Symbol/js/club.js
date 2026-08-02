const User1 = {
    id: Symbol('user'),
    name: 'Arias',
    joinDate: '2025-01-20'
}
const User2 = {
    id: Symbol('user'),
    name: 'Marlian',
    joinDate: '2025-01-20'
}
const User3 = {
    id: Symbol('user'),
    name: 'Tunis',
    joinDate: '2025-01-20'
}

// console.log(User1);
// console.log(User2);
// console.log(User3);

const twin1 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

const twin2 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

// console.log(twin1 === twin2); // false, потому что это два разных объекта в памяти, объекты сравниваются по памяти а не по содержимому 
// console.log(twin1.id === twin2.id); // false, каждый Symbol создаёт новое уникальное значение,  даже если у символов одинаковое описание twin
// console.log(twin1.name === twin2.name); // true, имена одинаковые в объектах
// console.log(twin1.id.description === twin2.id.description); // true, само написани айди одинаковые

// const s1 = Symbol('secret');
// const s2 = Symbol(s1.description);
// console.log(s1 === s2);   // false, как и говорил объекты сравниваются по памяти а не по содержимому 

// const s1 = Symbol('id');
// const s2 = Symbol('id');
// console.log(s1 == s2);   // false, то же самое через сравнение все равно они не равны

// const s = Symbol('id');
// alert(s);         // Failed to execute 'alert' on 'Window': Cannot convert a Symbol value to a string
// alert(String(s)); // выведется сплывающее окно со строкой Symbol(id)
// alert(s.toString()); // тоже выведется сплывающее окно со строкой Symbol(id)
// alert(s.description); // тут будет сплывающее окно со строкой id, потому что мы просим с помощью s.description именно содержимое Symbol

// const uniqueKey = Symbol('meta');
// const data = {
//   publicName: 'Alice',
//   [uniqueKey]: 'секретна інформація'
// };

// console.log(data);
// console.log(data[uniqueKey]);
// console.log(data.uniqueKey);   //undefined, потому что тут вызывается буквально строковой ключ uniqueKey, а надо вызвать значнение из самого Symbol 
// console.log(Object.keys(data));


// let club = [User1, User2, User3, twin1, twin2]

// function findMember(memberSymbol){
//         for ( let i = 0; i <  club.length; i++){
//             if (club[i].id === memberSymbol){
//                 return club[i]
            
//             }
//         } return 'Member not found';

// }
// findMember(User1.id);
// console.log( findMember(User1.id) )
// console.log( findMember(Symbol('member')))

const a = Symbol('shared');
const b = Symbol('shared');
console.log(a === b);   // false

const c = Symbol.for('shared');
const d = Symbol.for('shared');
console.log(c === d);   // true, потому что буквально возвращает тот же символ по значению если они одинаковые 
