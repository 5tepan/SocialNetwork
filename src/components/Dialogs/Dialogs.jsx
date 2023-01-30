import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.messagePage

    let dialogsElem = state.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messageElem = state.messagesData.map(message => <Message key={message.id} message={message.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={style.Dialogs}>
            <div className={style.DialogsItem}>
                {dialogsElem}
            </div>
            <div className={style.Messages}>
                <div>{messageElem}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange}
                                   value={newMessageBody}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs