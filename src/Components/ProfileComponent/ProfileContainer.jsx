// import './Post.module.css'
import styles from "./ProfileComponent.module.css"
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import React from 'react'
import ProfileComponent from "./ProfileComponent";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.router.params.userId ;
        if (!userId)
            userId = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }
    render() {
        return <ProfileComponent {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    profile : state.profile.profile
})

export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer));