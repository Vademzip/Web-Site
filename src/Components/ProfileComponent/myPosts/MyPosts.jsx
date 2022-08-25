// import './Post.module.css'
import styles from "./MyPosts.module.css"
import Post from "./posts/Post";
import React from "react";
import {addPostActionCreator, updateTextActionCreator} from "../../../Redux/ProfileReducer";


const myPosts = (props) => {
    let myPostsItems = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        if (newPostElement.current.value) {
            let text = newPostElement.current.value;
            props.addPost(text);
        } else
            alert("Вы ввели пустое сообщение")
    };

    let updateText = () => {
        let text = newPostElement.current.value;
        props.updateTextPost(text); // без Диспатча так
    };

    return (<div className={styles.posts}>
            <h3>my posts</h3>

            <div>
                <textarea placeholder="Введите текст" ref={newPostElement} onChange={updateText}
                          value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add</button>
                    <button>Delete</button>
                </div>
            </div>

            <div className={styles.posts}>
                {myPostsItems}
            </div>

        </div>
    )
}
export default myPosts;