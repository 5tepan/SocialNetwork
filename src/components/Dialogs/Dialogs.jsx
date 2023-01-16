import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    let dialogsElem = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElem = props.state.messagesData.map(message => <Message message={message.message}/>)
    let newMessageBody = props.state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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