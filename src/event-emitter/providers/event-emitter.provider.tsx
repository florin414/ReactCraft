import React, {useState} from "react";
import {BaseEvent, ConstructorType, EventCallbackType, EventEmitterProviderProps, ISubscription} from "../index";
import {UserPayloadKeyofTypes, UserPayloadTypes, UserPayloadValueTypes} from "../../events/user/user.payload";
import EventContext from "../contexts/event.context";

const EventEmitterProvider: React.FC<EventEmitterProviderProps> = ({ children }) => {
    const [subscriptions, setSubscriptions] = useState<ISubscription<keyof UserPayloadTypes>[]>([]);

    const emitEvent = <T extends UserPayloadKeyofTypes>(event: BaseEvent<T>) => {
        const eventSubscriptions = subscriptions.filter(sub => sub.event.getEventType() === event.getEventType());
        eventSubscriptions.forEach(sub => sub.callback(event.payload));
    };

    const subscribe = <T extends keyof UserPayloadTypes>(
        eventClass: ConstructorType<BaseEvent<T>>,
        eventType: T,
        callback: EventCallbackType<UserPayloadTypes[T]>,
    ) => {
        setSubscriptions(prev => [
            ...prev,
            {
                event: new eventClass(eventType, {} as UserPayloadTypes[T]),
                callback: callback as EventCallbackType<UserPayloadValueTypes>
            }
        ]);
    };

    const unsubscribe = <T extends UserPayloadKeyofTypes>(
        eventClass: ConstructorType<BaseEvent<T>>,
        eventType: T
    ) => {
        setSubscriptions(prev =>
            prev.filter(sub =>
                sub.event.getEventType() !== eventType || sub.event.constructor !== eventClass
            )
        );
    };

    return (
        <EventContext.Provider value={{ subscriptions, emitEvent, subscribe, unsubscribe }}>
            {children}
        </EventContext.Provider>
    );
};

export default EventEmitterProvider;
