// Переменная rest является массивом со всеми значениями которые не были помещены в отдельную переменную

// let [age, height, ...rest] = [
//   16,
//   170,
//   "Aziza",
//   "Aibina",
//   "Google",
//   "Erden",
//   123,
// ];

// console.log(age, height, rest);

/**
 * ВАЖНО: Опреатор ... называют по разному в зависимости от контекста [rest || spread]
 *
 * REST - объединяет значения в массив
 * SPREAD - Распаковывает массив
 */

// Также используется и в функциях *rest опреатор
// const createPlayer = (...params) => {
//   console.log(params);
// };

// createPlayer("Bob", 99, null, 42);

// SPREAD
// const array = [1, 2, 9, 10];
// console.log(...array);

const numbers = [1, 2, 3, 99];
const letters = ["a", "b", "c", "z"];

const concat = [...numbers, ...letters];
console.log(concat);
