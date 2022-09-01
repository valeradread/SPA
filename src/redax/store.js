import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'hi, fuck you', likesCount: '12'},
                {id: 2, message: 'Fuck you one more time', likesCount: '666'},
            ],
            newPostText: 'i hate russia',
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}



export  default  store;
window.store = store;