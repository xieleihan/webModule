// ES6 关于类(class) :主要作用消除函数二义性
// 示例
class Students {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    show() {
        console.log("姓名:" + this.name + " 性别:" + this.sex + " 年龄:" + this.age);
    }
}

// 继承 方法会被继承
class Teacher extends Students {
    constructor(name, sex, age) {
        super(name, sex, age);
    }
}

var students1 = new Students("张三", "男", 20);
students1.show(); //姓名:张三 性别:男 年龄:20

var teacher1 = new Teacher("李四", "女", 30);
teacher1.show(); //姓名:李四 性别:女 年龄:30