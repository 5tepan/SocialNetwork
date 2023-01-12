import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'


const Dialogs = (props) => {

    let dialogsElem = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageElem = props.state.messagesData.map(message => <Message message={message.message} />)

    return (
        <div className={style.Dialogs}>
            <div className={style.DialogsItem}>
                {dialogsElem}
            </div>
            <div className={style.Messages}>
                {messageElem}
            </div>
        </div>
    )
}


export default Dialogs