const tempurature = prompt("Введіть значення температури в Цельсіях");
const shkal = prompt("Введіть цільову шкалу: F, K або R");

let shkalLower = shkal.toLowerCase()
let tempuratureNum = Number(tempurature);

// if (tempuratureNum < -273.15){
//     console.log("Ниже абсолютного нуля")
// } else {
//     switch (shkalLower) {
//     case ("f") : 
//          alert (Math.round((tempuratureNum * 9 / 5 + 32) * 100) / 100 + " Фаренгейт");
//         break;
//     case ("k") : 
//          alert (Math.round((tempuratureNum + 273.15)* 100) / 100 + " Кельвин");
//         break;
//     case ("r") : 
//        alert (Math.round((((tempuratureNum + 273.15) * 9 / 5)) * 100) / 100 + " Ранкин");
//         break;
// }
// }

const scaleNames = {
    f: 'Фаренгейт',
    k: 'Кельвін',
    r: 'Ранкін',
};

Object.hasOwn(scaleNames, shkalLower)

   const tempuratureStat = tempuratureNum < -10 ? "мороз" 
    : tempuratureNum >= -10 && tempuratureNum < 0 ? "холодно"
    : tempuratureNum >= 0 && tempuratureNum < 15 ? "прохолодно"
    : tempuratureNum >= 15 && tempuratureNum <= 25 ? "комфортно"
    : "спека";

if (tempuratureNum < -273.15){
   console.log("Ниже абсолютного нуля")
    } else if (!Object.hasOwn(scaleNames, shkalLower)){
        alert("Невідома шкала")
    } else  if ( shkalLower === "f"){
       alert(` ${tempuratureNum} °C = ${Math.round((tempuratureNum * 9 / 5 + 32) * 100) / 100} (${scaleNames[shkalLower]}) — ${tempuratureStat}`)
    } else  if ( shkalLower === "k"){
       alert(` ${tempuratureNum} °C = ${Math.round((tempuratureNum + 273.15)* 100) / 100} (${scaleNames[shkalLower]}) — ${tempuratureStat}`)
    } else  if ( shkalLower === "r"){
       alert(` ${tempuratureNum} °C = ${Math.round((((tempuratureNum + 273.15) * 9 / 5)) * 100) / 100} (${scaleNames[shkalLower]}) — ${tempuratureStat}`)
    } 

 