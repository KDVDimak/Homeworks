const padString  = (str, num, symbol, bool) => {
        if ( !str ){
            console.log("Нет строки");
                return "some error"
        }  else if (!num){
            console.log("Нет числа");
                return "some error"
        } 

        if ( str.length > num ){
          str = str.substring(0, num)
        } else if (str.length < num) {
            let newNum = num - str.length 
            if (!symbol){
                console.log("нет символа");
                return "some error"
            } else if ( symbol.length !== 1){
                console.log("Символ только один");
                return "some error"
            } else { for ( let i = 0; i < newNum; i++ ){
                    if ( bool === false ){
                        str = symbol + str;
        }   else str += symbol;
            }}
        }
            return str;
}

console.log(padString('hello', 8, '*'));        
console.log(padString('hello', 8, '*', true));  
console.log(padString('hello', 8, '*', false)); 

console.log(padString('hello', 2));            
console.log(padString('hello', 5, '*'));       

console.log(padString('', 5, '*'));            
console.log(padString('hello'));                
console.log(padString('hello', 8));             
console.log(padString('hello', 8, '**'));       