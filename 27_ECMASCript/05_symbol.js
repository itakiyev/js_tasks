/**
 * Symbol - это уникальный и неизменяемый тип данных, 
 * который может быть использован как идентификатор для свойств объектов
 */

let sym1 = Symbol('foo');
let sym2 = Symbol("sym");
console.log(sym1 === sym2); // false


// Не перебирается в массиве
var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

console.log(obj)