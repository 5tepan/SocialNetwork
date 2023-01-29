import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    navBar: navBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

window.store = store

export default store