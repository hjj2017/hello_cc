import * as $protobuf from "../lib/protobufjs";
/** Namespace msg. */
export namespace msg {

    /** MsgCode enum. */
    enum MsgCode {
        USER_ENTRY_CMD = 0,
        USER_ENTRY_RESULT = 1,
        WHO_ELSE_IS_HERE_CMD = 2,
        WHO_ELSE_IS_HERE_RESULT = 3,
        USER_MOVE_TO_CMD = 4,
        USER_MOVE_TO_RESULT = 5,
        USER_QUIT_RESULT = 6,
        USER_STOP_CMD = 7,
        USER_STOP_RESULT = 8,
        USER_ATTK_CMD = 9,
        USER_ATTK_RESULT = 10,
        USER_SUBTRACT_HP_RESULT = 11,
        USER_DIE_RESULT = 12
    }

    /** Properties of a UserEntryCmd. */
    interface IUserEntryCmd {

        /** UserEntryCmd userId */
        userId?: (number|null);

        /** UserEntryCmd heroAvatar */
        heroAvatar?: (string|null);
    }

    /** Represents a UserEntryCmd. */
    class UserEntryCmd implements IUserEntryCmd {

        /**
         * Constructs a new UserEntryCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserEntryCmd);

        /** UserEntryCmd userId. */
        public userId: number;

        /** UserEntryCmd heroAvatar. */
        public heroAvatar: string;

        /**
         * Creates a new UserEntryCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserEntryCmd instance
         */
        public static create(properties?: msg.IUserEntryCmd): msg.UserEntryCmd;

        /**
         * Encodes the specified UserEntryCmd message. Does not implicitly {@link msg.UserEntryCmd.verify|verify} messages.
         * @param message UserEntryCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserEntryCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserEntryCmd message, length delimited. Does not implicitly {@link msg.UserEntryCmd.verify|verify} messages.
         * @param message UserEntryCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserEntryCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserEntryCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserEntryCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserEntryCmd;

        /**
         * Decodes a UserEntryCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserEntryCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserEntryCmd;

        /**
         * Verifies a UserEntryCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserEntryCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserEntryCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.UserEntryCmd;

        /**
         * Creates a plain object from a UserEntryCmd message. Also converts values to other types if specified.
         * @param message UserEntryCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserEntryCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserEntryCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserEntryResult. */
    interface IUserEntryResult {

        /** UserEntryResult userId */
        userId?: (number|null);

        /** UserEntryResult heroAvatar */
        heroAvatar?: (string|null);
    }

    /** Represents a UserEntryResult. */
    class UserEntryResult implements IUserEntryResult {

        /**
         * Constructs a new UserEntryResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserEntryResult);

        /** UserEntryResult userId. */
        public userId: number;

        /** UserEntryResult heroAvatar. */
        public heroAvatar: string;

        /**
         * Creates a new UserEntryResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserEntryResult instance
         */
        public static create(properties?: msg.IUserEntryResult): msg.UserEntryResult;

        /**
         * Encodes the specified UserEntryResult message. Does not implicitly {@link msg.UserEntryResult.verify|verify} messages.
         * @param message UserEntryResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserEntryResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserEntryResult message, length delimited. Does not implicitly {@link msg.UserEntryResult.verify|verify} messages.
         * @param message UserEntryResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserEntryResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserEntryResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserEntryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserEntryResult;

        /**
         * Decodes a UserEntryResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserEntryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserEntryResult;

        /**
         * Verifies a UserEntryResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserEntryResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserEntryResult
         */
        public static fromObject(object: { [k: string]: any }): msg.UserEntryResult;

        /**
         * Creates a plain object from a UserEntryResult message. Also converts values to other types if specified.
         * @param message UserEntryResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserEntryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserEntryResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WhoElseIsHereCmd. */
    interface IWhoElseIsHereCmd {
    }

    /** Represents a WhoElseIsHereCmd. */
    class WhoElseIsHereCmd implements IWhoElseIsHereCmd {

        /**
         * Constructs a new WhoElseIsHereCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IWhoElseIsHereCmd);

        /**
         * Creates a new WhoElseIsHereCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WhoElseIsHereCmd instance
         */
        public static create(properties?: msg.IWhoElseIsHereCmd): msg.WhoElseIsHereCmd;

