/**
 * Example #1
 */

// let person = {
//     name: 'Issa'
// }

// function sayHello() {
//     return `Hello ${this.name}`
// }

// person.sayHello = sayHello;

// console.log(person.sayHello())

/**
 * Example #2
 */

let person = {
  name: "Issa",
  sayHello: function () {
    return `Hello ${this.name}`;
  },
};

let anotherPerson = {
  name: "Hannah",
};

anotherPerson.sayHello = person.sayHello;

console.log(person.sayHello()); // Hello Issa
console.log(anotherPerson.sayHello()); // Hello Hannah
console.log(person.sayHello.call(anotherPerson)); // Hello Hannah
