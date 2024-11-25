import {IPayload} from "../../../event-emitter";

export default class LoginPayload implements IPayload {
    constructor(public email: string, public password: string) {}
}
