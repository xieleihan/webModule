// 第一个,forEach()
var arr = [1, 2, 3, 4, 5];
arr.forEach((item,index) => {
    console.log({item,index});
})

// 第二个是映射map()
var newArr = arr.map((item) => {
    return item * 2;
})
console.log(newArr);

// 可以直接使用映射做一点操作
let obj = [
    {
        name: 'a',
        age: 18,
        sex: 'm'
    },
    {
        name: 'b',
        age: 19,
        sex: 'f'
    },
    {
        name: 'c',
        age: 16,
        sex: 'm'
    }
];
let newObj = obj.map((item) => {
    if (item.age >= 18) {
        item.age = '成年';
    } else {
        item.age = '未成年';
    }
    return item;
})
console.log(newObj);

// 第三个是过滤 filter()
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArr = arr.filter((item) => {
    if (item % 2 === 0) {
        return item;
    }
});
// 过滤那些奇数的
console.log(newArr);

// 第四个是 累加计算 reduce()
var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce((prev, next) => {
    return prev + next;
})
console.log(sum); // 15

// 再来两个常用的方法 Set() 和 Map()
// 1. Set() 用于数组去重 提供对数组进行添加和删除等方法
// ES5中的去重
var arr = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'f'];
var newArr = [];
arr.forEach((item => {
    if (newArr.indexOf(item) === -1) {
        newArr.push(item);
    }
}));
console.log(newArr);
// 也可以使用对象的方式
var arrObj = {};
var newArr = [];
arr.forEach(item => {
    if (arrObj[item] === undefined) {
        arrObj[item] = 1;
        newArr.push(item);
    }
})
console.log(newArr);
console.log(typeof new Set()); // object
console.dir(new Set());
// ES6的去重 Set() 名:集合  需要new一个实例
var newArr = [... new Set(arr)];
console.log(newArr);

// Set()自带一点方法
// Set.prototype.add();
newArr = [... new Set(arr).add('g')];
console.log(newArr);
// Set.prototype.delete();
var xiugai = new Set(arr);
xiugai.delete('a');
console.log(xiugai);

// Set.prototype.has(); 判断集合中是否存在这个数据  return是个boolean
console.log(xiugai.has('b')); // true
console.log(xiugai.has('a')); // false

// Map() 操作对象
var mapObj = new Map();
mapObj.set('name', 'zhangsan');
mapObj.set('age', 18);
console.log(mapObj);
console.log(mapObj.get('name'));
console.log(mapObj.get('age'));