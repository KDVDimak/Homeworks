let age = prompt("Введіть свій вік");
let isValidAge = true;


if ( age === null ){
    isValidAge = false;
} else if (age.trim() === "" ){
    isValidAge = false;
} else if ( Number.isNaN(ageNum)){
    isValidAge = false;
} else if ( !Number.isFinite(ageNum)){
    isValidAge = false;
} else if ( !Number.isInteger(ageNum)){
    isValidAge = false;
}

if ( isValidAge === false ){
alert ("Некоректний ввід");
}


let ageNum = Number(age);

if( ageNum < 0){
    alert("Такого віку не існує")
} else if( ageNum >= 0 && age <= 6 ){
    alert("Дошкільник")
} else if( ageNum > 6 && age <= 17){
    alert("Неповнолітній")
} else if( ageNum > 17 && age <= 64){
    alert("Дорослий")
} else if( ageNum > 64 && age <= 120){
    alert("Пенсіонер")
} else if( ageNum > 120){
    alert("Ви точно не бот?")
} 

const canDrive = ageNum >= 18 ? 'Може керувати авто' : 'Не може керувати авто' ;
const ticket = ageNum < 7 ?
'Квиток: 0 грн' : ageNum >=7 && ageNum <= 17 || ageNum >= 65 ? 
'Квиток: 50 грн' 
: 'Квиток: 100 грн';