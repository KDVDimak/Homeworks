let firstBigInt  = 10n;
let secondBigInt  = BigInt(10);

console.log( 'Через n:', firstBigInt);
console.log( 'Тип', typeof firstBigInt);

console.log( 'Через BigInt():', secondBigInt);
console.log( 'Тип', typeof secondBigInt);

console.log( BigInt(Number.MAX_SAFE_INTEGER) + 1n);
console.log( BigInt(Number.MAX_SAFE_INTEGER) + 2n);
console.log( BigInt(Number.MAX_SAFE_INTEGER) + 3n);
console.log( BigInt(Number.MAX_SAFE_INTEGER) + 4n);
console.log( BigInt(Number.MAX_SAFE_INTEGER) + 5n);

const a = 10n;
const b = 10;

console.log( ' Строге дорівнює: ', a === b ); // тут false тому що а це тип даних BigInt, а b це Number.
console.log( ' Нестроге дорівнює: ', a == b ); // тут true тому що зруівнюється не типи даних а тільки числові значення.

console.log( ' Строге дорівнює: ', typeof a );
console.log( ' Строге дорівнює: ', typeof b );

// console.log( 10n + 5); // Cannot mix BigInt and other types, use explicit conversions


console.log("Це — звичайна помилка.");
console.log('Це — звичайна помилка.');
console.log(`Це — звичайна помилка.`);

console.log("Він сказав: \"Це — 'звичайна' помилка \".");
console.log(`Він сказав: "Це — 'звичайна' помилка ".`); // через backticks зручніше, бо не потрібно екранувати подвійні лапки.


const name = "Dmytro";
const age = 20;
const city = "Rostock";

console.log( `Привіт! Мене звати ${name}, мені ${age} років, живу у ${city}.`)
console.log( `Привіт! Мене звати ${name}, мені ${age * 12} років, живу у ${city}.`)

const text = `Привіт! Мене звати ${name}, мені ${age} років, живу у ${city}.`;

console.log("Довжина рядка:", text.length);
console.log("Перший символ:", text[0]);
console.log("П'ятий символ:", text[4]);
console.log("Останній символ:", text[text.length-1]);

const greeting = 'Hello';
greeting[0] = 'J';
console.log(greeting);
