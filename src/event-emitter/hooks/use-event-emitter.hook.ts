import {useContext} from "react";
import EventContext from "../contexts/event.context";
import EventContextProps from "../props/event-context.props";

const useEventEmitter = (): EventContextProps => {
    const context: EventContextProps | undefined = useContext(EventContext);
    if (context === undefined) {
        throw new Error('useEventEmitter must be used within an EventEmitterProvider');
    }
    return context;
};

export default useEventEmitter;