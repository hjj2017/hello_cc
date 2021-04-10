const { ccclass } = cc._decorator;

/**
 * 自定义英雄组件
 */
@ccclass
export default class MyHeroComp extends cc.Component {
    /**
     * 当前血量
     */
    _currHP: number = 100;

    /**
     * 目标位置
     */
    _oMoveToPos: { _nX: number, _nY: number } = null;
 
    /**
     * 移动方向
     */
    _oMoveDirection: { _nX: -1 | 0 | 1, _nY: -1 | 0 | 1 } = { _nX: 0, _nY: 0 };

    /**
     * 可攻击目标对象集合
     */
    _oAttkableObjSet: Set<cc.Node> = null;

    /**
     * 代码加载时调用, 
     * 不管节点有没有激活都调用
     */
    onLoad(): void {
    }

    /**
     * 节点在激活的时候调用, 
     * 只调用一次
     */
    start(): void {
    }

    /**
     * 逐帧调用的
     * 
     * @param nDeltaTime 变化时间, 这一帧相对于上一帧的变化时间
     */
    update(nDeltaTime: number): void {
        this.moveTo_onUpdate(nDeltaTime);
    }

    /**
     * 移动到指定位置
     * 
     * @param nPosX 指定位置 X
     * @param nPosY 指定位置 Y
     */
    moveTo(nPosX: number, nPosY: number): void {
        this._oMoveToPos = {
            _nX: nPosX,
            _nY: nPosY,
        };

        this._oMoveDirection._nX = (this.node.x > this._oMoveToPos._nX) ? -1 : 1;
        this._oMoveDirection._nY = (this.node.y > this._oMoveToPos._nY) ? -1 : 1;

        // 播放龙骨跑动动画
        this.node.getComponent(dragonBones.ArmatureDisplay)
            .playAnimation("Run", 0);

        // 通过对 X 轴的缩放实现转身
        this.node.scaleX = this._oMoveDirection._nX;
    }

    /**
     * 移动到指定位置——在 update 函数中调用
     * 
     * @param nDeltaTime 变化时间
     */
    private moveTo_onUpdate(nDeltaTime: number): void {
        if (0 == this._oMoveDirection._nX && 
            0 == this._oMoveDirection._nY) {
            // 如果 XY 轴移动方向都归零,
            // 则说明已经不再移动...
            // XXX 注意: 这里每一帧都会执行到,
            // 所以不要在这里执行动画,
            // 否则动画每次都会从第一帧开始执行 ( 视觉上就是动画一直卡着不动 )
            return;
        }

        // 移动 XY 位置
        this.node.x += this._oMoveDirection._nX * 2;
        this.node.y += this._oMoveDirection._nY * 2;
        // 修正纵深位置
        this.node.zIndex = -this.node.y;

        // X 轴已经到达目标位置, 
        // 就不要横向移动了...
        if (this.node.x <= this._oMoveToPos._nX && 
            -1 == this._oMoveDirection._nX) {
            this._oMoveDirection._nX = 0;
        }
        else
        if (this.node.x >= this._oMoveToPos._nX && 
            1 == this._oMoveDirection._nX) {
            this._oMoveDirection._nX = 0;
        }

        // Y 轴已经到达目标位置,
        // 就不要纵向移动了...
        if (this.node.y <= this._oMoveToPos._nY && 
            -1 == this._oMoveDirection._nY) {
            this._oMoveDirection._nY = 0;
        }
        else
        if (this.node.y >= this._oMoveToPos._nY && 
            1 == this._oMoveDirection._nY) {
            this._oMoveDirection._nY = 0;
        }

        if (0 == this._oMoveDirection._nX && 
            0 == this._oMoveDirection._nY) {
            // 没有移动就保持站立
            this.doStand();
        }
    }

