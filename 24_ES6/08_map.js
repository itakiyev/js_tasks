// let nums = [1, 4, 9, 12, 50];

// let result = nums.map(function (elem) {
//   return elem * 2;
// });

// console.log(result);

/**
 * Упрощенная запись
 */

let nums = [1, 4, 9, 12, 50];

let multipluByTwo = (elem) => elem * 2;

let result = nums.map(multipluByTwo);
// let result = nums.map((elem) => elem * 2);

console.log(result);
