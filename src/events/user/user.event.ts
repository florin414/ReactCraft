import {BaseEvent} from "../../event-emitter";
import {UserPayloadTypes} from "./user.payload";

export default class UserEvent<T extends keyof UserPayloadTypes> extends BaseEvent<T> {
    // eslint-disable-next-line
    constructor(eventType: T, payload: UserPayloadTypes[T]) {
        super(eventType, payload);
    }
}