import {combineReducers, legacy_createStore as createStore} from "redux"
import messagesReducer from "./MessagesReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";

let reducers = combineReducers({
    profile : profileReducer,
    messages : messagesReducer,
    usersPage : usersReducer
});

let store = createStore(reducers);

export default store;