const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: body}],
                newMessageBody: ''
            }

        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer