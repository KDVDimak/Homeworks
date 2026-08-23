// const removeElement = (array, item) => {
//         for ( let i =0; i < array.length; i++ )
//             if ( array[i] === item ){
//                 array.splice(i, 1)
//             }
//             return array;
// }

const removeElement = (array, item) => {
        let index = array.indexOf(item)
        if ( array[index] === item ){
            array.splice(index, 1)

        }
            return array;

}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

