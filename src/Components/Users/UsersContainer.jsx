import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC} from "../../Redux/UsersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./users";

class UsersContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }

    render() {

        return <Users totaluserscount = {this.props.totalUsersCount}
                      pagesize = {this.props.pageSize}
                      currentpage = {this.props.currentPage}
                      onpagechanged = {this.onPageChanged.bind(this)}
                      users = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
        />
    }





}


let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage : (pageNumber) => {
            dispatch (setCurrentPageAC(pageNumber))
        },
        setUsersCount : (totalCount) => {
            dispatch (setTotalUserCountAC(totalCount))
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);
