// @const
const { ccclass, property } = cc._decorator;

/**
 * Hello 场景
 */
@ccclass
export default class Hello extends cc.Component {
    /**
     * Label
     */
    @property({ type: cc.Label, displayName: "Label", visible: true, tooltip: "测试标签", })
    _oLabel: cc.Label = null;

    /**
     * 文本
     */
    @property({ type: cc.String, displayName: "Text", visible: true, tooltip: "测试文本", })
    _strText: string = "";

    /**
     * onLoad,
     * 在代码加载完成时调用
     */
    onLoad(): void {
    }

    /**
     * start,
     * 在 Node 第一次被激活时调用
     */
    start(): void {
        if (null != this._oLabel) {
            this._oLabel.string = "Hello, " + this._strText;
        }
    }

    /**
     * update,
     * 每一帧更新时调用
     * 
     * @param nDeltaTime 变化时间, 单位 = 毫秒
     */
    update(nDeltaTime: number): void {
        if (null == this._oLabel) {
            return;
        }

        // 令 Label 节点产生位移动画
        this._oLabel.node.x++;
    }
}
