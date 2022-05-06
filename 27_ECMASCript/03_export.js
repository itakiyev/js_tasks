// Modules
//--------------

// Модуль - это обычный файл с кодом

// export переменных

// Variables
export let one = 1;

let two = 2;
let three = 3;
export { two, three };

// Class
class Person {
  constructor(name) {
    this.name = name;
  }
}

// Function
function sayHello() {
  console.log("Hello!");
}

export { Person, sayHello };

// Rename
export { one as once, two as twice };

export default class Car {
  constructor(name) {
    this.name = name;
  }
}


