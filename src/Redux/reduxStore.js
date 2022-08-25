import {combineReducers, legacy_createStore as createStore} from "redux"
import messagesReducer from "./MessagesReducer";
import profileReducer from "./ProfileReducer";

let reducers = combineReducers({
    profile : profileReducer,
    messages : messagesReducer
});

let store = createStore(reducers);

export default store;