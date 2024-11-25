import React from "react";
import { useEventEmitter } from "../event-emitter"
import { UserEvent, UserAction, ClickPayload } from "../events/user";

export const EmitEventComponent: React.FC = () => {
    const { emitEvent } = useEventEmitter();

    const triggerEvent = () => {
        emitEvent(new UserEvent(UserAction.CLICK, new ClickPayload("click user")));
    };

    return <button onClick={triggerEvent}>Trigger Event</button>;
};
