// import './Post.module.css'
import styles from "./ProfileComponent.module.css"
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";



const ProfileComponent = (props) => {
    return (<div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
export default ProfileComponent;