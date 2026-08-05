// function describe(value){
//     return `Тип: ${typeof(value)}, Значення: ${value}`;
// }


// function describe(value){
//     if (value === null){
//      return `Тип: null, Значення: ${value}`;
// } else if ( Array.isArray(value)){
//         return `Тип: array, Значення: ${value}`
// }    else if (Number.isNaN(value)){
//      return `Тип: NaN, Значення: ${value}`
// } else if (typeof(value) === `object` ){
//  return `Тип: object, Значення: ${JSON.stringify(value)}`
// }
// }


// function describe(value){
//     if (typeof(value) === `string`){
//         return `Тип: string, Значення: ${value}, Довжина: ${value.length}`;
// }   else if ( Array.isArray(value)){
//         return `Тип: array, Значення: ${value}, Кількість елементів: ${value.length}`
// }    else if (typeof(value) === `object`){
//         return `Тип: object, Значення: ${JSON.stringify(value)}, Ключі: ${Object.keys(value)}`
// }    else if (typeof(value) === `function`){
//         return `Тип: function, Значення: ${value}, Аргументів: ${value.length}`
// }

// }


// function describe(value){
//     if (typeof(value) === 'bigint'){
//         return `Тип: bigint, Значення: ${value}n`;
// }   else if (value.description === undefined){
//         return `Тип: symbol, без опису`;
// }   else if (typeof(value) === 'symbol' ){
//         return `Тип: symbol, Значення: ${value.description}`;
// }

// }


// function describe(value){
//     if (value === null){
//         return `Тип: null, Значення: ${value}`;
// }   else if ( Array.isArray(value)){
//         return `Тип: array, Значення: ${value}`
// }   else if (Number.isNaN(value)){
//         return `Тип: NaN, Значення: ${value}`
// }   else if (typeof(value) === 'bigint'){
//         return `Тип: bigint, Значення: ${value}n`;
// }   else if (typeof(value) === 'symbol' ){
//         if (value.description === undefined){
//         return `Тип: symbol, без опису`;
//         }
//         return `Тип: symbol, Значення: ${value.description}`;       
// }   else if (typeof(value) === `object`){
//         return `Тип: object, Значення: ${JSON.stringify(value)}`
// }   else if (typeof(value) === `function`){
//         return `Тип: function, Значення: ${value}`
// }   else if (typeof(value) === `string`) {
//         return `Тип: string, Значення: ${value}`
// }   else if (typeof(value) === `number`) {
//         return `Тип: number, Значення: ${value}`
// }   else if (typeof(value) === `boolean`) {
//         return `Тип: boolean, Значення: ${value}`
// }   else if (typeof(value) === `undefined`) {
//         return `Тип: undefined, Значення: ${value}`
// }   

// }


function describe(value, level = 0){
        const indent = '  '.repeat(level);
    if (value === null){
        return `Тип: null, Значення: ${value}`;
}   else if ( Array.isArray(value)){
        let result = `Тип: array, Значення: ${value}`
            for (let i = 0; i < value.length; i++){
                result += `\n- ${describe(value[i])}`;
            }
            return result;
}   else if (Number.isNaN(value)){
        return `Тип: NaN, Значення: ${value}`
}   else if (typeof(value) === 'bigint'){
        return `Тип: bigint, Значення: ${value}n`;
}   else if (typeof(value) === 'symbol' ){
        if (value.description === undefined){
        return `Тип: symbol, без опису`;
        }
        return `Тип: symbol, Значення: ${value.description}`;


}   else if (typeof(value) === `object`){
                const keys = Object.keys(value);
                let result = `Тип: object`;
                for (let i = 0; i < keys.length; i++){
                const key = keys[i];
                result += `\n- ${key}: ${describe(value[key])}`;
                }
        return result;
}   


else if (typeof(value) === `function`){
        return `Тип: function, Значення: ${value}`
}   else if (typeof(value) === `string`) {
        return `Тип: string, Значення: ${value}`
}   else if (typeof(value) === `number`) {
        return `Тип: number, Значення: ${value}`
}   else if (typeof(value) === `boolean`) {
         return `Тип: boolean, Значення: ${value}`
}   else if (typeof(value) === `undefined`) {
        return `Тип: undefined, Значення: ${value}`
}   

}