        /**
         * Encodes the specified WhoElseIsHereCmd message. Does not implicitly {@link msg.WhoElseIsHereCmd.verify|verify} messages.
         * @param message WhoElseIsHereCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IWhoElseIsHereCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WhoElseIsHereCmd message, length delimited. Does not implicitly {@link msg.WhoElseIsHereCmd.verify|verify} messages.
         * @param message WhoElseIsHereCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IWhoElseIsHereCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WhoElseIsHereCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WhoElseIsHereCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.WhoElseIsHereCmd;

        /**
         * Decodes a WhoElseIsHereCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WhoElseIsHereCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.WhoElseIsHereCmd;

        /**
         * Verifies a WhoElseIsHereCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WhoElseIsHereCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WhoElseIsHereCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.WhoElseIsHereCmd;

        /**
         * Creates a plain object from a WhoElseIsHereCmd message. Also converts values to other types if specified.
         * @param message WhoElseIsHereCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.WhoElseIsHereCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WhoElseIsHereCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WhoElseIsHereResult. */
    interface IWhoElseIsHereResult {

        /** WhoElseIsHereResult userInfo */
        userInfo?: (msg.WhoElseIsHereResult.IUserInfo[]|null);
    }

    /** Represents a WhoElseIsHereResult. */
    class WhoElseIsHereResult implements IWhoElseIsHereResult {

        /**
         * Constructs a new WhoElseIsHereResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IWhoElseIsHereResult);

        /** WhoElseIsHereResult userInfo. */
        public userInfo: msg.WhoElseIsHereResult.IUserInfo[];

        /**
         * Creates a new WhoElseIsHereResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WhoElseIsHereResult instance
         */
        public static create(properties?: msg.IWhoElseIsHereResult): msg.WhoElseIsHereResult;

        /**
         * Encodes the specified WhoElseIsHereResult message. Does not implicitly {@link msg.WhoElseIsHereResult.verify|verify} messages.
         * @param message WhoElseIsHereResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IWhoElseIsHereResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WhoElseIsHereResult message, length delimited. Does not implicitly {@link msg.WhoElseIsHereResult.verify|verify} messages.
         * @param message WhoElseIsHereResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IWhoElseIsHereResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WhoElseIsHereResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WhoElseIsHereResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.WhoElseIsHereResult;

        /**
         * Decodes a WhoElseIsHereResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WhoElseIsHereResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.WhoElseIsHereResult;

        /**
         * Verifies a WhoElseIsHereResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WhoElseIsHereResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WhoElseIsHereResult
         */
        public static fromObject(object: { [k: string]: any }): msg.WhoElseIsHereResult;

        /**
         * Creates a plain object from a WhoElseIsHereResult message. Also converts values to other types if specified.
         * @param message WhoElseIsHereResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.WhoElseIsHereResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WhoElseIsHereResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace WhoElseIsHereResult {

        /** Properties of a UserInfo. */
        interface IUserInfo {

            /** UserInfo userId */
            userId?: (number|null);

            /** UserInfo heroAvatar */
            heroAvatar?: (string|null);

            /** UserInfo moveState */
            moveState?: (msg.WhoElseIsHereResult.UserInfo.IMoveState|null);
        }

        /** Represents a UserInfo. */
        class UserInfo implements IUserInfo {

            /**
             * Constructs a new UserInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.WhoElseIsHereResult.IUserInfo);

            /** UserInfo userId. */
            public userId: number;

            /** UserInfo heroAvatar. */
            public heroAvatar: string;

            /** UserInfo moveState. */
            public moveState?: (msg.WhoElseIsHereResult.UserInfo.IMoveState|null);

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserInfo instance
             */
            public static create(properties?: msg.WhoElseIsHereResult.IUserInfo): msg.WhoElseIsHereResult.UserInfo;

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link msg.WhoElseIsHereResult.UserInfo.verify|verify} messages.
             * @param message UserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.WhoElseIsHereResult.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link msg.WhoElseIsHereResult.UserInfo.verify|verify} messages.
             * @param message UserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.WhoElseIsHereResult.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.WhoElseIsHereResult.UserInfo;

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.WhoElseIsHereResult.UserInfo;

