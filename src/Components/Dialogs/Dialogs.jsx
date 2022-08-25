import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogAuthor from "./DialogAuthor/DialogAuthor";
import DialogMessage from "./DialogMessage/DialogMessage";
import {SendMessageCreator, UpdateMessageTextCreator} from "../../Redux/MessagesReducer";


const dialogs = (props) => {
    let state = props.messages;
    let dialogsElements = state.dialogsData.map(dialog => <DialogAuthor name={dialog.name} id={dialog.id} img = {dialog.img}/>)
    let messagesElements = state.messagesData.map(message => <DialogMessage content = {message.message}/>)
    let NewText_in_TextArea = state.newMessageText;

    let onCLickSendMessage = () => {
        props.onCLickSendMessage();
    }

    let onChangeTextArea = (event) => {
        NewText_in_TextArea = event.target.value;
        props.onChangeTextArea(NewText_in_TextArea);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div className={styles.inputWindow}><textarea value={NewText_in_TextArea} onChange={onChangeTextArea} placeholder= "enter your message"></textarea></div>
                    <div><button onClick = {onCLickSendMessage} >SEND</button></div>
                </div>
            </div>
        </div>
    )
}

export default dialogs;