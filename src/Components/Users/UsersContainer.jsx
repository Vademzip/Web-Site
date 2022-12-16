import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/UsersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./users";
import Preloader from "../Common/Preloader/Preloader";
import styles from "../Users/Users.module.css"

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    render() {

        return <>
           <div className={styles.preloader}>{this.props.isFetching ? <Preloader/> : <Preloader/>}</div>
            <Users totaluserscount={this.props.totalUsersCount}
                        pagesize={this.props.pageSize}
                        currentpage={this.props.currentPage}
                        onpagechanged={this.onPageChanged.bind(this)}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        setCurrentPage = {this.props.setCurrentPage}

        />
        </>
    }


}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setUsersCount: (totalCount) => {
//             dispatch(setTotalUserCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
//
// }

export default connect(mapStateToProps,
    {follow,unfollow,setUsers,setCurrentPage,setTotalUserCount,toggleIsFetching
})(UsersContainer);