            /**
             * Verifies a UserInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserInfo
             */
            public static fromObject(object: { [k: string]: any }): msg.WhoElseIsHereResult.UserInfo;

            /**
             * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
             * @param message UserInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.WhoElseIsHereResult.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UserInfo {

            /** Properties of a MoveState. */
            interface IMoveState {

                /** MoveState fromPosX */
                fromPosX?: (number|null);

                /** MoveState fromPosY */
                fromPosY?: (number|null);

                /** MoveState toPosX */
                toPosX?: (number|null);

                /** MoveState toPosY */
                toPosY?: (number|null);

                /** MoveState startTime */
                startTime?: (number|Long|null);
            }

            /** Represents a MoveState. */
            class MoveState implements IMoveState {

                /**
                 * Constructs a new MoveState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: msg.WhoElseIsHereResult.UserInfo.IMoveState);

                /** MoveState fromPosX. */
                public fromPosX: number;

                /** MoveState fromPosY. */
                public fromPosY: number;

                /** MoveState toPosX. */
                public toPosX: number;

                /** MoveState toPosY. */
                public toPosY: number;

                /** MoveState startTime. */
                public startTime: (number|Long);

                /**
                 * Creates a new MoveState instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MoveState instance
                 */
                public static create(properties?: msg.WhoElseIsHereResult.UserInfo.IMoveState): msg.WhoElseIsHereResult.UserInfo.MoveState;

                /**
                 * Encodes the specified MoveState message. Does not implicitly {@link msg.WhoElseIsHereResult.UserInfo.MoveState.verify|verify} messages.
                 * @param message MoveState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: msg.WhoElseIsHereResult.UserInfo.IMoveState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MoveState message, length delimited. Does not implicitly {@link msg.WhoElseIsHereResult.UserInfo.MoveState.verify|verify} messages.
                 * @param message MoveState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: msg.WhoElseIsHereResult.UserInfo.IMoveState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MoveState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MoveState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.WhoElseIsHereResult.UserInfo.MoveState;

                /**
                 * Decodes a MoveState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MoveState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.WhoElseIsHereResult.UserInfo.MoveState;

                /**
                 * Verifies a MoveState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MoveState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MoveState
                 */
                public static fromObject(object: { [k: string]: any }): msg.WhoElseIsHereResult.UserInfo.MoveState;

                /**
                 * Creates a plain object from a MoveState message. Also converts values to other types if specified.
                 * @param message MoveState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: msg.WhoElseIsHereResult.UserInfo.MoveState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MoveState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Properties of a UserMoveToCmd. */
    interface IUserMoveToCmd {

        /** UserMoveToCmd moveFromPosX */
        moveFromPosX?: (number|null);

        /** UserMoveToCmd moveFromPosY */
        moveFromPosY?: (number|null);

        /** UserMoveToCmd moveToPosX */
        moveToPosX?: (number|null);

        /** UserMoveToCmd moveToPosY */
        moveToPosY?: (number|null);
    }

    /** Represents a UserMoveToCmd. */
    class UserMoveToCmd implements IUserMoveToCmd {

        /**
         * Constructs a new UserMoveToCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserMoveToCmd);

        /** UserMoveToCmd moveFromPosX. */
        public moveFromPosX: number;

        /** UserMoveToCmd moveFromPosY. */
        public moveFromPosY: number;

        /** UserMoveToCmd moveToPosX. */
        public moveToPosX: number;

        /** UserMoveToCmd moveToPosY. */
        public moveToPosY: number;

        /**
         * Creates a new UserMoveToCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserMoveToCmd instance
         */
        public static create(properties?: msg.IUserMoveToCmd): msg.UserMoveToCmd;

        /**
         * Encodes the specified UserMoveToCmd message. Does not implicitly {@link msg.UserMoveToCmd.verify|verify} messages.
         * @param message UserMoveToCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserMoveToCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserMoveToCmd message, length delimited. Does not implicitly {@link msg.UserMoveToCmd.verify|verify} messages.
         * @param message UserMoveToCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserMoveToCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserMoveToCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserMoveToCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserMoveToCmd;

        /**
         * Decodes a UserMoveToCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserMoveToCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserMoveToCmd;

        /**
         * Verifies a UserMoveToCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserMoveToCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserMoveToCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.UserMoveToCmd;

        /**
         * Creates a plain object from a UserMoveToCmd message. Also converts values to other types if specified.
         * @param message UserMoveToCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserMoveToCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserMoveToCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserMoveToResult. */
    interface IUserMoveToResult {

