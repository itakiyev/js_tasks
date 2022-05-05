// filter позволяет  нам отсортировать массив по какому-то критерию

let arr = [12, 5, 8, 130, 44];

// Каждая итерация возвращает true || false, от этого зависит попадет ли элемент в результирующий массив или нет

let newArr = arr.filter(function (elem) {
  return elem > 15;
});

console.log(newArr);

/**
 * Функция колбэк может лежать отдельно
 */

let array = [12, 5, 8, 130, 44];

let isBigEnough = (elem) => elem > 15;

let newArray = array.filter(isBigEnough);

console.log(newArray);
