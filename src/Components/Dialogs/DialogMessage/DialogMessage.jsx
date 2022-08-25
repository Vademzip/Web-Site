import styles from "./../Dialogs.module.css"

const DialogMessage = (props) => {

    return <div className={styles.messages}>{props.content}</div>
}

export default DialogMessage;