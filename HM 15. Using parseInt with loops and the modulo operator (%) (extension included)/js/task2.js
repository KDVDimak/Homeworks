// let time = prompt("Ведіть час у секундах");
// const hour = Math.floor(Number(time)/3600)
// const minute = Math.floor((Number(time) % 3600) / 60)
// const sec = Number(time) % 60

 

//  if ( time === null ){
//         alert("Некоректний ввід") 
//  }  else if ( time.trim === "" ){
//         alert("Некоректний ввід")
//  }  else if ( Number.isNaN(Number(time))){
//         alert("Некоректний ввід")
//  }  else if ( Number(time) < 0 ){
//         alert("Некоректний ввід")
//  }  else if ( !Number.isInteger(Number(time))){
//         alert("Некоректний ввід")
//  }  else alert (`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(sec).padStart(2, '0')}`)


// Zavd 2.2

// let input = prompt("Ведіть num");
// let inputNum = Number(input);

// do{
//     let sum = 0;
// do { 
//     let num = inputNum % 10
//         sum += num
//        inputNum = Math.floor(inputNum / 10)
// } while ( inputNum !== 0)
//     console.log(`${sum}`)
//     inputNum = sum
// } while ( inputNum > 9 )


// Zavd 2.3

const  price = prompt("Ведіть ціну у грн"); 
let priceNum = Number(price);
const nominals = [500, 200, 100, 50, 20, 10, 5, 2, 1];
let count = 0;
let result = "";

        for ( const num of nominals ){
            let res = Math.floor(priceNum / num)
            let nextNum = priceNum % num

            if ( res === 0 ){
                continue
            }   
                priceNum = nextNum
                count +=res
                result  += `${num} x ${res} \n`
            if (nextNum === 0){
                break
            }
        }
        alert(result)
        alert (`${count}`)