const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';

let initState = {
    postsData: [
        {id: 1, message: 'Hi,my homies!', likesCount: 23},
        {id: 2, message: 'My new post guys', likesCount: 4},
    ],
    newPostText: ''
}

    const profileReducer = (state = initState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = ""
            return stateCopy
        }
        case UPDATE_TEXT_AREA: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        }


    return state;
}

export const addPostActionCreator = () => ({type : ADD_POST});
export const updateTextActionCreator = (text) => ({type : UPDATE_TEXT_AREA, newText : text})

export default profileReducer;
