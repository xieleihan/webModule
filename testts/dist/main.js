var src = 'src';
var dest = 'dest';
console.log(src, dest);
var num;
num = 1;
num = '1';
console.log(num);
var anyType;
anyType = 1;
console.log(anyType);
anyType = '这是一个字符串';
console.log(anyType);
anyType = true;
console.log(anyType);
var div = document.querySelector('body');
console.log(div);
var func = function (username) {
    console.log("你好", username);
};
func("GitHub");
var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
console.log(getRandomNumber(1, 100));
var szy = {
    username: 'szy',
    password: '123456',
};
var szyinfo = function (user) {
    console.log(user, user.username, user.password);
};
console.log(szy);
szyinfo({
    username: 'szy111',
    password: '123456'
});
var str = '1';
var str2 = str;
console.log(str2);
//# sourceMappingURL=main.js.map