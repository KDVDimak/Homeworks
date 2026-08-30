// const shifty = (arr) => {
//             let firstNum = arr[0]
//                   for ( let i =0; i < arr.length - 1; i++ ){
//                             arr[i] = arr[i + 1]
//                   }  

//             return firstNum
// }

let arr = [1, 2, 3, 4, 5, 6]

const reversy = (arr) => {
        for ( let i =0; i < arr.length / 2; i++ ){
                    let newEl = arr[i];
                    arr [i] = arr[arr.length - 1 - i]
                    arr[arr.length - 1 - i] = newEl
        }
            return arr
}

