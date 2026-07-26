function isReallyArray(value){
  if( Array.isArray(value)){
    return true;

  } else return false;
}
console.log(isReallyArray([1, 2, 3]));      
console.log(isReallyArray('hello'));        
console.log(isReallyArray({ length: 3 }));
console.log(isReallyArray(null));     
console.log(isReallyArray('123'.split('')));  

function whatIsIt(value){
    if(Array.isArray(value)){
            return "array"

        }
    if( value === null ){
        return 'null'
    }
        return typeof(value);
}
console.log(whatIsIt(42));      
console.log(whatIsIt('hi'));
console.log(whatIsIt(null));
console.log(whatIsIt([1, 2]));
console.log(whatIsIt({}));
console.log(whatIsIt(() => {}));
console.log(whatIsIt(undefined));     
console.log(whatIsIt(NaN));  