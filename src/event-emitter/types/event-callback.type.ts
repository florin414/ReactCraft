import IPayload from "../interfaces/payload.interface";

type EventCallbackType<T extends IPayload> = (data: T) => void;

export default EventCallbackType;