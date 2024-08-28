// 第一题
function digui(num) {
    var result = 0;
    var str = num.toString();
    for (var i = 0; i < str.length; i++) {
        result += parseInt(str[i]);
    }
    return result;
}

var addDigits = function (num) {
    if (num === 0) {
        return "0 => 0";
    }
    var steps = [num];
    var parts = [];
    while (num >= 10) {
        var str = num.toString();
        var sumParts = [];
        for (var i = 0; i < str.length; i++) {
            sumParts.push(str[i]);
        }
        parts.push(sumParts.join('+'));
        num = digui(num);
        steps.push(num);
    }
    if (steps.length === 1) {
        return `${steps[0]} => ${steps[0]}`;
    }
    var output = steps[0];
    for (var i = 0; i < parts.length; i++) {
        output += ` => ${parts[i]} => ${steps[i + 1]}`;
    }
    return output;
};

console.log(addDigits(9));
console.log(addDigits(23));
console.log(addDigits(2349));
console.log(addDigits(439331));



// 第二题
// function foo(Arr) {
//     var Arr = Arr.sort();
//     var result = [];
//     var obj = {};
//     for (var i = 0; i < Arr.length; i++){
//         if (obj[Arr[i]]) {
//             obj[Arr[i]]++;
//         } else {
//             obj[Arr[i]] = 1;
//         }
//     }
//     for (key in obj) {
//         if (obj[key] != 1) {
//             result.push(key);
//         }
//     }
//     return result;
// }

// console.log(foo([1, 2, 4, 4, 3, 3, 1, 5, 3])); // [1, 3, 4]
// console.log(foo([10, 20, 30]));
// console.log(foo([30, 20, 30, 20, 10, 20, 50, 75, 10]));

// // 第三题
// function getUrlParam(url) {
//     var obj = {};
//     var arr = url.split('?')[1].split('&');
//     for (var i = 0; i < arr.length; i++) {
//         var arr1 = arr[i].split('=');
//         obj[arr1[0]] = arr1[1];
//     }
//     return obj;
// }
// // 有点问题,就是无法处理相同键值的情况,但是一般传递参数的时候不会出现重复的键值对

// console.log(getUrlParam('http://www.nowcoder.com?key1=1&key2=2&key&test=&abc=d'));