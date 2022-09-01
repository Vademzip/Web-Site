const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';

let initState = {
    users : [ ]
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS : {
            return {
                ...state,
                users : [...state.users, ...action.users]
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
        default :
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW_USER, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW_USER, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;
