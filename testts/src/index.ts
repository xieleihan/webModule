// // 声明ts的变量的类型
// // any, number, string, boolean, void, null, undefined, never, object, array, tuple, enum, unknown
// const src = 'src';
// const dest: string = 'dest';
// console.log(src, dest);
// // number string boolean any
// let num: number | string;
// num = 1;
// num = '1';
// console.log(num);
// // 任意类型
// let anyType: any;
// anyType = 1;
// console.log(anyType);
// anyType = '这是一个字符串';
// console.log(anyType);
// anyType = true;
// console.log(anyType);

// // 也可以操作DOM
// let div = document.querySelector('body');
// console.log(div);

// const func = (username: string) => {
//     console.log("你好", username)
// }
// func("GitHub")

// const getRandomNumber = (min: number, max: number): number => {
//     // 如果是:void,就代表没有返回值
//     return Math.floor(Math.random() * (max - min) + min)
// }
// console.log(getRandomNumber(1, 100));

// interface User {
//     username: string;
//     age?: number; // ?代表可选择
//     password: string;
// }

// let szy: User = {
//     username: 'szy',
//     password: '123456',
//     // address: '北京' // 会报错,字面量没有address属性
//     // age:18 可选

// }

// // 定义函数
// const szyinfo = (user: User): void => {
//     console.log(user, user.username, user.password);
// }
// console.log(szy);
// szyinfo({
//     username: 'szy111',
//     password: '123456'
// });

// var str = '1';
// var str2: number = <number><any>str
// console.log(str2)

// let sex: boolean = true || false;
// let arr: object[] = [{ x: 50, y: 50, color: 'red' }]
// const canvas = document.querySelector('canvas') as HTMLCanvasElement;

// abstract class Car {
//     public brand: string;
//     public price: number;
//     constructor(brand: string, price: number) {
//         this.brand = brand;
//         this.price = price;
//     }
//     public show() {
//         console.log(this.brand, this.price)
//     }
// }

// class aodi extends Car {
//     constructor(brand: string, price: number) {
//         super(brand, price)
//     }
// }

// let aodi1 = new aodi('奥迪', 1000000)
// aodi1.show();

// 使用 TypeScript 实现找到所有可能的跑步方案

// 使用 TypeScript 实现找到所有可能的跑步方案

// 目标圈数常量
let count: number = 0;
const sum: number = 20;

/**
 * 递归查找所有可能的跑步方案
 * @param {number} countSum - 当前已跑的圈数总和
 * @param {number} lastNum - 上一次跑的圈数
 * @param {number[]} lastArray - 当前方案的跑步圈数组
 */
function findway(countSum: number, lastNum: number, lastArray: number[]): void {
    // 如果当前总圈数等于目标圈数，打印方案并计数
    if (countSum === sum && lastArray.length > 1) {
        count++;
        console.log(`${count}: ${lastArray.join('->')}`);
        return;
    }

    // 从上一次跑的圈数加 1 开始，尝试所有可能的圈数，直到达到目标圈数
    for (let i = lastNum + 1; i <= sum - countSum && i > 0; i++) {
        findway(countSum + i, i, lastArray.concat(i));
    }
}

/**
 * 主函数，启动递归查找方案
 */
function main(): void {
    findway(0, 0, []);
    console.log(`${count}种方法`);
}

// 调用主函数
main();