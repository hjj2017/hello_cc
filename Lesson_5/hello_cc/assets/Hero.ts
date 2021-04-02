// @import
import MyHeroFactory from "./MyHeroFactory";

// @const
const { ccclass } = cc._decorator;

/**
 * Hero 场景
 */
@ccclass
export default class Hero extends cc.Component {
    /**
     * 英雄节点
     */
    _oHeroNode: cc.Node;

    /**
     * 活动
     */
    _bAction: boolean = false;

    /**
     * 目标位置
     */
    _oTargetPos: { x: number, y: number } = null;

    /**
     * 方向
     */
    _nDirectionX: 1 | -1 = 1;

    /**
     * onLoad
     */
    onLoad(): void {
    }

    /**
     * start
     */
    start(): void {
        MyHeroFactory.createAsync("Hero_Hammer", (oHeroNode: cc.Node) => {
            if (null == oHeroNode) {
                cc.error("创建英雄失败!");
                return;
            }

            this._oHeroNode = oHeroNode;
            cc.find("Canvas").addChild(this._oHeroNode);
        });

        this.node.on(cc.Node.EventType.TOUCH_END, (oEvent: cc.Event.EventTouch) => {
            this._bAction = true;

            this._oTargetPos = this.node.convertToNodeSpaceAR(cc.v2(
                oEvent.getLocationX(),
                oEvent.getLocationY()
            ));

            if (this._oTargetPos.x > this._oHeroNode.x) {
                this._nDirectionX = 1;
            } else {
                this._nDirectionX = -1;
            }

            this._oHeroNode.getComponent(dragonBones.ArmatureDisplay).playAnimation("Run", 0);
        });
    }

    /**
     * update
     * 
     * @param nDeltaTime 变化时间, 单位时间 = 秒
     */
    update(nDeltaTime: number): void {
        if (null == this._oHeroNode || 
            !this._bAction) {
            return;
        }

        // this._oHeroNode.x += 2;

        if (this._oHeroNode.x <= this._oTargetPos.x && 
            1 == this._nDirectionX) {
            this._oHeroNode.scaleX = 1;
            this._oHeroNode.x += 2;
        }

        if (this._oHeroNode.x > this._oTargetPos.x && 
            -1 == this._nDirectionX) {
            this._oHeroNode.scaleX = -1;
            this._oHeroNode.x -= 2;
        }

        if (1 == this._nDirectionX && 
            this._oHeroNode.x >= this._oTargetPos.x) {
            this._bAction = false;
        }

        if (-1 == this._nDirectionX && 
            this._oHeroNode.x <= this._oTargetPos.x) {
            this._bAction = false;
        }

        if (!this._bAction) {
            this._oHeroNode.getComponent(dragonBones.ArmatureDisplay).playAnimation("Stand", 0);
        }
    }
}
