const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, characters) => {
        let result = "";
          for ( let i = 0; i < length; i++ ){
               let rand = Math.random()
                  let num =  rand * characters.length;
                   let floorNum = Math.floor(num); 
                        result += characters[floorNum];
          }  
        return result;
}   

console.log(generateKey(16, characters))
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i