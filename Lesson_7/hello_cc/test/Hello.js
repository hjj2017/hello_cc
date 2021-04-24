var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var i = 0;
var j = "hello";
console.log("i = " + i);
console.log("j = " + j);
if (i == 0) {
    var k = 1;
}
console.log("k = " + k);
var C = 100;
var o = {
    userId: 1,
    userName: "HanMeiMei",
    sex: 0,
    age: 18
};
console.log("userId = " + o.userId + ", userName = " + o.userName);
console.log("user = " + JSON.stringify(o));
var json = JSON.stringify(o);
var p = JSON.parse(json);
console.log("userName = " + p.userName);
p.score = 100;
p["level"] = 10;
console.log("score = " + p["score"] + ", level = " + p.level);
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var VipStudent = /** @class */ (function (_super) {
    __extends(VipStudent, _super);
    function VipStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VipStudent;
}(Student));
var s = new VipStudent();
function sayHello() {
    console.log("Hello, the World!");
}
var handler1 = sayHello;
handler1();
handler1 = function () {
    console.log("Hi");
};
handler1();
var handler2 = function (userName) {
    console.log("Hi, " + userName);
};
handler2("HanMeiMei");
var add = function (a, b) {
    return a + b;
};
add(1, 2);
function operator(a, b, f) {
    // 关于 a 和 b 的逻辑
    var newVal = f(a, b);
    // 关于 newVal 执行逻辑
    return newVal;
}
console.log("a + b = " + operator(1, 2, add));
console.log("a - b = " + operator(1, 2, function (a, b) { return a - b; }));
function printUserName() {
    console.log("userName = " + this.userName);
}
printUserName();
var newFunc = printUserName.bind(o);
newFunc();
var u = {
    userName: "LiLei"
};
newFunc = printUserName.bind(u);
newFunc();
