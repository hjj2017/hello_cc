// @import
import mod_GameMsgProtocol = require("./msg/GameMsgProtocol");

/**
 * 消息解码器
 */
export default class MsgDecoder {
    /**
     * 获取消息编号, 
     * 读取字节数组中的第 3、第 4 个字节, 拼成消息编号
     * 
     * @param oUint8Array 字节数组
     * @returns 消息编号
     */
    getMsgCode(oUint8Array: Uint8Array): number {
        if (null == oUint8Array || 
            oUint8Array.length < 4) {
            // 要读取第 3、第 4 个字节,
            // 那么字节数组长度至少应该 >= 4,
            // 否则就越界了...
            return -1;
        }

        let nMsgCode = 0;
        nMsgCode |= (oUint8Array[2] & 0xff) << 8;
        nMsgCode |= (oUint8Array[3] & 0xff);

        return nMsgCode;
    }

    /**
     * 解码
     * 
     * @param nMsgCode 消息编号
     * @param oUint8Array 字节数组, 这里传入的是原字节数组从第 5 个位置开始的所有字节
     * @returns 消息对象
     */
    decode(nMsgCode: number, oUint8Array: Uint8Array): any {
        if (nMsgCode < 0 || 
            null == oUint8Array || 
            oUint8Array.length <= 0) {
            return;
        }

        // 将取得类似 "USER_ENTRY_CMD" 这样的字符串
        let strMsgName = mod_GameMsgProtocol.msg.MsgCode[nMsgCode];

        if (null == strMsgName) {
            cc.error(`未找到消息名称, msgCode = ${nMsgCode}`);
            return null;
        }

        let oTempArray = strMsgName.split("_");
        strMsgName = "";

        for (let strTemp of oTempArray) {
            // in 操作, strTemp 就代表了 index
            // of 操作, strTemp 就代表了字符串值, 也就是 "USER", "ENTRY", "CMD"
            strMsgName += strTemp.charAt(0) + strTemp.substr(1).toLowerCase();
            // USER => User, ENTRY => Entry, CMD => Cmd
            // 最后加在一起 = UserEntryCmd
        }

        // 在 JS/TS 语言里, 
        // msg.UserEntryCmd 和 msg["UserEntryCmd"] 是等价的,
        // 所以我们可通过字符串方式找到消息类
        let oMsgClazz = mod_GameMsgProtocol.msg[strMsgName];

        if (null == oMsgClazz) {
            cc.error(`未找到消息类, msgCode = ${nMsgCode}, msgName = ${strMsgName}`);
            return null;
        }

        return oMsgClazz.decode(oUint8Array);
    }
}
