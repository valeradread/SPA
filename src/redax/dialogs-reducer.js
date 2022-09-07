const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: 'HI'},
        {id: 2, message: 'Fuck you'},
        {id: 3, message: 'I have a baby'},
    ],
    dialogs: [
        {
            id: 1,
            name: 'McLovin',
            photo: 'https://pbs.twimg.com/profile_images/1428723840587341829/x7meOYNe_400x400.jpg'
        },
        {
            id: 2,
            name: 'McFucker',
            photo: 'https://papik.pro/uploads/posts/2021-09/1630739898_10-papik-pro-p-avatarki-anime-risunki-14.png'
        },
        {
            id: 3,
            name: 'Vitya',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmc93w4iZ-QgZ63sQ5ia7baprOjDc-Wsc7w&usqp=CAU'
        },
        {
            id: 4,
            name: 'Zub',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONU6zD2Pqc15jFLRDhmqupwV7PbBq-HEIMQ&usqp=CAU'
        },
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            let newMessage = {
                id: 4,
                message: stateCopy.newMessageText
            }
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        default:
            return state;

    }

}

export const printTextMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    }
}

export const sendMessageActionCreator = (text) => {

    return {
        type: SEND_MESSAGE,
        newText: text,
    }
}

export default dialogsReducer;