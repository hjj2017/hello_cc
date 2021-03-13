import { TestA } from "./TestA";
// 在 TestA.ts 如果导出 g_strName,
// 那么就需要写成下面这样:
//import { TestA, g_strName } from "./TestA";
//console.log(g_strName);

new TestA().sayHello();
