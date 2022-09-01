import React from "react";
import {printTextMessageActionCreator, sendMessageActionCreator} from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

    let state = props.store.getState();

    let sendMessage = (text) => {
        let action = sendMessageActionCreator(text);
        props.store.dispatch(action);
    }

    let printTextMessage = (text) => {
        let action = printTextMessageActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs updateNewMessageText={printTextMessage} sendMessage={sendMessage}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}
                 dialogs={state.dialogsPage.dialogs}/>
    );

}

export default DialogsContainer;