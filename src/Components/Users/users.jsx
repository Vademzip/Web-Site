import styles from "./Users.module.css";
import defaultUserPhoto from "../../assets/noPhoto.jpeg";
import React from 'react'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totaluserscount / props.pagesize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    let curP = props.currentpage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice( curPF, curPL);
    return <div>
        <div>
            {slicedPages.map(p => {
                return <span className={props.currentpage === p && styles.selectedPage} onClick={ (event) => {props.onpagechanged(p)}}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : defaultUserPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick = {() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick = {() => {props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)

        }
    </div>
}

export default Users;