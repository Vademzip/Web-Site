import {SendMessageCreator, UpdateMessageTextCreator} from "../../Redux/MessagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages :  state.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTextArea : () => {dispatch(SendMessageCreator())},
        onCLickSendMessage : (NewText_in_TextArea) => {dispatch(UpdateMessageTextCreator(NewText_in_TextArea))
        }
    }
}
const dialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default dialogsContainer;