import style from "./Message.module.css";
import React from "react";

const Message = (props) => {
    let newMessageElement = React.createRef()
    let addMessage = () => {
        let message = newMessageElement.current.value
        alert(message)
    }

    return (
        <div className={style.Message}>
            <textarea ref={newMessageElement} className={style.Text} placeholder={props.message}></textarea>
            <div className={style.BtnBlock}>
                <button onClick={addMessage} className={style.BtnSend}>Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Message