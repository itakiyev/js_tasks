/**
 * Итераторы
 * 
 * Обработка каждого элемента коллекции.
 * 
 * Объект является итератором, если он умеет обращаться к элементам коллекции по одному за раз, 
 * при этом отслеживая своё текущее положение внутри этой последовательности.
 */

// let arr = [1, 2, 4, 6, 8];
// let i = arr[Symbol.iterator]();
// console.log(i.next());
// console.log(i.next());

// function createIterator(array) {
//     var nextIndex = 0;

//     return {
//         next: function () {
//             return nextIndex < array.length ?
//                 { value: array[nextIndex++], done: false } :
//                 { done: true };
//         }
//     }
// }

// let arr = createIterator(['first', 'second', 'third']);
// console.log(arr.next().value); // 'first'
// console.log(arr.next().value); // 'second'
// console.log(arr.next().value);  // 'third'
// console.log(arr.next().done);  // true

/**
 * Генераторы
 * 
 * это специальный тип функции, который работает как фабрика итераторов. 
 * Функция становится генератором, если содержит один или более yield операторов и использует function* синтаксис.
 * 
 * (ключевое слово function со звёздочкой) определяет функцию-генератор.
 */

// function* idMaker() {
//     var index = 0;
//     while (true)
//         yield index++;
// }

// var it = idMaker();

// console.log(it.next().value); // 0
// console.log(it.next().value); // 1
// console.log(it.next().value); // 2

function* gen(a, b) {
    let sum = a + b;
    yield sum;
    yield sum += b;
    yield sum += b;
    return sum + b;
}

let g = gen(2, 3);
console.log(g.next()); //value = 5, done = false
console.log(g.next()); //value = 8, done = false
console.log(g.next()); //value = 11, done = false
console.log(g.next()); //value = 14, done = true