        /** UserMoveToResult moveUserId */
        moveUserId?: (number|null);

        /** UserMoveToResult moveFromPosX */
        moveFromPosX?: (number|null);

        /** UserMoveToResult moveFromPosY */
        moveFromPosY?: (number|null);

        /** UserMoveToResult moveToPosX */
        moveToPosX?: (number|null);

        /** UserMoveToResult moveToPosY */
        moveToPosY?: (number|null);

        /** UserMoveToResult moveStartTime */
        moveStartTime?: (number|Long|null);
    }

    /** Represents a UserMoveToResult. */
    class UserMoveToResult implements IUserMoveToResult {

        /**
         * Constructs a new UserMoveToResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserMoveToResult);

        /** UserMoveToResult moveUserId. */
        public moveUserId: number;

        /** UserMoveToResult moveFromPosX. */
        public moveFromPosX: number;

        /** UserMoveToResult moveFromPosY. */
        public moveFromPosY: number;

        /** UserMoveToResult moveToPosX. */
        public moveToPosX: number;

        /** UserMoveToResult moveToPosY. */
        public moveToPosY: number;

        /** UserMoveToResult moveStartTime. */
        public moveStartTime: (number|Long);

        /**
         * Creates a new UserMoveToResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserMoveToResult instance
         */
        public static create(properties?: msg.IUserMoveToResult): msg.UserMoveToResult;

        /**
         * Encodes the specified UserMoveToResult message. Does not implicitly {@link msg.UserMoveToResult.verify|verify} messages.
         * @param message UserMoveToResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserMoveToResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserMoveToResult message, length delimited. Does not implicitly {@link msg.UserMoveToResult.verify|verify} messages.
         * @param message UserMoveToResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserMoveToResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserMoveToResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserMoveToResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserMoveToResult;

        /**
         * Decodes a UserMoveToResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserMoveToResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserMoveToResult;

        /**
         * Verifies a UserMoveToResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserMoveToResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserMoveToResult
         */
        public static fromObject(object: { [k: string]: any }): msg.UserMoveToResult;

        /**
         * Creates a plain object from a UserMoveToResult message. Also converts values to other types if specified.
         * @param message UserMoveToResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserMoveToResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserMoveToResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserQuitResult. */
    interface IUserQuitResult {

        /** UserQuitResult quitUserId */
        quitUserId?: (number|null);
    }

    /** Represents a UserQuitResult. */
    class UserQuitResult implements IUserQuitResult {

        /**
         * Constructs a new UserQuitResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserQuitResult);

        /** UserQuitResult quitUserId. */
        public quitUserId: number;

        /**
         * Creates a new UserQuitResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserQuitResult instance
         */
        public static create(properties?: msg.IUserQuitResult): msg.UserQuitResult;

        /**
         * Encodes the specified UserQuitResult message. Does not implicitly {@link msg.UserQuitResult.verify|verify} messages.
         * @param message UserQuitResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserQuitResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserQuitResult message, length delimited. Does not implicitly {@link msg.UserQuitResult.verify|verify} messages.
         * @param message UserQuitResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserQuitResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserQuitResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserQuitResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserQuitResult;

        /**
         * Decodes a UserQuitResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserQuitResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserQuitResult;

        /**
         * Verifies a UserQuitResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserQuitResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserQuitResult
         */
        public static fromObject(object: { [k: string]: any }): msg.UserQuitResult;

        /**
         * Creates a plain object from a UserQuitResult message. Also converts values to other types if specified.
         * @param message UserQuitResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserQuitResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserQuitResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserStopCmd. */
    interface IUserStopCmd {
    }

    /** Represents a UserStopCmd. */
    class UserStopCmd implements IUserStopCmd {

