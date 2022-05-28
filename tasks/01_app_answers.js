// #1

function removeEveryOther(arr) {
    return arr.filter(function (elem, index) {
        return index % 2 === 0;
    });
}

function removeEveryOther(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// #2

function findSum(...nums) {
    return nums.reduce((a, b) => a < 0 || b < 0 ? - 1 : a + b, 0)
}

function findSum() {
    var sum = 0;

    for (let i in arguments) {
        if (arguments[i] < 0) return -1;
        sum += arguments[i];
    }

    return sum;
}