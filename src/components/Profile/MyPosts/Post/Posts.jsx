import React from "react";
import style from './Post.module.css'


const Post = (props) => {
    return (
        <div className={style.Item}>
            {props.message}
            <div>
                <span>Likes</span> {props.like}
            </div>
        </div>
    )
}


export default Post