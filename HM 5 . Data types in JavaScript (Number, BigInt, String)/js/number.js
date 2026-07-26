console.log('Ціле додатнє:', 42);
console.log('Ціле від:', -42);
console.log('Число з плаваючою крапкою:', 42.5);

console.log('Дуже велике число, записане через e:', 5e15);
console.log('Дуже мале число, записане через e-:', 5e-15);
console.log('Велике число з роздільником _:', 1000_000_000);

console.log(1/0);
console.log(-1/0);
console.log( "text" * 5);

console.log( 0.1 + 0.2); // Очікував побачити 0.3, але отримав 0.30000000000000004, тому що дробові числа зберігаються у двійковому форматі і деякі значення неможливо представити абсолютно точно.

console,log( Number.MAX_SAFE_INTEGER + 1);
console,log( Number.MAX_SAFE_INTEGER + 2);
console,log( Number.MAX_SAFE_INTEGER + 3);
console,log( Number.MAX_SAFE_INTEGER + 4);
console,log( Number.MAX_SAFE_INTEGER + 5);



console.log( "NaN + 5:", notNumber + 5);
console.log( "NaN - 5:", notNumber + 5);
console.log( "NaN * 5:", notNumber + 5);
console.log( "NaN / 5:", notNumber + 5);

// У всіх операціях результат NaN, тому що некоректне числове значення поширюється на всі обчислення.

