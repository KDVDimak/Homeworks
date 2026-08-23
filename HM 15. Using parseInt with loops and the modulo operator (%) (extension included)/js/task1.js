let guessedCorrectly = false;
const randomNumber = Math.floor(Math.random() * 10) + 1;
let count = 1;
do {
    let remainder = 5 - count
    const userGuess = prompt("Вгадай число від 1 до 10:");
     if ( userGuess === null){
            alert("Гру завершено");
            break
    } else if ( userGuess.trim() === "" ){
            alert("Ви нічого не ввели");
            continue
    } else if ( Number.isNaN(Number(userGuess)) ){
            alert("Це не число");
            continue
    } else if ( !Number.isInteger(Number(userGuess)) ){
            alert("Введіть ціле число")
            continue
    } else if ( Number(userGuess) <= 0 || Number(userGuess) > 10 ) {
            alert("Число має бути від 1 до 10")
        count++
    }   else if ( Number(userGuess) > randomNumber ){
            alert (`Забагато, залишилося ${remainder} спроби`)
        count++
    }   else if ( Number(userGuess) < randomNumber ) {
            alert (`Замало, залишилося ${remainder} спроби`)
        count++
    } else if (Number(userGuess) === randomNumber) {
        alert(`Вітаю! Ви вгадали число за ${count} спроб ! `);
        guessedCorrectly = true;
    }
    if (count > 5){
        alert(`На жаль, це було число ${randomNumber}`);
            break
    }
} while (!guessedCorrectly);

// if (Number.isNaN(Number(userGuess))){
//     alert("Це не число");
// } else if (!Number.isInteger(Number(userGuess))){
//     alert("Введіть ціле число")
// } else if (Number(userGuess) === randomNumber) {
//     alert(`Вітаю! Ви вгадали число за ${count} спроб ! `);
// }