        /**
         * Constructs a new UserStopCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserStopCmd);

        /**
         * Creates a new UserStopCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserStopCmd instance
         */
        public static create(properties?: msg.IUserStopCmd): msg.UserStopCmd;

        /**
         * Encodes the specified UserStopCmd message. Does not implicitly {@link msg.UserStopCmd.verify|verify} messages.
         * @param message UserStopCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserStopCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserStopCmd message, length delimited. Does not implicitly {@link msg.UserStopCmd.verify|verify} messages.
         * @param message UserStopCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserStopCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserStopCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserStopCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserStopCmd;

        /**
         * Decodes a UserStopCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserStopCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserStopCmd;

        /**
         * Verifies a UserStopCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserStopCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserStopCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.UserStopCmd;

        /**
         * Creates a plain object from a UserStopCmd message. Also converts values to other types if specified.
         * @param message UserStopCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserStopCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserStopCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserStopResult. */
    interface IUserStopResult {

        /** UserStopResult stopUserId */
        stopUserId?: (number|null);

        /** UserStopResult stopAtPosX */
        stopAtPosX?: (number|null);

        /** UserStopResult stopAtPosY */
        stopAtPosY?: (number|null);
    }

    /** Represents a UserStopResult. */
    class UserStopResult implements IUserStopResult {

        /**
         * Constructs a new UserStopResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserStopResult);

        /** UserStopResult stopUserId. */
        public stopUserId: number;

        /** UserStopResult stopAtPosX. */
        public stopAtPosX: number;

        /** UserStopResult stopAtPosY. */
        public stopAtPosY: number;

        /**
         * Creates a new UserStopResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserStopResult instance
         */
        public static create(properties?: msg.IUserStopResult): msg.UserStopResult;

        /**
         * Encodes the specified UserStopResult message. Does not implicitly {@link msg.UserStopResult.verify|verify} messages.
         * @param message UserStopResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserStopResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserStopResult message, length delimited. Does not implicitly {@link msg.UserStopResult.verify|verify} messages.
         * @param message UserStopResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserStopResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserStopResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserStopResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserStopResult;

        /**
         * Decodes a UserStopResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserStopResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserStopResult;

        /**
         * Verifies a UserStopResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserStopResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserStopResult
         */
        public static fromObject(object: { [k: string]: any }): msg.UserStopResult;

        /**
         * Creates a plain object from a UserStopResult message. Also converts values to other types if specified.
         * @param message UserStopResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserStopResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserStopResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserAttkCmd. */
    interface IUserAttkCmd {

        /** UserAttkCmd targetUserId */
        targetUserId?: (number|null);
    }

    /** Represents a UserAttkCmd. */
    class UserAttkCmd implements IUserAttkCmd {

        /**
         * Constructs a new UserAttkCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserAttkCmd);

        /** UserAttkCmd targetUserId. */
        public targetUserId: number;

        /**
         * Creates a new UserAttkCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserAttkCmd instance
         */
        public static create(properties?: msg.IUserAttkCmd): msg.UserAttkCmd;

        /**
         * Encodes the specified UserAttkCmd message. Does not implicitly {@link msg.UserAttkCmd.verify|verify} messages.
         * @param message UserAttkCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserAttkCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserAttkCmd message, length delimited. Does not implicitly {@link msg.UserAttkCmd.verify|verify} messages.
         * @param message UserAttkCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserAttkCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserAttkCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserAttkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserAttkCmd;

        /**
         * Decodes a UserAttkCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserAttkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserAttkCmd;

        /**
         * Verifies a UserAttkCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserAttkCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserAttkCmd
         */
        public static fromObject(object: { [k: string]: any }): msg.UserAttkCmd;

        /**
         * Creates a plain object from a UserAttkCmd message. Also converts values to other types if specified.
         * @param message UserAttkCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserAttkCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserAttkCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserAttkResult. */
    interface IUserAttkResult {

        /** UserAttkResult attkUserId */
        attkUserId?: (number|null);

        /** UserAttkResult targetUserId */
        targetUserId?: (number|null);
    }

    /** Represents a UserAttkResult. */
    class UserAttkResult implements IUserAttkResult {

