var inputPassword = document.querySelector("#inputPassword");
var queryPassword = document.querySelector("#queryPassword");
// console.log(inputPassword, queryPassword); // 获取元素
let str = "";
inputPassword.addEventListener("input", () => {
    str = '';
    str = inputPassword.value;
});
queryPassword.addEventListener("input", () => {
    let arr = str.split('');
    console.log(arr);
    let queryArr = queryPassword.value.split('');
    for (let i = 0; i < queryArr.length; i++) {
        if (arr[i] === queryArr[i]) {
            console.log('输入正确');

        } else {
            console.log('输入错误');
        }
    }
});