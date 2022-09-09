import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";



const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                        photo={dialog.photo} key={dialog.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);
    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        let text = newMessageElement.current.value;
        props.sendMessage(text);

    }

    let printTextMessage = (text) => {
        text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div className={s.allMessages}>
                    {messagesElements}
                </div>
                <div className={s.newMessage}>
                    <div>
                        <textarea ref={newMessageElement} onChange={printTextMessage} value={props.dialogsPage.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Dialogs;