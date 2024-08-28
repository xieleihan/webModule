// function replaceString(str, oldStr, newStr) {
//     var newStr = str.replaceAll(oldStr, newStr);


//     return newStr;
// }
// console.log(replaceString("Test World Brave New World", "World", "Web"));

// function diffArray(arr1, arr2) {
//     // 查找 arr1 中不在 arr2 中的元素
//     var diff1 = arr1.filter(function (item) {
//         return !arr2.includes(item);
//     });

//     // 查找 arr2 中不在 arr1 中的元素
//     var diff2 = arr2.filter(function (item) {
//         return !arr1.includes(item);
//     });

//     // 合并两个差异数组
//     var newArr = diff1.concat(diff2);

//     return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// var obj = {
//     icon: "雪佛兰",
//     sn: "Bel Air",
//     year: 1957,
//     color: "red",
//     people: 2,
//     dingbu: false,
//     km: 1021
// }
// console.log(obj);

// var song = {
//     songName: "Love is story",
//     sige: "Talaoy",
//     minter: 3,
//     second: 30,
//     zhuantai: false,
//     play: function () {
//         if (this.zhuantai) {
//             console.log("正在播放" + this.songName + "歌手：" + this.sige);
//         } else {
//             console.log("暂停播放");
//         }
        
//     }
//     ,
//     stop: function () {
//         if (this.zhuantai) {
//             this.zhuantai = false;
//         } else {
//             this.zhuantai = true;
//         }
//     }
// }
// song.play();
// song.stop();
// song.play();

// var nameArr = ["小明", "刘松", "张勇", "孙强", "贺北", "曹丕", "赵维富"]
// var arr = [];
// for (var i = 0; i < 2; i++){
//     var random = Math.floor(Math.random() * nameArr.length);
//     console.log(random);
//     if (arr.indexOf(nameArr[random]) == -1) {
//         arr.push(nameArr[random]);
//     } else {
//         i--;
//     }

// }
// console.log(arr);

// // 生成十六进制
// var random = Math.random().toString(16).substring(2, 8).padEnd(6, '0');
// var str = '#'
// console.log(str += random);

// var str = "我爱中华人民共和国";

// console.log(str.slice(2, 4));

// var str = "abcd123456"
// var arr = str.split("");
// var temp = '';
// for (var i = arr.length-1; i > 0; i--){
//     temp+=arr[i];
// }
// console.log(temp)

// var str = 'C:/Users/Administrator/Desktop/images/dog.png'
// // 获取扩展名
// var ext = str.substring(str.lastIndexOf('.'));
// console.log(ext);

// var str = "abcoefoxyozzopp"

// console.log(str.replaceAll("o", "*"));

// var str = "abcdfgaaa123411156"
// console.log(str.length)
// console.log("0=>" + str.charAt(0), "3=>" + str.charAt(3), "5=>" + str.charAt(5), "9=>" + str.charAt(9))
// function right(x) {
//     if (str.indexOf(x) != -1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log("i=>" + right('i'), "c=>" + right('c'), "b=>" + right('b'));
// console.log("替换所有a为A=>" + str.replaceAll("a", "A"), "替换所有1为一=>" + str.replaceAll("1", "一"))
// console.log("截取下标从1到5的所有字符串=>" + str.slice(1, 5))


