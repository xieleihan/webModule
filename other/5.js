// 第一题
var arr = ["牛魔", "孙尚香", "百里玄策", "墨子", "牛魔", "孙尚香", "百里玄策", "牛魔", "百里玄策", "孙尚香", "牛魔", "墨子", "牛魔", "牛魔", "孙尚香", "孙尚香"];

function newArr(arr) {
    var map = {};
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = [];
        }
        map[arr[i]].push(arr[i]);
    }
    console.log(map);
    for (var key in map) {
        result.push(map[key]);
    }

    return result;
}

console.log(newArr(arr));

console.log("")
// 第二题
function lastItem(arr) {
    var result = -1;
    if (arr.length === 0) {
        return result;
    } else {
        result = arr[arr.length - 1];
    }
    return result;
}
var arr1 = [1, 2, 3];
var arr2 = [];
console.log(lastItem(arr1));
console.log(lastItem(arr2));

console.log("")
// 第三题
var createCounter = function (n) {
    var count = n
    return function () {
        return count++;
    };
}
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

console.log("")
// 第四题
function getDepth(arr) {
    if (!Array.isArray(arr)) {
        return 0;
    }
    var depth = 1;
    for (var i = 0; i < arr.length; i++){
        var temp = arr[i];
        if (Array.isArray(temp)){
            var tempDepth = getDepth(temp) + 1;
            depth = Math.max(depth, tempDepth);
        }
    }
    return depth;
}
function flat(arr, n) {
    var depth = getDepth(arr);
    if (depth <= n) {
        return arr;
    }

    if (n === 0) {
        return arr;
    }

    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flat(arr[i], n - 1));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));
console.log(flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2));

console.log("")
// 第五题
var romanToInt = function (s) {
    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var current = map[s[i]];
        var next = map[s[i + 1]];

        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));