import {combineReducers, legacy_createStore as createStore} from "redux"
import messagesReducer from "./MessagesReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";

let reducers = combineReducers({
    profile : profileReducer,
    messages : messagesReducer,
    usersPage : usersReducer,
    auth : authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;