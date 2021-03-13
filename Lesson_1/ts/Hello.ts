// 
// 通过 tsc 命令进行编译, 生成 Hello.js 文件
// 
let i: number = 1;
var j: string = "hello";
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
let o = {
    userId: 1,
    userName: "HanMeiMei",
    sex: 0,
    age: 18,
};

// console.log("userId = " + o.userId + ", userName = " + o.userName);
// console.log(`userId = ${o.userId}, userName = ${o.userName}`);
// JSON 序列化
let json: string = JSON.stringify(o);
console.log(`user = ${json}`);

// JSON 反序列化
let p = JSON.parse(json);
console.log(`userName = ${p.userName}`);

// 动态添加属性
p.score = 100;
p["level"] = 10;

console.log(`score = ${p["score"]}, level = ${p.level}`);

///////////////////////////////////////////////////////////////////////
// 定义一个类
class Student {
    userId: number;
    userName: string;
    sex: number;
    age: number;
}

// 运行 tsc Hello.ts, 并查看 Hello.js
// 实际上 JavaScript 的类是通过 function 来实现的

///////////////////////////////////////////////////////////////////////
// 继承自 Student
class VipStudent extends Student {
    vipLevel: number;
}

let s = new VipStudent();

// 运行 tsc Hello.ts, 并查看 Hello.js
// 会看到一个 __extends 函数

///////////////////////////////////////////////////////////////////////
// 定义一个函数
function sayHello(): void {
    console.log("Hello, the World!");
}

// 将函数付给一个变量
let handler1 = sayHello;
handler1();

// 设置匿名函数
handler1 = (): void => {
    console.log("Hi");
}

handler1();

let handler2 = (userName: string): void => {
    console.log(`Hi, ${userName}`);
}

handler2("HanMeiMei");

///////////////////////////////////////////////////////////////////////
// 函数式编程
function operator(a: number, b: number, op: (a: number, b: number) => number): number {
    return op(a, b);
}

function add(a: number, b: number) {
    return a + b;
}

console.log("a + b = " + operator(1, 2, add));
console.log("a - b = " + operator(1, 2, (a, b) => a - b));

/////////////////////////////////////////////////////////////////////////////////
// 函数的 bind
function printUserName() {
    console.log("userName = " + this.userName);
}

printUserName();

let liLei = {
    userName: "LiLei",
    sex: 1,
    age: 18,
};

let newFunc = printUserName.bind(liLei);
newFunc();

let hanMeiMei = {
    userName: "HanMeiMei",
    sex: 0,
    age: 18,
};

newFunc = printUserName.bind(hanMeiMei);
newFunc();
