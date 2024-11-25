import {BaseAction} from "../../event-emitter";

export default class UserAction extends BaseAction {
    public static readonly CLICK: 'user_click' = 'user_click';
    public static readonly LOGIN: 'user_login' = 'user_login';
}