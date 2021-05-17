import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./state";

export const UPDATE_NEW_MESSAGE_BODY = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const SEND_MESSAGE = () => {
    return {
        type:"SEND_MESSAGE"
    } as const
}

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;
        case "SEND_MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: v1(), message: body});
            return state;
        default: return state;
    }

    return state;
}