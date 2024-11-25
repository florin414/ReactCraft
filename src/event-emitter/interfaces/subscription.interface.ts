import { UserPayloadTypes } from "../../events/user";
import BaseEvent from "../models/base-event.model";
import EventCallbackType from "../types/event-callback.type";


export default interface ISubscription<T extends keyof UserPayloadTypes> {
    event: BaseEvent<T>;
    callback: EventCallbackType<UserPayloadTypes[T]>;
}