const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}
// let initialState = {
//     users: [
//         {
//             id: 1,
//             urlFoto: 'https://fgtcabinetry.com/wp-content/uploads/2022/06/testi-user.png',
//             followed: false,
//             fullName: 'Step',
//             status: 'yoyo',
//             location: {city: 'Minsk', country: 'Belarus'}
//         },
//         {
//             id: 2,
//             urlFoto: 'https://fgtcabinetry.com/wp-content/uploads/2022/06/testi-user.png',
//             followed: true,
//             fullName: 'Andrey',
//             status: 'hihi',
//             location: {city: 'Moskou', country: 'Russia'}
//         },
//         {
//             id: 3,
//             urlFoto: 'https://fgtcabinetry.com/wp-content/uploads/2022/06/testi-user.png',
//             followed: false,
//             fullName: 'Samanta',
//             status: 'hallo',
//             location: {city: 'Berlin', country: 'Germany'}
//         }
//     ]
// }

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer