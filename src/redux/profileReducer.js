import {profileAPI} from "../api/ProfileAPI";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postData: [
        {id: 1, message: 'Hi!', like: 11},
        {id: 2, message: 'How are your?', like: 55},
        {id: 3, message: 'Zdarova zaebal!', like: 2}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [
                    ...state.postData,
                    {
                        id: 5,
                        message: state.newPostText,
                        like: 0
                    }],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfileTunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data=> {dispatch(setUserProfile(data))})
    }
}

export default profileReducer