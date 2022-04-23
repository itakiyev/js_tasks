/**
 * давайте проверим начинается ли текст с Mary
 */

let str1 = "Mary had a little lamb";
console.log(/^Mary/.test(str1)); // true

/**
 * кончается ли строка словом snow при помощи snow$
 */

let str1 = "it's fleece was white as snow";
console.log(/snow$/.test(str1)); // true

/**
 * На языке регулярных выражений это \d\d:\d\d:
 */

let goodInput = "12:34";
let badInput = "12:345";

let regexp = /^\d\d:\d\d$/;
alert(regexp.test(goodInput)); // true
alert(regexp.test(badInput)); // false