import profileReducer from "./ProfileReducer";
import messagesReducer from "./MessagesReducer";

let store = {
    _state: {
        profile: {
            postsData: [
                {id: 1, message: 'Hi,my homies!', likesCount: 23},
                {id: 2, message: 'My new post guys', likesCount: 4},
            ],
            newPostText: ''
        },
        messages: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Vadem',
                    img: 'https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-4.jpg'
                },
                {id: 2, name: 'Serker', img: "https://cdn1.flamp.ru/84e553da423a3db7897b711ea346fdb8.jpg"},
                {id: 3, name: 'Igor', img: "https://coolsen.ru/wp-content/uploads/2021/06/4-7.jpg"}
            ],
            messagesData: [
                {id: 1, message: 'Hi bro'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Go drink beer'}
            ],
                newMessageText : 'texthere'
        }
    },

    _callSubscriber() {
        console.log("state has been changed")
     },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action)
    { // { type : 'ADD-POST' }
        this._state.profile = profileReducer(this._state.profile,action);
        this._state.messages = messagesReducer(this._state.messages,action);
                this._callSubscriber(this._state);
    }




}





export default store;
