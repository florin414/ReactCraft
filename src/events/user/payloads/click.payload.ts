import {IPayload} from "../../../event-emitter";

export default class ClickPayload implements IPayload {
    constructor(public message: string) {}
}
