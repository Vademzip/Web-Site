import {connect} from "react-redux";
import users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow : (userId) => {
            dispatch (followAC(userId))
        },
        unfollow : (userId) => {
            dispatch (unfollowAC(userId))
        },
        setUsers : (users) => {
            dispatch (setUsersAC(users))
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(users);
