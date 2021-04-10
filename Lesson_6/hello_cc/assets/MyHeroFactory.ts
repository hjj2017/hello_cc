import Async from "./Async";
import MyHeroComp from "./MyHeroComp";

const BUNDLE_NAME = "customBundlez";

/**
 * 英雄工厂类
 */
export default class MyHeroFactory {
    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 异步方式创建英雄节点
     * 
     * @param strHeroName 英雄名称
     * @param funCallback 回调函数
     * @returns void
     */
    static createAsync(strHeroName: string, funCallback: (oHeroNode: cc.Node) => void): void {
        if (null == strHeroName) {
            return;
        }

        // 已加载的 Bundle
        let oLoadedBundle = null;
        let oLoadedPrefab = null;

        Async.seriez_3([
            // 先加载 Bundle
            (funDoNext) => {
                oLoadedBundle = cc.assetManager.getBundle(BUNDLE_NAME);

                if (null != oLoadedBundle) {
                    funDoNext();
                    return;
                }

                // 尝试加载 Bundle
                cc.assetManager.loadBundle(BUNDLE_NAME, (oError: Error, oBundle: cc.AssetManager.Bundle) => {
                    if (null != oError) {
                        cc.error(oError);
                        return;
                    }

                    if (null == oBundle) {
                        cc.error(`Bundle 为空! bundleName = ${BUNDLE_NAME}`);
                        return;
                    }

                    oLoadedBundle = oBundle;
                    funDoNext();
                });
            },

            // 加载 Prefab
            (funDoNext) => {
                if (null == oLoadedBundle) {
                    return;
                }

                // 获取已加载的预制体 Prefab
                let strPrefabName = `hero/prefab/${strHeroName}`;
                oLoadedPrefab = oLoadedBundle.get(strPrefabName, cc.Prefab);

                // 如果预制体没有被加载过
                if (null != oLoadedPrefab) {
                    funDoNext();
                    return;
                }

                // 尝试加载预制体
                oLoadedBundle.load(strPrefabName, (oError: Error, oPrefab: cc.Prefab) => {
                    if (null != oError) {
                        cc.error(oError);
                        return;
                    }

                    if (null == oPrefab) {
                        cc.error(`预制体为空! prefabName = ${strPrefabName}`);
                        return;
                    }

                    oLoadedPrefab = oPrefab;
                    funDoNext();
                });
            },

            // 预加载龙骨资源
            (funDoNext) => {
                // 
                // 考虑到网络延迟问题,
                // 在创建预制体实例之前先加载龙骨动画相关资源...
                // 
                // 因为 .prefab 是文本文件,
                // 龙骨动画含有图片资源,
                // 而加载资源都是通过 HTTP GET 方式加载的,
                // 所以就可能出现 "英雄节点" 创建成功且已经加到画布上了,
                // 但是图片资源没加载完, 动画显示不正常!
                oLoadedBundle.preloadDir(`hero/dragonBonez/${strHeroName}`, (oError: Error) => {
                    if (null != oError) {
                        cc.error(oError);
                        return;
                    }

                    funDoNext();
                });
            },

            // 创建预制体实例
            (funDoNext) => {
                if (null == oLoadedPrefab) {
                    return;
                }

                let oHeroNode: cc.Node = cc.instantiate(oLoadedPrefab);
                oHeroNode.addComponent(MyHeroComp);
                
                funCallback(oHeroNode);
            }
        ]);
    }
}
