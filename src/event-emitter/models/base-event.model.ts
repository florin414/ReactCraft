import {UserPayloadTypes} from "../../events/user";

export default abstract class BaseEvent<T extends keyof UserPayloadTypes> {
    eventType: T;
    payload: UserPayloadTypes[T];

    constructor(eventType: T, payload: UserPayloadTypes[T]) {
        this.eventType = eventType;
        this.payload = payload;
    }

    getEventType(): T {
        return this.eventType;
    }
}