import mod_protobuf = require("./lib/protobuf");

/**
 * 消息编码器
 */
export default class MsgEncoder {
    /**
     * 编码
     * 
     * @param nMsgCode 消息编号
     * @param oMsgBody 消息体
     */
    encode(nMsgCode: number, oMsgBody: any): Uint8Array/* byte[] */ {
        if (nMsgCode < 0 || 
            null == oMsgBody) {
            return null;
        }

        let oWriter = mod_protobuf.Writer.create();

        // 提前写出 4 个字节用于占位
        oWriter.bytes(0); // 消息长度
        oWriter.bytes(0);
        oWriter.bytes(0); // 消息编号
        oWriter.bytes(0);

        let oByteArray = oMsgBody.constructor.encode(
            oMsgBody, oWriter
        ).finish();

        let nMsgLen = oByteArray.length - 2;
        // 这里要 -2 是减掉开头的两个字节,
        // 也就是第 1、第 2 两个字节所占的长度.
        // 因为第 1、第 2 字节代表了整个消息的长度...
        // 这个长度最好不要把自己算进去.

        oByteArray[0] = (nMsgLen >> 8) & 0xff;
        oByteArray[1] = nMsgLen & 0xff;
        oByteArray[2] = (nMsgCode >> 8) & 0xff;
        oByteArray[3] = nMsgCode & 0xff;

        return oByteArray;
    }
}
