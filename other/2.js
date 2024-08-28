// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
// var letterCombinations = function (digits) {
//     if (!digits.length) return [];
//     // 这道题是微软很多年前的面试题了
//     // 1.首先,我们可以用下数学的方法, 笛卡尔积
//     function compose(arr1, arr2) {
//         // 3.做一个判断
//         if (arr1.length === 0) {
//             return arr2;
//         }
//         if (arr2.length === 0) {
//             return arr1;
//         }

//         // 2.可以看到下面的算法可以实现,但是有问题,就是当有一个数组为空值的时候,会返回一个空
//         const result = [];
//         for (var i = 0; i < arr1.length; i++) {
//             for (var j = 0; j < arr2.length; j++) {
//                 result.push(arr1[i] + arr2[j]);
//             }
//         }
//         return result;
//     }

//     // 4.然后我们现在的话其实是已经做好了一个求笛卡尔积的函数,但是我们得做一个映射关系map
//     // 当我们输入'2',输出来的是'abc',这样类型的才对
//     // 注意,'1'没有东西,做一个稀疏数组
//     const map = [, , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

//     // 5.然后把传进来的的转换成数组
//     // var result = digits.split('').map(it) => map[it]);
//     // 6.组合一下
//     var result = digits
//         .split('')
//         .map((it) => map[it])
//         .reduce((r, it) => compose(r, it), []);

//     // 7.最后单独处理'2'的情况
//     var newArr = Array.isArray(result) ? result : result.split('');
//     return newArr;
// };

// console.log(letterCombinations('2'));

// for (var i = 0; i < 5; i++){
//     // console.log(i); // 0 1 2 3 4
//     // 以下这种呢
//     // setTimeout(function () {
//     //     console.log(i);
//     // }, 1000)
//     // 为什么是五个5呢,因为在1秒内已经循环结束了,i值已经变化了
//     // 那么能不能直接改时间呢,显然不行,因为计时有4ms的误差

//     // 有三种解决方法,一种是闭包 ,一种使用let, 另一种是在延时器传入第三个参数
//     // 1.闭包
//     // (function (i) {
//     //     setTimeout(function () {
//     //         console.log(i);
//     //     }, 1000)
//     // })(i)
//     // 2.使用let
//     // 3.传入第三个参数
//     setTimeout(function (i) {
//         console.log(i);
//     }, 1000, i)
// }

// var obj1 = {
//     a: 1,
//     b: 2
// };

// var obj2 = {
//     num1: 10,
//     num2: 20,
//     id: 5,
//     name: 'zhangsan'
// };

// Object.prototype.print = function () {
//     for (var key in this) {
//         if (this.hasOwnProperty(key)) {
//             console.log("keyName=> " + key +" "+"keyVal=> " + this[key]);
//         }
//     }
// }

// obj1.print();
// obj2.print();

// function Robot(name,year,owner) {
//     this.name = name;
//     this.year = year;
//     this.owner = owner;
// }

// Robot.prototype.makeCoffee = function () {
//     console.log("喝咖啡去星巴克");
// };

// Robot.prototype.cleanHouse = function () {
//     console.log("快速清理房间中...");
// };

// Robot.prototype.maker = "GECRus"
// Robot.prototype.speakWarning = function () {
//     console.warn("Warning! Warning!");
// }

// var robby = new Robot("Robby", 1956, "Dr. Morbius");
// var rosie = new Robot("Rosie", 1962, "Georgina");
// robby.makeCoffee();
// rosie.cleanHouse();
// console.log(robby);
// console.log(rosie);


// function Coffee(roast, ounces) {
//     this.roast = roast;
//     this.ounces = ounces;
//     this.getSize = function () {
//         if (this.ounces == 8) {
//             return "small";
//         }
//         if (this.ounces == 12) {
//             return "middle";
//         }
//         if (this.ounces == 16) {
//             return "large";
//         }
//     }
//     Coffee.prototype.print = function () {
//         return `you're ordered a ${this.getSize()} ${this.roast} coffee.`
//     }
// }

// var houseBlend = new Coffee("House Blend", 12);
// console.log(houseBlend.print());

// var darkRoast = new Coffee("Dark Roast", 16);
// console.log(darkRoast.print());

// function User(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getfullName = this.firstName + this.lastName;

// }

// var obj = {};
// User.call(obj, 'li', 'si');
// console.log(obj.getfullName);


// var user2 = Function.prototype.call.call(User, 'li', 'si')
// console.log(user2.getfullName);
// function createUserWithCall(firstName, lastName) {
//     const obj = {};
//     User.call(obj, firstName, lastName);
//     return obj;
// }
// var user1 = createUserWithCall('zhang', 'san');
// console.log(user1.getfullName); // 输出: zhangsan
// var obj = {};
// console.log(obj === new Object());
// var arr = [];
// console.log(arr === new Array());
// console.log(new Object());


