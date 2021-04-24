// @const
const { ccclass, property } = cc._decorator;
const G = 9.8;
const PLAY_SPEED = 10;

/**
 * Hello 场景
 */
@ccclass
export default class Hello extends cc.Component {
    /**
     * Label
     */
    //@property({ type: cc.Label, displayName: "Label", visible: true, tooltip: "测试标签", })
    _oLabel: cc.Label = null;

    /**
     * 文本
     */
    //@property({ displayName: "Text", visible: true, tooltip: "测试文本", })
    _strText: string = "";

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
     * onLoad
     */
    onLoad(): void {
    }

    /**
     * start
     */
    start(): void {
        let oNode: cc.Node = cc.find("Canvas/HelloLabel");
        this._oLabel = oNode.getComponent(cc.Label);

        if (null != this._oLabel) {
            this._oLabel.string = "Hello, HanMeiMei";
        }

        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            this._bAction = !this._bAction;

            this._nA = 60;
            this._nV0 = 80;

            this._nVx = Math.cos(this._nA / 180 * Math.PI) * this._nV0;
            this._nVy = Math.sin(this._nA / 180 * Math.PI) * this._nV0;
            this._nT = 0;
        });
    }

    /**
     * update
     * 
     * @param nDeltaTime 变化时间, 单位时间 = 秒
     */
    update(nDeltaTime: number): void {
        if (!this._bAction) {
            return;
        }

        nDeltaTime = nDeltaTime * PLAY_SPEED;
        this._nT += nDeltaTime;

        if (this._oLabel.node.x >= 480) {
            this._nDirectionX = -this._nDirectionX;
        }

        this._oLabel.node.x += this._nVx * this._nDirectionX * nDeltaTime;
        this._oLabel.node.y += (this._nVy - (G * this._nT)) * nDeltaTime;
    }
}
