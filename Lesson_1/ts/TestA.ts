//
// export 示例
// 
// 定义一个全局的 name 变量, 
// 如果不加 export,
// 那么在其它 .ts 文件中是无法访问到的
let g_strName = "Haijiang";
// 试试下面这样:
//export g_strName = "Haijiang";

// 一个要导出的类,
// 在其它 .ts 文件中可以通过 import 关键字来导入
export class TestA {
    sayHello(): void {
        console.log("Hello");
    }
}