// var arr1 = [10, 20, 30];
// var arr2 = {
//     0: 10,
//     1: 20,
//     2: 30,
//     length: 3
// };

// // 第一种方法 isArray
// console.log(Array.isArray(arr1));
// console.log(Array.isArray(arr2));

// // 第二种方法 Object.prototype.constructor
// console.log(arr1.constructor === Array);
// console.log(arr2.constructor === Array);

// // 第三种方法 instanceof
// console.log(arr1 instanceof Array);
// console.log(arr2 instanceof Array);

// // 第四种方法
// console.log(Object.prototype.toString.call(arr1) === '[object Array]');
// console.log(Object.prototype.toString.call(arr2) === '[object Array]');


// var reg = /a/
// console.log(reg.test('abc'));

// var reg1 = /abc/
// console.log(reg1.test("a1234abc56"));

// var reg2 = /[a-z0-9A-Z]/
// console.log(reg2.test("zhangsan456789"));

var str = 'abcoefoxyozzopp';
// 使用正则找出字符串中出现最多的字符和出现的次数
var reg = /[a-z]/g;
var arr = str.match(reg);
console.log(arr);
var obj = {};
for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]]++;
    } else {
        obj[arr[i]] = 1;
    }
}
var max = 0;
var maxKey = '';
for (var key in obj) {
    if (obj[key] > max) {
        max = obj[key];
        maxKey = key;
    }
}
console.log(maxKey, max);

// var LYRIC = "[00:04.050]\n[00:12.570]难以忘记初次见你\n[00:16.860]一双迷人的眼睛\n[00:21.460]在我脑海里\n[00:23.960]你的身影 挥散不去\n[00:30.160]握你的双手感觉你的温柔\n[00:34.940]真的有点透不过气\n[00:39.680]你的天真 我想珍惜\n[00:43.880]看到你受委屈 我会伤心\n[00:48.180]喔\n[00:50.340]只怕我自己会爱上你\n[00:55.070]不敢让自己靠的太近\n[00:59.550]怕我没什么能够给你\n[01:04.030]爱你也需要很大的勇气\n[01:08.190]只怕我自己会爱上你\n[01:12.910]也许有天会情不自禁\n[01:17.380]想念只让自己苦了自己\n[01:21.840]爱上你是我情非得已\n[01:28.810]难以忘记初次见你\n[01:33.170]一双迷人的眼睛\n[01:37.700]在我脑海里 你的身影 挥散不去\n[01:46.360]握你的双手感觉你的温柔\n[01:51.120]真的有点透不过气\n[01:55.910]你的天真 我想珍惜\n[02:00.150]看到你受委屈 我会伤心\n[02:04.490]喔\n[02:06.540]只怕我自己会爱上你\n[02:11.240]不敢让自己靠的太近\n[02:15.750]怕我没什么能够给你\n[02:20.200]爱你也需要很大的勇气\n[02:24.570]只怕我自己会爱上你\n[02:29.230]也许有天会情不自禁\n[02:33.680]想念只让自己苦了自己\n[02:38.140]爱上你是我情非得已\n[03:04.060]什么原因 耶\n[03:07.730]我竟然又会遇见你\n[03:13.020]我真的真的不愿意\n[03:16.630]就这样陷入爱的陷阱\n[03:20.700]喔\n[03:22.910]只怕我自己会爱上你\n[03:27.570]不敢让自己靠的太近\n[03:32.040]怕我没什么能够给你\n[03:36.560]爱你也需要很大的勇气\n[03:40.740]只怕我自己会爱上你\n[03:45.460]也许有天会情不自禁\n[03:49.990]想念只让自己苦了自己\n[03:54.510]爱上你是我情非得已\n[03:58.970]爱上你是我情非得已\n[04:03.000]\n";

// var reg = /\[(\d{2}:\d{2}.\d{3})\](.*)/g;
// var arr = LYRIC.match(reg);
// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//     newStr += arr[i].substring(11);
//     console.log(newStr);
//     arr[i] = arr[i].slice(1, -1);
//     arr[i] = arr[i].substring(1, 8);
//     var sec;
//     var str = '';
//     var newStr = '';
//     sec = parseInt(arr[i].substring(0, 1)) * 60;
//     // console.log(sec);
//     sec += parseInt(arr[i].substring(2, 4));
//     str += sec + '.' + arr[i].substring(5, 8);
//     // console.log(arr[i]);
//     console.log(str);
    
// }