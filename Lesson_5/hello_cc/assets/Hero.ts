// @import
import Async, { NextStep } from "./Async";
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
        let i: number;

        // 第 0 个版本
        ////////////////
        i = 0;
        Async.seriez_0([
            () => {
                i++;
                console.log("这是第一个函数, i = " + i);

                cc.resources.load("Test", (_, oAssetz) => {
                    // 我们可以看到,
                    // oAssetz = Hello 这句话还没有打印出来,
                    // 第二个函数就被执行完了...
                    cc.log("oAssetz = " + oAssetz);
                });
            },

            () => {
                i++;
                console.log("这是第二个函数, i = " + i);
            },

            () => {
                i++;
                console.log("这是第三个函数, i = " + i);
            }
        ]);

        // 第 1 个版本
        ////////////////
        let oNextStep = new NextStep();
        i = 0;
        Async.seriez_1(oNextStep, [
            () => {
                i++;
                console.log("这是第一个函数, i = " + i);

                cc.resources.load("Test", (_, oAssetz) => {
                    // 我们可以看到,
                    // oAssetz = Hello 这句话打印完成之后,
                    // 第二个函数才被执行...
                    cc.log("oAssetz = " + oAssetz);
                    oNextStep.doNext();
                });
            },

            () => {
                i++;
                console.log("这是第二个函数, i = " + i);
                oNextStep.doNext();
            },

            () => {
                i++;
                console.log("这是第三个函数, i = " + i);
            }
        ]);

        // 第 2 个版本
        ////////////////
        i = 0;
        Async.seriez_2([
            (oNextStep) => {
                i++;
                console.log("这是第一个函数, i = " + i);

                cc.resources.load("Test", (_, oAssetz) => {
                    cc.log("oAssetz = " + oAssetz);
                    oNextStep.doNext();
                });
            },

            (oNextStep) => {
                i++;
                console.log("这是第二个函数, i = " + i);
                oNextStep.doNext();
            },

            (oNextStep) => {
                i++;
                console.log("这是第三个函数, i = " + i);
            }
        ]);

        // 第 3 个版本
        ////////////////
        i = 0;
        Async.seriez_3([
            (funDoNext) => {
                i++;
                console.log("这是第一个函数, i = " + i);

                cc.resources.load("Test", (_, oAssetz) => {
                    cc.log("oAssetz = " + oAssetz);
                    funDoNext();
                });
            },

            (funDoNext) => {
                i++;
                console.log("这是第二个函数, i = " + i);
                funDoNext();
            },

            (funDoNext) => {
                i++;
                console.log("这是第三个函数, i = " + i);
            }
        ]);
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
            cc.find("Canvas").addChild(oHeroNode);
        });

        MyHeroFactory.createAsync("Hero_Skeleton", (oHeroNode: cc.Node) => {
            if (null == oHeroNode) {
                cc.error("创建英雄失败!");
                return;
            }

            //this._oHeroNode = oHeroNode;
            cc.find("Canvas").addChild(oHeroNode);
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
