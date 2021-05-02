import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/state";

export type DialogsPropsType = {
    stateMessagesPage: DialogsPageType;
};



const Dialogs = (props: DialogsPropsType) => {


    let messagesElements = props.stateMessagesPage.messages.map(m => <Message message={m.message}/>);
    let dialogsElements = props.stateMessagesPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    let addMessage = () => {
        let text = newMessageElement.current?.value;
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
            <div><textarea ref={newMessageElement}></textarea></div>
            <div>
                <button onClick={addMessage}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs;