import React from "react";
import {addPostActionCreator, updateTextActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateTextPost: (text) => {dispatch(updateTextActionCreator(text))},
        addPost: () => {dispatch(addPostActionCreator())}
    }
}

const myPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default myPostsContainer;