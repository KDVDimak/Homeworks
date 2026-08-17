// Zavd 1 

// for ( let i = 20; i <= 30; i+=0.5){
//     console.log(i);
// }


// Zavd 2 

// let doll = 10;
// while( doll <= 100 ){
//         console.log(doll * 27)
//         doll +=10;
        
// }


// Zavd 3 

// const num = Number(prompt("Введіть число від 1 до 100"));

// let count = 1;
// let result = "";

// while( count**2 < num ){
//         result += count + " ";
//         count++
// }
// alert(result);


// Zavd 4 

// const num = Number(prompt("Введіть ціле число"));
// let isPrime = true;

// if ( num <= 1 ){
//         alert(`${num} не є простим числом `) 
// } else { for ( let i = 2; i < num; i++){
//         if ( num % i === 0 ){
//              isPrime = false;
//                break
//         }
        
// } isPrime === true ? alert(`${num} є простим числом `) : alert(`${num} не є простим числом `)

// }


// Zavd 5 

let num = Number(prompt("Введіть число"));

const result = num;

while ( num > 1 ){
        if ( num % 3 === 0 ){
                num = num / 3
        } else { alert(`${result} не степінь до 3 `)
        break }
} if (num === 1){
        alert(`${result} степінь до 3 `)
}