        /**
         * Constructs a new UserAttkResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserAttkResult);

        /** UserAttkResult attkUserId. */
        public attkUserId: number;

        /** UserAttkResult targetUserId. */
        public targetUserId: number;

        /**
         * Creates a new UserAttkResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserAttkResult instance
         */
        public static create(properties?: msg.IUserAttkResult): msg.UserAttkResult;

        /**
         * Encodes the specified UserAttkResult message. Does not implicitly {@link msg.UserAttkResult.verify|verify} messages.
         * @param message UserAttkResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserAttkResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserAttkResult message, length delimited. Does not implicitly {@link msg.UserAttkResult.verify|verify} messages.
         * @param message UserAttkResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserAttkResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserAttkResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserAttkResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserAttkResult;

        /**
         * Decodes a UserAttkResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserAttkResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserAttkResult;

        /**
         * Verifies a UserAttkResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserAttkResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserAttkResult
         */
        public static fromObject(object: { [k: string]: any }): msg.UserAttkResult;

        /**
         * Creates a plain object from a UserAttkResult message. Also converts values to other types if specified.
         * @param message UserAttkResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserAttkResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserAttkResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSubtractHpResult. */
    interface IUserSubtractHpResult {

        /** UserSubtractHpResult targetUserId */
        targetUserId?: (number|null);

        /** UserSubtractHpResult subtractHp */
        subtractHp?: (number|null);
    }

    /** Represents a UserSubtractHpResult. */
    class UserSubtractHpResult implements IUserSubtractHpResult {

        /**
         * Constructs a new UserSubtractHpResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserSubtractHpResult);

        /** UserSubtractHpResult targetUserId. */
        public targetUserId: number;

        /** UserSubtractHpResult subtractHp. */
        public subtractHp: number;

        /**
         * Creates a new UserSubtractHpResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSubtractHpResult instance
         */
        public static create(properties?: msg.IUserSubtractHpResult): msg.UserSubtractHpResult;

        /**
         * Encodes the specified UserSubtractHpResult message. Does not implicitly {@link msg.UserSubtractHpResult.verify|verify} messages.
         * @param message UserSubtractHpResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserSubtractHpResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserSubtractHpResult message, length delimited. Does not implicitly {@link msg.UserSubtractHpResult.verify|verify} messages.
         * @param message UserSubtractHpResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserSubtractHpResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSubtractHpResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSubtractHpResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserSubtractHpResult;

        /**
         * Decodes a UserSubtractHpResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserSubtractHpResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserSubtractHpResult;

        /**
         * Verifies a UserSubtractHpResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserSubtractHpResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSubtractHpResult
         */
        public static fromObject(object: { [k: string]: any }): msg.UserSubtractHpResult;

        /**
         * Creates a plain object from a UserSubtractHpResult message. Also converts values to other types if specified.
         * @param message UserSubtractHpResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserSubtractHpResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSubtractHpResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserDieResult. */
    interface IUserDieResult {

        /** UserDieResult targetUserId */
        targetUserId?: (number|null);
    }

    /** Represents a UserDieResult. */
    class UserDieResult implements IUserDieResult {

        /**
         * Constructs a new UserDieResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserDieResult);

        /** UserDieResult targetUserId. */
        public targetUserId: number;

        /**
         * Creates a new UserDieResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserDieResult instance
         */
        public static create(properties?: msg.IUserDieResult): msg.UserDieResult;

        /**
         * Encodes the specified UserDieResult message. Does not implicitly {@link msg.UserDieResult.verify|verify} messages.
         * @param message UserDieResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserDieResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserDieResult message, length delimited. Does not implicitly {@link msg.UserDieResult.verify|verify} messages.
         * @param message UserDieResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserDieResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserDieResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserDieResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserDieResult;

        /**
         * Decodes a UserDieResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserDieResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserDieResult;

        /**
         * Verifies a UserDieResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserDieResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserDieResult
         */
        public static fromObject(object: { [k: string]: any }): msg.UserDieResult;

        /**
         * Creates a plain object from a UserDieResult message. Also converts values to other types if specified.
         * @param message UserDieResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserDieResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserDieResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
