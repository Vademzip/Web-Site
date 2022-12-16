// import './Post.module.css'
import styles from "./ProfileComponent.module.css"
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import Preloader from "../Common/Preloader/Preloader";



const ProfileComponent = (props) => {
    if (props.profile != null) {
        return (<div>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
            </div>
        )
    }
    else return ( <div className={styles.loading}>
            <div className={styles.preloader}><Preloader/></div>
        </div>

    )
}
export default ProfileComponent;