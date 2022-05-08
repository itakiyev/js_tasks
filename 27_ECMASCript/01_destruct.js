/**
 * Деструктуризация это особый синтаксис присваивания, 
 * при котором массив или объект можно присвоить сразу нескольким переменным разбив его на части
 */

// let age = 16,
//   height = 170,
//   grade = 10;

//Деструктуризация
// let [age, height, grade] = [16, 170, 10];

// console.log(age, height, grade);

// Если значение отсутсвует, то будет undefined, можно назначит значение по умолчанию

// let [age, height, grade = 10] = [16, 170];
// console.log(age, height, grade);

// Можно намеренно пропустить значение поставив запятую
// let [age, height, grade] = [16, , 170];
// console.log(age, height, grade);

// Деструктаризация помогает менять местами занчения двух переменных, раньше для этого требовалась третья переменная
// let a = 13;
// let b = 69;

// [a, b] = [b, a];
// console.log(a, b);

// const destructObj = { name: "Hannah", x: 50, y: 44 };
// const { name: hannahName, x: playerX, y: playerY } = destructObj;
// console.log(hannahName, playerX, playerY);