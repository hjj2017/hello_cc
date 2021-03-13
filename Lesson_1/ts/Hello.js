var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var i = 1;
var j = "hello";
// 可以用 let 或者 var 来定义变量,
// 但是最好不要用 var!
console.log("i = " + i);
console.log("j = " + i);
// 运行 tsc Hello.ts, 并查看 Hello.js
///////////////////////////////////////////////////////////////////////
// 为什么不要用 var 来定义变量,
// 下面举个例子
if (i == 0) {
    var k = 1;
}
// 按说 k 应该已经超出作用域了,
// 但是竟然还可以使用...
console.log("k = " + k);
///////////////////////////////////////////////////////////////////////
// 定义一个对象
var o = {
    userId: 1,
    userName: "HanMeiMei",
    sex: 0,
    age: 18
};
// console.log("userId = " + o.userId + ", userName = " + o.userName);
// console.log(`userId = ${o.userId}, userName = ${o.userName}`);
// JSON 序列化
var json = JSON.stringify(o);
console.log("user = " + json);
// JSON 反序列化
var p = JSON.parse(json);
console.log("userName = " + p.userName);
// 动态添加属性
p.score = 100;
p["level"] = 10;
console.log("score = " + p["score"] + ", level = " + p.level);
///////////////////////////////////////////////////////////////////////
// 定义一个类
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
// 运行 tsc Hello.ts, 并查看 Hello.js
// 实际上 JavaScript 的类是通过 function 来实现的
///////////////////////////////////////////////////////////////////////
// 继承自 Student
var VipStudent = /** @class */ (function (_super) {
    __extends(VipStudent, _super);
    function VipStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VipStudent;
}(Student));
var s = new VipStudent();
// 运行 tsc Hello.ts, 并查看 Hello.js
// 会看到一个 __extends 函数
///////////////////////////////////////////////////////////////////////
// 定义一个函数
function sayHello() {
    console.log("Hello, the World!");
}
// 将函数付给一个变量
var handler1 = sayHello;
handler1();
// 设置匿名函数
handler1 = function () {
    console.log("Hi");
};
handler1();
var handler2 = function (userName) {
    console.log("Hi, " + userName);
};
handler2("HanMeiMei");
///////////////////////////////////////////////////////////////////////
// 函数式编程
function operator(a, b, op) {
    return op(a, b);
}
function add(a, b) {
    return a + b;
}
console.log("a + b = " + operator(1, 2, add));
console.log("a - b = " + operator(1, 2, function (a, b) { return a - b; }));
/////////////////////////////////////////////////////////////////////////////////
// 函数的 bind
function printUserName() {
    console.log("userName = " + this.userName);
}
printUserName();
var liLei = {
    userName: "LiLei",
    sex: 1,
    age: 18
};
var newFunc = printUserName.bind(liLei);
newFunc();
var hanMeiMei = {
    userName: "HanMeiMei",
    sex: 0,
    age: 18
};
newFunc = printUserName.bind(hanMeiMei);
newFunc();