// function setFirstLetterUpperCase(word, sentence) {
//     var arr = sentence.split(" ");
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == word) {
//             newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr.join(" ");
// }

// "Apples are round, and Apples are juicy."
// console.log(setFirstLetterUpperCase("apples", "apples are round, and apples are juicy."))


// homework
// 首尾大写,中间小写
// function setFirstLetterUpperCase(temp) {
//     var arr = temp.split(" ");
//     var newArr = '';
//     for (var i = 0; i < arr.length; i++) {
//         if (i == 0 || i == arr.length - 1) {
//             newArr += arr[i].toUpperCase();
//         } else {
//             newArr += arr[i].toLowerCase();
//         }
//     }
// }
// var str = window.prompt("Enter a string: ");
// str.split("")
// var temp = '';
// for (var i = str.length-1; i > 0; i--){
//     temp+=str[i];
// }
// document.write(setFirstLetterUpperCase(temp))


// var str = "abcoefoxyozzopp"
// // 判断次数出现最多的字符,并且统计出现的次数
// var arr = str.split("");
// var count = [];
// for(var i = 0; i < arr.length; i++) {
//     var temp = arr[i];
//     var countIndex = 1;
//     for (var j = i + 1; j < arr.length; j++) {
//         if (temp == arr[j]) {
//             countIndex++;
//         }
//     }
//     count.push([temp, countIndex])
// }
// var maxCount = 0;
// var maxChar = '';
// for (var i = 0; i < count.length; i++) {
//     if (count[i][1] > maxCount) {
//         maxCount = count[i][1];
//         maxChar = count[i][0];
//     }
// }
// console.log("出现最多的字符=>" + "   " + maxChar + " , " + "出现次数=>" + "   " + maxCount);


// var data = new Date();
// console.log(data)
// var str = ''
// if (data.getMonth()+1 < 10) {
//     var month = "0" + (data.getMonth()+1);
// } else {
//     var month = data.getMonth()+1;
// }
// if (data.getDate() < 10) {
//     var date = "0" + data.getDate();
// } else {
//     var date = data.getDate();
// }
// if (data.getHours() < 10) {
//     var hour = "0" + data.getHours();
// }else {
//     var hour = data.getHours();
// }
// if (data.getMinutes() < 10) {
//     var minute = "0" + data.getMinutes();
// } else {
//     var minute = data.getMinutes();
// }
// if (data.getSeconds() < 10) {
//     var second = "0" + data.getSeconds();
// } else {
//     var second = data.getSeconds();
// }
// switch (data.getDay()) {
//     case 0:
//         var day = "星期日";
//         break;
//     case 1:
//         var day = "星期一";
//         break;
//     case 2:
//         var day = "星期二";
//         break;
//     case 3:
//         var day = "星期三";
//         break;
//     case 4:
//         var day = "星期四";
//         break;
//     case 5:
//         var day = "星期五";
//         break;
//     case 6:
//         var day = "星期六";
// }
// str += data.getFullYear() + "年" + month + "月" + date + "日" + " " + hour + ":" + minute + ":" + second + " " + day
// console.log(str)


// var arr = [1500, 1200, 2000, 2100, 1700];
// var newArr = [];
// for (var i = 0; i < arr.length; i++){
//     if (arr[i] <= 1800) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);


// var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];
// for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             arr.splice(j, 1);
//         }
//     }
// }
// console.log(arr);

// var arr = [
//     { name: "jake", score: 92 },
//     { name: "jim", score: 93 },
//     { name: "kate", score: 90 },
//     { name: "filx", score: 91 },
//     { name: "cera", score: 97 }
// ];

// // 遍历数组
// arr.forEach(function (item, index) {
//     console.log("name=>"+item.name+","+"score=>"+item.score, index);
// })
// // 找出分数大于95分的所有数组元素
// arr.map(function (item, index) {
//     if (item.score > 95) {
//         console.log(item.name + " " + item.score);
//     }
// })
// // 将数组中所有数组元素的分数都加100
// arr.map(function (item, index) {
//     item.score += 100;
//     console.log(item.name + " " + item.score);
// })

// 1. 制作一个函数, getDayNum(年, 月, 日), 可以返回指定日期是当前年的第几天
// 比如：
// console.log(getDayNum(2021, 1, 2));    // 输出：2
// console.log(getDayNum(2021, 3, 5));    // 输出：64
// console.log(getDayNum(2021, 5, 12));   // 输出：132
// console.log(getDayNum(2000, 1, 2));   // 输出：2
// console.log(getDayNum(2000, 2, 3));   // 输出：34
// console.log(getDayNum(2000, 3, 3));   // 输出：63

// function getDayNum(year, month, day) {
//     var data = new Date(year, month-1, day);
//     var temp = data.getTime();
//     var temp2 = new Date(year, 0, 0);
//     var temp3 = temp2.getTime();
//     var dayNum = Math.ceil((temp - temp3) / (1000 * 60 * 60 * 24));
//     return dayNum;
// }
// console.log(getDayNum(2021, 1, 2));    // 输出：2
// console.log(getDayNum(2021, 3, 5));    // 输出：64
// console.log(getDayNum(2021, 5, 12));   // 输出：132
// console.log(getDayNum(2000, 1, 2));   // 输出：2
// console.log(getDayNum(2000, 2, 3));   // 输出：34
// console.log(getDayNum(2000, 3, 3));  // 63

// 2. 区分两个数组
// 要求：
// 1. 我们需要写一个函数，比较两个数组，返回一个新的数组。
// 2. 这个新数组需要包含传入的两个数组所有元素中，仅在其中一个数组里出现的元素
// 3. 如果某个元素同时出现在两个数组中，则不应包含在返回的数组里。
// 部分代码：
// function diffArray(arr1, arr2) {
//     // 查找 arr1 中不在 arr2 中的元素
//     var diff1 = arr1.filter(function (item) {
//         return !arr2.includes(item);
//     });

//     // 查找 arr2 中不在 arr1 中的元素
//     var diff2 = arr2.filter(function (item) {
//         return !arr1.includes(item);
//     });

//     // 合并两个差异数组
//     var newArr = diff1.concat(diff2);

//     return newArr;
// }

// function diffArray(arr1, arr2) {
//     var newArr = [];
//     // Check elements in arr1 that are not in arr2
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) === -1) {
//             newArr.push(arr1[i]);
//         }
//     }

//     // Check elements in arr2 that are not in arr1
//     for (var j = 0; j < arr2.length; j++) {
//         if (arr1.indexOf(arr2[j]) === -1) {
//             newArr.push(arr2[j]);
//         }
//     }

//     return newArr;
// }
// // 例子
// var arr1 = [1, 2, 3, 5];
// var arr2 = [1, 2, 3, 4, 5];
// console.log(diffArray(arr1, arr2));// [4]
// var arr3 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];
// var arr4 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
// console.log(diffArray(arr3, arr4));// ["pink wool"]
// var arr5 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
// var arr6 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
// console.log(diffArray(arr5, arr6));// ["pink wool", "diorite"]
// var arr7 = [];
// var arr8 = ["snuffleupagus", "cookie monster", "elmo"];
// console.log(diffArray(arr7, arr8));// ["snuffleupagus", "cookie monster", "elmo"]
// var arr9 = ["andesite", "grass", "dirt", "dead shrub"];
// var arr10 = ["andesite", "grass", "dirt", "dead shrub"];
// console.log(diffArray(arr9, arr10));// []


// 要求：
// 1. 创建deepCopy的方法实现传入一个对象，返回一个新的对象
// 2. 要求新对象与旧对象属性值完全相等，但是两个对象不共享同一块内存
// 3. 可以通过 Array.isArray(值) 判断属性是否是数组

// 部分代码：
// function deepCopy(obj) {
//     if (typeof obj !== 'object') return obj;
//     var newObj = Array.isArray(obj) ? [] : {};

//     for (var key in obj) {
//         // 这里我们直接使用 `for...in` 循环
//         newObj[key] = deepCopy(obj[key]);
//     }

//     return newObj;
// }
// var a = {
//     name: '小明',
//     age: 19,
//     address: '北京',
//     hobby: ['抽烟', '喝酒', '烫头'],
//     data: {
//         friends: ['lee', 'Tom', 'Jane'],
//         mother: '韩梅'
//     }
// };
// var b = deepCopy(a);
// console.log(a, b);
// b.name = '小刚'
// b.data.mother = '秦琪'
// console.log(a, b);
// console.log(a.name, a.data.mother); // '小明' '韩梅'



// function digui(num) {
//     var result = 0;
//     var str = num.toString()
//     console.log(str)
//     for (var i = 0; i < str.length; i++) {
//         console.log(str[i])
//         result += parseInt(str[i]);
//     }
//     return result;
// }


// var addDigits = function(num) {
//     var result = 0;
//     if(num == 0){
//         return result;
//     }
//     var newNum = digui(num);
//     if (newNum < 10) {
//         result = newNum;
//     } else {
//         result = addDigits(newNum);
//     }

//     return result;
// };
// console.log(addDigits(38))


// var gamePerson = function gamePerson() {
//     var HP = 40
//     function getHp() {
//         return HP
//     }
//     function incrementHp() {
//         return ++HP
//     }
//     function decrementHp() {
//         return --HP
//     }
//     return {
//         getHp: getHp,
//         incrementHp: incrementHp,
//         decrementHp: decrementHp
//     }
// }();

// gamePerson.HP // undefined
// console.log(gamePerson.getHp()) // 40
// gamePerson.incrementHp()
// console.log(gamePerson.getHp()) // 41
// gamePerson.decrementHp()
// gamePerson.decrementHp()
// console.log(gamePerson.getHp()) // 39


// 创建一个对象
// 要求：
// 1. 创建一个手机对象
// 2. 要求使用闭包实现一个私有变量systemVersion 保存当前手机系统版本
// 3. 对象包含方法showVersion 打印输出当前手机私有变量systemVersion值
// 4. 对象包含方法runApp, 该方法接受一个参数 app, app值是一个对象包含app名、app支持版本，app内容（一段字符串）
// 4.1 若当前app支持版本高于 systemVersion 输出当前手机不支持此app请更新版本
// 4.2 若当前app支持版本小于等于 systemVersion 输出当前app的内容
// 5. 对象包含updateSystemVersion 方法接受一个参数 version，可以更新当前手机对象私有变量systemVersion值

var phone = (function () {
    var systemVersion = 12;
    
    function showVersion() {
        return systemVersion;
    }
    function runApp(app) {
        return app.version > systemVersion ? `当前手机不支持此app: ${app.name} 请更新版本至 version ${app.version}!` : app.content;
    }
    function updateSystemVersion(version) {
        return systemVersion = version;
    }
    return {
        showVersion: showVersion,
        runApp: runApp,
        updateSystemVersion: updateSystemVersion
    }

})();


// 例子:
console.log(phone.systemVersion);// undefined
console.log(phone.showVersion()); // 输出 12
console.log(phone.runApp({ name: '抖音', version: 13, content: '抖音发现生活' })); // 输出 当前手机不支持此app: 抖音 请更新版本至 version 13!
console.log(phone.updateSystemVersion(17));
console.log(phone.showVersion()) // 输出 17
console.log(phone.runApp({ name: '抖音', version: 13, content: '抖音发现生活' })); // 输出 抖音发现生活
