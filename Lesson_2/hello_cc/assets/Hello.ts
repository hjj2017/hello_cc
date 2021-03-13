//
// Hello.ts
// 
const { ccclass, property } = cc._decorator;

// 播放速度
const PLAY_SPEED: number = 10;
const G: number = 9.8;

/**
 * Hello
 */
@ccclass
export default class Hello extends cc.Component {
    /**
     * 标记
     */
    @property({type: cc.Label, displayName: "Label", visible: true, tooltip: "测试标签", })
    _oLabel: cc.Label = null;

    /**
     * 文本
     */
    @property
    _strText: string = "hello";

    /**
     * 活动
     */
    _bAction: boolean = false;
 
    /**
     * 初始角度
     */
    _nA: number = 0;

    /**
     * 初始速度
     */
    _nV0: number = 0;

    /**
     * X 轴速度
     */
    _nVx: number = 0;

    /**
     * Y 轴速度
     */
    _nVy: number = 0;

    /**
     * 走过的时间
     */
    _nT: number = 0;

    /**
     * X 方向
     */
    _nDirectionX: number = 1;

    /**
     * 当代码加载完成后调用
     */
    onLoad(): void {
        //console.log("onLoad");
    }

    /**
     * 第一次激活时调用
     */
    start(): void {
        //console.log("start");
        //this._oLabel.string = "Hello, " + this._strText;

        // 如果不想通过拖拽的方式给一个变量赋值,
        // 就可以用 cc.find 函数来查找节点,
        // 并且可以通过 getComponent 来获得相关组件...
        this._oLabel = cc.find("Canvas/HelloLabel").getComponent(cc.Label);

        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            this._bAction = !this._bAction;

            // 初始角度 60 度, 初始速度 80
            this._nA = 60;
            this._nV0 = 80;

            // 计算 X 轴和 Y 轴上的速度, 
            // XXX 注意: 这里要转化为弧度值来计算...
            this._nVx = this._nV0 * Math.cos(this._nA / 180 * Math.PI);
            this._nVy = this._nV0 * Math.sin(this._nA / 180 * Math.PI);
            // 走过的时间 = 0
            this._nT = 0;
        });
    }

    /**
     * 每一帧更新时调用
     * 
     * @param nDeltaTime 变化时间, 单位 = 秒
     */
    update(nDeltaTime: number): void {
        //console.log("update");
        if (null == this._oLabel || 
            !this._bAction) {
            return;
        }

        if ((this._oLabel.node.x >= +480 && this._nDirectionX > 0) || 
            (this._oLabel.node.x <= -480 && this._nDirectionX < 0)) {
             this._nDirectionX = -this._nDirectionX;
        }

        nDeltaTime = nDeltaTime * PLAY_SPEED;
        this._nT += nDeltaTime;

        this._oLabel.node.x += this._nDirectionX * this._nVx * nDeltaTime;
        this._oLabel.node.y += (this._nVy - (G * this._nT)) * nDeltaTime;
    }
}
