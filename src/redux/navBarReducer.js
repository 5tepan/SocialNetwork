
let initialState = {
    navBar: {
        navBarData: [
            {id: 1, path: '/profile', title: 'Profile'},
            {id: 2, path: '/dialogs', title: 'Messages'},
            {id: 3, path: '/news', title: 'News'},
            {id: 4, path: '/music', title: 'Music'},
            {id: 5, path: '/settings', title: 'Settings'}
        ]
    }
}

const navBarReducer = (state = initialState, action) => {


    return state
}

export default navBarReducer