import { UserEvent, UserAction, ClickPayload } from "../events/user";
import React, {useEffect, useState} from "react";
import {useEventEmitter} from "../event-emitter";

const ListenEvent: React.FC = () => {
    const { subscribe, unsubscribe  } = useEventEmitter();
    const [message, setMessage] = useState<string>('');

    useEffect(() => {

        subscribe(UserEvent, UserAction.CLICK, (data: ClickPayload) => {
            setMessage(data.message);
        });

        return () => {
            unsubscribe(UserEvent, UserAction.CLICK);
        };
    },
        // eslint-disable-next-line
        []);

    return <div>Received message: {message}</div>;
};

export default ListenEvent;