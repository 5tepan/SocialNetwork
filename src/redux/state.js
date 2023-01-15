const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            }

            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }

        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagePage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }

        else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagePage.newMessageBody
            this._state.messagePage.newMessageBody = ''
            this._state.messagePage.messagesData.push({id: 5, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store

window.store = store