// import './Post.module.css'
import styles from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import { Icon24LogoVk }  from '@vkontakte/icons';
import { Icon24LogoFacebook } from '@vkontakte/icons';
import { Icon24LogoInstagram } from '@vkontakte/icons';
import { Icon24LogoTwitter } from '@vkontakte/icons';

const ProfileInfo = (props) => {

    if (props.profile != null) {

        return (<div className={styles.mainContent}>
                <div className={styles.header}>
                    <img
                        src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612574650_28-p-fon-dlya-shapki-yutub-zelenii-36.jpg"/>
                </div>
                <div className={styles.descriptionBlock}>
                    <div><img className={styles.avatar} src={props.profile.photos.large}/></div>
                    <div><span className={styles.contactTitle}>КОНТАКТЫ</span>
                    {
                        props.profile.contacts.vk != null &&
                        (
                            <span><Icon24LogoVk/>
                                {props.profile.contacts.vk}</span>

                        )
                    }
                    {
                        props.profile.contacts.facebook != null &&
                        (
                            <span><Icon24LogoFacebook/>
                                {props.profile.contacts.facebook}</span>

                        )
                    }
                    {
                        props.profile.contacts.twitter != null &&
                        (
                            <span><Icon24LogoTwitter/>
                                {props.profile.contacts.twitter}</span>

                        )
                    }
                    {
                        props.profile.contacts.instagram != null &&
                        (
                            <span><Icon24LogoInstagram/>
                                {props.profile.contacts.instagram}</span>

                        )
                    }
                    </div>

                </div>
            </div>

        )
    }
}
export default ProfileInfo;
