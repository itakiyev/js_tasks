function sum() {
    console.log('Hello' + ' World');
}

sum()

// ES6 => стрелочные функции
// Упростить синтаксис

// let myFunc = () => {
//     console.log('work');
//     console.log('Hello' + ' World');
// }

// myFunc()

// Упрощения
// #1 - параметры не обязательны также как и скобки если параметр 1

// let myFunc2 = a => {
//     console.log(a);
//     console.log(a * 4);
// }

// myFunc2(5)

// #2 - параметры передаются в скобках через запятую

// let myFunc3 = (a, b) => {
//     console.log(a * b);
// }

// myFunc3(5,2)

// #3 - без фигурных скобок можно не использовать return

let myFunc4 = (a, b) => a* b;

console.log(myFunc4(5,2))



