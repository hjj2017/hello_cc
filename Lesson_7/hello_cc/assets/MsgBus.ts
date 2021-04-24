// @import
import MsgDecoder from "./MsgDecoder";
import MsgEncoder from "./MsgEncoder";

// @const
const SERVER_HOST = "127.0.0.1";
const SERVER_PORT = 12345;

/**
 * 消息总线, 负责发送和接收消息
 */
export default class MsgBus {
    /**
     * 单例对象
     */
    private static _oInstance: MsgBus = new MsgBus();

    /**
     * WebSocket 对象
     */
    private _oWebSocket: WebSocket;

    /**
     * 编码器
     */
    private _oMsgEncoder: MsgEncoder = new MsgEncoder();

    /**
     * 解码器
     */
    private _oMsgDecoder: MsgDecoder = new MsgDecoder();

    /**
     * 私有化类默认构造器
     */
    private constructor() {
    }

    /**
     * 获取单例对象
     * 
     * @returns 单例对象
     */
    static getInstance(): MsgBus {
        return this._oInstance;
    }

    /**
     * 连接服务器
     */
    connect(): void {
        let strURL = `ws://${SERVER_HOST}:${SERVER_PORT}/ws`;
        let oWebSocket = new WebSocket(strURL);
        oWebSocket.binaryType = "arraybuffer";

        // 当 WebSocket 连接
        oWebSocket.onopen = (): void => {
            cc.log(`已经连接服务器, URL = ${strURL}`);
            this._oWebSocket = oWebSocket;
        }

        // 当 WebSocket 断开
        oWebSocket.onclose = (): void => {
            cc.warn("服务器连接已经关闭");
            this._oWebSocket = null;
        }

        // 当收到消息
        oWebSocket.onmessage = (oEvent: MessageEvent): void => {
            if (null == oEvent || 
                null == oEvent.data) {
                return;
            }

            // 将数据包装成字节数组, 也就是 byte[]
            let oUint8Array = new Uint8Array(oEvent.data);

            // 获取消息编号
            let nMsgCode = this._oMsgDecoder.getMsgCode(oUint8Array);

            if (nMsgCode < 0) {
                cc.error("从服务器收到无效消息");
                return;
            }

            // 解码字节数组为消息体
            let oMsgBody = this._oMsgDecoder.decode(nMsgCode, oUint8Array.subarray(4));

            cc.log(oMsgBody);
        }
    }

    /**
     * 发送消息
     * 
     * @param nMsgCode 消息编号
     * @param oMsgBody 消息体
     */
    sendMsg(nMsgCode: number, oMsgBody: any): void {
        if (nMsgCode < 0 || 
            null == oMsgBody) {
            return;
        }

        if (null == this._oWebSocket) {
            cc.error("WebSocket 为空");
            return;
        }

        let oUint8Array = this._oMsgEncoder.encode(nMsgCode, oMsgBody);

        if (null == oUint8Array || 
            oUint8Array.length <= 0) {
            cc.error(`字节数组为空, msgCode = ${nMsgCode}`);
            return;
        }

        cc.log(`发送消息, msgCode = ${nMsgCode}`);
        this._oWebSocket.send(oUint8Array);
    }
}
