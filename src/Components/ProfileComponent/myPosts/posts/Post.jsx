// import './Post.module.css'
import styles from "./Post.module.css"

const post = (props) => {
    return (<div className={styles.item}>
            {props.message}
            <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"/>

            <div>
                <span>like</span> {props.likesCount}
            </div>

    </div>
    )
}
export default post;