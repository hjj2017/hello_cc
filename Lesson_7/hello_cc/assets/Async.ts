/**
 * 异步转同步类, 
 * 模拟 nodejs 的 async 库
 */
export default class Async {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 第 0 个版本, 顺序执行每个函数
     * 
     * @param oFunArray 函数数组
     * @returns 
     */
//  static seriez_0(oFunArray: Array<Function>): void {
    static seriez_0(oFunArray: Array<() => void>): void {
        if (null == oFunArray || 
            oFunArray.length <= 0) {
            return;
        }

        for (let i = 0; i < oFunArray.length; i++) {
            let funCurr = oFunArray[i];

            if (null != funCurr) {
                funCurr();
            }
        }
    }

    /**
     * 第 1 个版本, 引入一个中间变量来完成
     * 
     * @param oNextStep 下一步
     * @param oFunArray 函数数组
     * @returns 
     */
    static seriez_1(oNextStep: NextStep, oFunArray: Array<() => void>): void {
        if (null == oNextStep || 
            null == oFunArray || 
            oFunArray.length <= 0) {
            return;
        }

        oNextStep.putFunArray(oFunArray);
        oNextStep.doNext();
    }

    /**
     * 第 2 个版本, 将中间变量作为函数参数
     * 
     * @param oFunArray 函数数组
     * @returns 
     */
    static seriez_2(oFunArray: Array<(oNextStep: NextStep) => void>): void {
        if (null == oFunArray || 
            oFunArray.length <= 0) {
            return;
        }

        let oNextStep = new NextStep();

        oNextStep.putFunArray(oFunArray);
        oNextStep.doNext();
    }

    /**
     * 第 2 个版本, 提取出函数, 将函数作为参数
     * 
     * @param oFunArray 函数数组
     * @returns 
     */
    static seriez_3(oFunArray: Array<(funDoNext: () => void) => void>): void {
        if (null == oFunArray || 
            oFunArray.length <= 0) {
            return;
        }

        let funDoNext_redef = (): void => {
            if (null == oFunArray || 
                oFunArray.length <= 0) {
                return;
            }
    
            let funCurr = oFunArray.shift();
    
            if (null != funCurr) {
                funCurr(funDoNext_redef);
            }
        }

        funDoNext_redef();
    }
}

/**
 * 下一步
 */
export class NextStep {
    /**
     * 函数数组
     */
    private _oFunArray: Array<(oNextStep: NextStep) => void> = null;

    /**
     * 设置函数数组
     * 
     * @param oVal 函数数组
     */
    public putFunArray(oVal: Array<(oNextStep: NextStep) => void>): void {
        this._oFunArray = oVal;
    }

    /**
     * 执行下一个函数
     */
    public doNext(): void {
        if (null == this._oFunArray || 
            this._oFunArray.length <= 0) {
            return;
        }

        let funCurr = this._oFunArray.shift();

        if (null != funCurr) {
            funCurr(this);
        }
    }
}
