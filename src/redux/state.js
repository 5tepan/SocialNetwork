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
                {id: 3, message: 'Zdarova zaebal!'}
            ],
            dialogsData: [
                {id: 1, name: 'Step'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Denis'},
                {id: 4, name: 'Irina'}
            ]
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
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed!')
    },
    AddPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0
        }

        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}


export default store

window.store = store