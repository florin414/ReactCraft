import UserAction from "./user.action";
import ClickPayload from "./payloads/click.payload";
import LoginPayload from "./payloads/login.payload";

export type UserPayloadTypes = {
    [UserAction.CLICK]: ClickPayload;
    [UserAction.LOGIN]: LoginPayload;
};

export type UserPayloadKeyofTypes = keyof UserPayloadTypes;
export type UserPayloadValueTypes = UserPayloadTypes[keyof UserPayloadTypes];