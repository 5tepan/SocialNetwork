import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Posts";


const MyPosts = (props) => {
    let postElem = props.postData.map(post => <Post message={post.message} like={post.like} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChang = () => {
        let text = newPostElement.current.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }

    return (
        <div className={style.PostsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChang} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Добавить пост</button>
                </div>
            </div>
            <div>
                new post
            </div>
            <div className={style.Posts}>
                {postElem}
            </div>
        </div>
    )
}


export default MyPosts