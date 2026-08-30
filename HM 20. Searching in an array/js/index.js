let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

console.log(arr.reduce((acc, val) => acc + val, 0));

console.log( Math.min(...arr) + " " + (arr.indexOf(Math.min(...arr)) + 1) )

console.log( Math.max(...arr) + " " + (arr.indexOf(Math.max(...arr)) + 1) )

console.log(arr.reduce((acc, val) => val < 0 ? acc +1 : acc, 0));

console.log(arr.reduce((acc, val) => val > 0 && val % 2 !== 0 ? acc +1 : acc, 0));

console.log(arr.reduce((acc, val) => val > 0 && val % 2 === 0 ? acc +1 : acc, 0));

console.log(arr.reduce((acc, val) => val > 0 && val % 2 === 0 ? acc + val : acc, 0));

console.log(arr.reduce((acc, val) => val > 0 && val % 2 !== 0 ? acc + val : acc, 0));

console.log(arr.reduce((acc, val) => val > 0 ? acc * val : acc, 1));

console.log( arr.map( x => x === Math.max(...arr)? x : 0 )) 