/**
 * Удалите каждый второй элемент из массива.
 * Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

    Пример:
    ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
 */

function removeEveryOther() {
    //code here
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]), [['Goodbye']]);

/**
 * #2
 * 
 * После вызова функции findSum() с любым количеством неотрицательных целых аргументов 
 * она должна вернуть сумму всех этих аргументов. Если аргументы не указаны, функция должна вернуть 0, 
 * если аргументы отрицательные, она должна вернуть -1.
 */

function findSum(arr) {
    //your code here
}

console.log(findSum(1, 3, 5), 9, "1 + 3 + 5 = 9")
console.log(findSum(0, 3, 9, 2), 14, "0+3+9+2 = 14")
console.log(findSum(), 0, "If no arguments, function should return 0")
console.log(findSum(1, -2, 4), -1, "If negative arguments are passed, function should return -1")
console.log(findSum(0), 0, "The sum of 0 is 0")


/**
 * Округлить его до следующего (то есть «большего») числа, кратного 5
 * 
 * input:    output:
    0    ->   0
    2    ->   5
    3    ->   5
    12   ->   15
    21   ->   25
    30   ->   30
    -2   ->   0
    -5   ->   -5
    и тд.
 */

