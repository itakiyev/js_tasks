let array = [1, 2, 3, 4, 5];

let total = array.reduce(function (acc, elem) {
  console.log(`Acc: ${acc}, Current elem: ${elem}`);
  return acc + elem;
}, 10);

console.log(total);

// 1: 0 + 1 = 1
// 2: 1 + 2 = 3
// 3: 3 + 3 = 6
// 4: 6 + 4 = 10
// 5: 10 + 5 = 15

// Example 2
const arr = ["apple", "banana", "peach", "orange"];

// let fruits = arr.reduce((acc, elem) => {
//   console.log("acc: ", acc);
//   acc[elem] = 1;
//   return acc;
// }, {});

// console.log(fruits);

// Посчитать сколько повторяющихся фруктов в массиве

// let fruits = arr.reduce((acc, elem) => {
//   if (acc[elem]) {
//     acc[elem] += 1;
//   } else {
//     acc[elem];
//   }
//   return acc;
// }, {});

// console.log(fruits);
