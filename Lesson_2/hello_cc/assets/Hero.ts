//
// Hero.ts
// 
const { ccclass, } = cc._decorator;

/**
 * Hero
 */
@ccclass
export default class Hero extends cc.Component {
    /**
     * 英雄节点
     */
    _oHeroNode: cc.Node;

    /**
     * 是否行动
     */
    _bAction: boolean = false;

    /**
     * 目标位置
     */
    _oTargetPos: { x: number, y: number, } = null;

    /**
     * 方向, 
     * 这里定义了一个方向对象, 有 x 和 y 两个属性.
     * x 和 y 本应该定义为 number 类型, 
     * 但是 TypeScript 语言太强大了, 可以临时定义个 -1 | 1 的类型...
     * 
     * 也就是说: 
     * x 要么是 -1 要么是 1
     * y 也一样, 要么是 -1 要么是 1
     */
    _oDirection: { x: -1 | 1, y: -1 | 1, } = { x: -1, y: -1 };

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
        this._oHeroNode = cc.find("Canvas/Hero_Hammer");

        this.node.on(cc.Node.EventType.TOUCH_END, (oEvent: cc.Event.EventTouch) => {
            /*
            // 可以先试试通过点击控制人物单方向移动和停止的情况...
            // 反转行动标志
            this._bAction = !this._bAction;

            // 默认为站立动画
            let strAnimName = "Hero_Hammer-Stand";

            if (this._bAction) {
                this._oTargetPos = this.node.convertToNodeSpaceAR(cc.v2(
                    oEvent.getLocationX(), 
                    oEvent.getLocationY()
                ));

                strAnimName = "Hero_Hammer-Run";
            }

            this._oHeroNode.getComponent(cc.Animation).play(strAnimName);
            */

            this._bAction = true;
            let strAnimName = "Hero_Hammer-Run";

            this._oTargetPos = this.node.convertToNodeSpaceAR(cc.v2(
                oEvent.getLocationX(), 
                oEvent.getLocationY()
            ));

            if (this._oHeroNode.x > this._oTargetPos.x) {
                this._oDirection.x = -1;
            } else {
                this._oDirection.x = 1;
            }

            this._oHeroNode.getComponent(cc.Animation).play(strAnimName);
            this._oHeroNode.scaleX = this._oDirection.x;
        });
    }

    /**
     * 每一帧更新时调用
     * 
     * @param nDeltaTime 变化时间, 单位 = 秒
     */
    update(nDeltaTime: number): void {
        if (!this._bAction) {
            return;
        }

        //this._oHeroNode.x += 4;

        if (this._oHeroNode.x <= this._oTargetPos.x && 
            1 == this._oDirection.x) { // 如果不加方向判断, 那么就会导致人物停不住的 Bug
            this._oHeroNode.x += 4;
        }

        if (this._oHeroNode.x >= this._oTargetPos.x && 
            -1 == this._oDirection.x) { // 如果不加方向判断, 那么就会导致人物停不住的 Bug
            this._oHeroNode.x -= 4;
        }

        // 仅仅判断是否走过目标点是不够的,
        // 必须还要判断方向!
        // 方向这个概念在移动逻辑里是非常重要的...
        if (this._oHeroNode.x <= this._oTargetPos.x && 
            -1 == this._oDirection.x) {
            this._bAction = false;
        }
        else
        if (this._oHeroNode.x >= this._oTargetPos.x && 
            1 == this._oDirection.x) {
            this._bAction = false;
        }

        if (!this._bAction) {
            this._oHeroNode.getComponent(cc.Animation).play("Hero_Hammer-Stand");
        }
    }
}
