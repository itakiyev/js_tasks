// Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.

let array = [1, 2, 3, 4, 5, 6];

function isFive(elem) {
  return elem == 5;
}

let result = array.find(isFive);
console.log(result);
//Следующий пример находит в массиве положительных чисел элемент, являющийся простым числом (либо возвращает undefined, если в массиве нет простых чисел).

// let arr = [4, 6, 8, 12];
// let arr2 = [4, 5, 8, 12];

// function isPrime(element, index, array) {
//   var start = 2;
//   while (start <= Math.sqrt(element)) {
//     if (element % start++ < 1) {
//       return false;
//     }
//   }
//   return element > 1;
// }

// console.log(arr.find(isPrime)); // undefined, не найдено
// console.log(arr2.find(isPrime)); // 5
