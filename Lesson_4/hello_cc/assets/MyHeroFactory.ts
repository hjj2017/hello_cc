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

        // 获取已加载的 Bundle
        let oLoadedBundle = cc.assetManager.getBundle(BUNDLE_NAME);

        // 如果 Bundle 没有被加载过
        if (null == oLoadedBundle) {
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

                // 获取已加载的预制体 Prefab
                let strPrefabName = `hero/prefab/${strHeroName}`;
                let oLoadedPrefab = oLoadedBundle.get(strPrefabName, cc.Prefab);

                // 如果预制体没有被加载过
                if (null == oLoadedPrefab) {
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

                            let oHeroNode = cc.instantiate(oPrefab);
                            funCallback(oHeroNode);
                        });
                    });
                }
                else {
                    // 
                    // 我们还需要处理 oLoadedBundle 不为空的情况,
                    // 可是拜 TypeScript 的异步回调机制所赐, 回调函数嵌套太深了...
                    // 重构逻辑会特别复杂!
                    // 
                }
            });
        }
        else {
            
        }
    }
}
