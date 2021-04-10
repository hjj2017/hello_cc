let i: number = 0;
var j: string = "hello";

console.log("i = " + i);
console.log("j = " + j);

if (i == 0) {
    var k = 1;
}

console.log("k = " + k);

const C = 100;

let o = {
    userId: 1,
    userName: "HanMeiMei",
    sex: 0,
    age: 18,
};

console.log(`userId = ${o.userId}, userName = ${o.userName}`);
console.log(`user = ${JSON.stringify(o)}`);

let json: string = JSON.stringify(o);
let p = JSON.parse(json);

console.log("userName = " + p.userName);

p.score = 100;
p["level"] = 10;

console.log(`score = ${p["score"]}, level = ${p.level}`);

class Student {
    userId: number;
    userName: string;
    sex: number;
    age: number;
}

class VipStudent extends Student {
    vipLevel: number;
}

interface IBehaviour {
    doSomthing(): void;
}

let s = new VipStudent();


function sayHello(): void {
    console.log("Hello, the World!");
}

let handler1 = sayHello;
handler1();

handler1 = (): void => {
    console.log("Hi");
}
handler1();

let handler2 = (userName: string): void => {
    console.log(`Hi, ${userName}`);
}

handler2("HanMeiMei");

let add = (a: number, b: number): number => {
    return a + b;
}

add(1, 2);

function operator(a: number, b: number, f: (a: number, b: number) => number): number {
    // 关于 a 和 b 的逻辑

    let newVal = f(a, b);

    // 关于 newVal 执行逻辑

    return newVal;
}

console.log("a + b = " + operator(1, 2, add));
console.log("a - b = " + operator(1, 2, (a, b) => a - b));


function printUserName() {
    console.log("userName = " + this.userName);
}

printUserName();

let newFunc = printUserName.bind(o);
newFunc();

let u = {
    userName: "LiLei",
};

newFunc = printUserName.bind(u);
newFunc();