    /**
     * 执行攻击
     */
    doAttk(): void {
        let oADisplay = this.node.getComponent(dragonBones.ArmatureDisplay);
        oADisplay.playAnimation("Attk", 1);
        oADisplay.once(dragonBones.EventObject.FRAME_EVENT, (oEvent) => {
            if ("event_attk" != oEvent["name"]) {
                // 收到龙骨发来的 event_attk 事件后才往下执行,
                // 否则直接退出!
                return;
            }

            if (null == this._oAttkableObjSet) {
                return;
            }

            // 遍历所有能砍到的角色
            this._oAttkableObjSet.forEach((oAttkableObj) => {
                if (null == oAttkableObj) {
                    return;
                }
    
                if (Math.abs(this.node.zIndex - oAttkableObj.zIndex) > 100) {
                    return;
                }

                let oTargetHeroComp = oAttkableObj.getComponent(MyHeroComp);
    
                if (null == oTargetHeroComp) {
                    return;
                }

                // 一边抡锤, 一边喊: 
                // 80……80……80……
                oTargetHeroComp.subtractHP(80);

                if (oTargetHeroComp.getCurrHP() <= 0) {
                    // 对方血流干了, 
                    // 该倒下了...
                    oTargetHeroComp.doDie();
                }
            });
        });
    }

    /**
     * 站立
     */
    doStand(): void {
        this.node.getComponent(dragonBones.ArmatureDisplay)
            .playAnimation("Stand", 0);
    }

    /**
     * 获取当前血量
     * 
     * @returns 当前血量
     */
    getCurrHP(): number {
        return this._currHP;
    }

    /**
     * 减血
     * 
     * @param nDeltaHP 减血量
     */
    subtractHP(nDeltaHP: number): void {
        if (nDeltaHP <= 0) {
            return;
        }

        this._currHP -= nDeltaHP;
        this._currHP = Math.max(0, this._currHP);

        // 冒血飘字
        let oSubtractHP = cc.instantiate(cc.find("Canvas/SubtractHP"));
        oSubtractHP.x = this.node.x;
        oSubtractHP.y = this.node.y + 100;
        oSubtractHP.getComponent(cc.Label).string = "-" + nDeltaHP;
        oSubtractHP.active = true;
        cc.find("Canvas").addChild(oSubtractHP);

        cc.tween(oSubtractHP)
            .by(0.5, { y: 100, opacity: -255, })
            .call(() => { oSubtractHP.destroy(); })
            .start();
    }

    /**
     * 扑街
     */
    doDie(): void {
        this.node.getComponent(dragonBones.ArmatureDisplay)
            .playAnimation("Die", 1);
    }

    /**
     * 当碰撞进入, 
     * 我进入了另外一个人的身体
     * 
     * @param oAnotherBox 另外一个碰撞盒子
     */
    onCollisionEnter(oAnotherBox: cc.BoxCollider): void {
        cc.log(`碰撞到 target = ${oAnotherBox.node.name}`);

        this._oAttkableObjSet = this._oAttkableObjSet || new Set();
        this._oAttkableObjSet.add(oAnotherBox.node);
    }

    /**
     * 当碰撞离开,
     * 我离开了另外一个人的身体
     * 
     * @param oAnotherBox 另外一个碰撞盒子
     * @returns 
     */
    onCollisionExit(oAnotherBox: cc.BoxCollider): void {
        cc.log(`已离开 target = ${oAnotherBox.node.name}`);

        if (null == this._oAttkableObjSet) {
            return;
        }

        this._oAttkableObjSet.delete(oAnotherBox.node);
    }

    /**
     * 销毁节点时调用
     */
    onDestroy(): void {
        if (null != this._oAttkableObjSet) {
            this._oAttkableObjSet.clear();
            this._oAttkableObjSet = null;
        }
    }

    /**
     * 最后更新
     */
    lateUpdate(): void {
        if (this.node.name.includes("Hammer")) {
            // 让场景中的主摄像机只跟随锤子英雄
            let oMainCamera = cc.Camera.main.node;
            oMainCamera.x = this.node.x;
            oMainCamera.y = this.node.y;
        }
    }
}
