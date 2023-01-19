import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    let action = updateNewPostActionCreator(text)
                    store.dispatch(action)
                }

                return <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 postData={store.getState().profilePage.postData}
                                 newPostText={store.getState().profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer