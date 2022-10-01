const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"

let initState = {
    users : [ ],
    pageSize : 5,
    totalUsersCount : 0,
    currentPage : 1,
    isFetching : false
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS : {
            return {
                ...state,
                users : action.users
            }
        }
        case FOLLOW_USER : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        }
        case UNFOLLOW_USER : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        }
        case SET_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USER_COUNT : {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        default :
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW_USER, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW_USER, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type : SET_CURRENT_PAGE, currentPage : currentPage})
export const setTotalUserCountAC = (totalUsersCount) => ({type : SET_TOTAL_USER_COUNT, count : totalUsersCount})


export default usersReducer;
