// import './Post.module.css'
import styles from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (<div className = {styles.mainContent}>
            <div className = {styles.header}>
                <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612574650_28-p-fon-dlya-shapki-yutub-zelenii-36.jpg"/>
            </div>
            <div className = {styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;