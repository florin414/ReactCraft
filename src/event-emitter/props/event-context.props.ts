import ISubscription from "../interfaces/subscription.interface";
import ConstructorType from "../types/constructor.type";
import EventCallbackType from "../types/event-callback.type";
import BaseEvent from "../models/base-event.model";
import {UserPayloadKeyofTypes, UserPayloadTypes} from "../../events/user";

export default interface EventContextProps {
    subscriptions: ISubscription<UserPayloadKeyofTypes>[];
    emitEvent:  <T extends UserPayloadKeyofTypes>(event: BaseEvent<T>) => void;
    subscribe: <T extends keyof UserPayloadTypes>(
        eventClass: ConstructorType<BaseEvent<T>>,
        eventType: T,
        callback: EventCallbackType<UserPayloadTypes[T]>,
    ) => void;
    unsubscribe: <T extends UserPayloadKeyofTypes>(
        eventClass: ConstructorType<BaseEvent<T>>,
        eventType: T
    ) => void;
}