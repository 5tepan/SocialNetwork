import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi!', like: 11},
                {id: 2, message: 'How are your?', like: 55},
                {id: 3, message: 'Zdarova zaebal!', like: 2}
            ],
            newPostText: ''
        },
        messagePage: {
            messagesData: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are your?'},
                {id: 3, message: 'Zdarova zaebal!'},
                {id: 4, message: 'Mandarin'}
            ],
            dialogsData: [
                {id: 1, name: 'Step'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Denis'},
                {id: 4, name: 'Irina'}
            ],
            newMessageBody: ''
        },
        navBar: {
            navBarData: [
                {id: 1, path: '/profile', title: 'Profile'},
                {id: 2, path: '/dialogs', title: 'Messages'},
                {id: 5, path: '/users', title: 'Users'},
                {id: 3, path: '/news', title: 'News'},
                {id: 4, path: '/music', title: 'Music'},
                {id: 5, path: '/settings', title: 'Settings'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed!')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._state.navBar = navBarReducer(this._state.navBar, action)

        this._callSubscriber(this._state)
    }
}

export default store

window.store = store