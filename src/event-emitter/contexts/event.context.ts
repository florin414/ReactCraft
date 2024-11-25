import {createContext} from "react";
import EventContextProps from "../props/event-context.props";

const EventContext = createContext<EventContextProps | undefined>(undefined);

export default  EventContext;