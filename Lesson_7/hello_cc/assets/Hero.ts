// @import
import MsgBus from "./MsgBus";
import MyHeroComp from "./MyHeroComp";
import MyHeroFactory from "./MyHeroFactory";
import mod_GameMsgProtocol = require("./msg/GameMsgProtocol");

// @const
const { ccclass } = cc._decorator;

/**
 * Hero 场景
 */
@ccclass
export default class Hero extends cc.Component {
    /**
     * 英雄组件
     */
    _oMyHeroComp: MyHeroComp

    /**
     * onLoad
     */
    onLoad(): void {
        MsgBus.getInstance().connect();
    }

    /**
     * start
     */
    start(): void {
        cc.find("Canvas/BG").zIndex = -4096;

        cc.director.getCollisionManager().enabled = true;

        MyHeroFactory.createAsync("Hero_Hammer", (oHeroNode: cc.Node) => {
            if (null == oHeroNode) {
                cc.error("创建英雄失败!");
                return;
            }

            this._oMyHeroComp = oHeroNode.getComponent(MyHeroComp);
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

        this.node.on(cc.Node.EventType.MOUSE_UP, (oEvent: cc.Event.EventTouch) => {
            if (null == this._oMyHeroComp) {
                return;
            }

            switch (oEvent["getButton"]()) {
                case 0: {
                    // 攻击
                    this._oMyHeroComp.doAttk();
                    break;
                }

                case 2: {
                    // 移动
                    let oPos = this.node.convertToNodeSpaceAR(cc.v2(
                        oEvent.getLocationX(),
                        oEvent.getLocationY()
                    ));
        
                    this._oMyHeroComp.moveTo(oPos.x, oPos.y);
                    break;
                }
            }
        });

        this.scheduleOnce(() => {
            MsgBus.getInstance().sendMsg(
                mod_GameMsgProtocol.msg.MsgCode.USER_ENTRY_CMD,
                mod_GameMsgProtocol.msg.UserEntryCmd.create({
                    userId: 1001,
                    heroAvatar: "Hero_Hammer",
                })
            );
        }, 0.5);
    }

    /**
     * update
     * 
     * @param nDeltaTime 变化时间, 单位时间 = 秒
     */
    update(nDeltaTime: number): void {
    }

    /**
     * 最后更新
     */
    lateUpdate(): void {
        if (null == this._oMyHeroComp) {
            return;
        }

        // 让场景中的主摄像机跟随英雄
        let oMainCamera = cc.Camera.main.node;
        oMainCamera.x = this._oMyHeroComp.node.x;
        oMainCamera.y = this._oMyHeroComp.node.y;
    }
}
