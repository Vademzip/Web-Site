const UPDATE_MESSAGE_TEXT_AREA = 'UPDATE-MESSAGE-TEXT-AREA';
const SEND_MESSAGE = 'SEND-MESSAGE  ';

let initState = {
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
    newMessageText : 'te1xtere'
}

const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT_AREA: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessageText;
            return  stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.messagesData.push({id: 4, message: state.newMessageText})
            stateCopy.newMessageText = "";
            return stateCopy
        }
    }

    return state;
}

export const UpdateMessageTextCreator = (text) => ({type : UPDATE_MESSAGE_TEXT_AREA, newMessageText : text})
export const SendMessageCreator = () => ({type : SEND_MESSAGE})

export default messagesReducer;