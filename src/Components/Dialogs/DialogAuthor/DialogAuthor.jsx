import styles from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogAuthor = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={styles.item + ' ' + styles.active}>
        <span><img src={props.img}/></span>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}

export default DialogAuthor;