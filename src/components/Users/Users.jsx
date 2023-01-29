import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/default-user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curP = props.currentPage
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5
    let curPL = curP + 5
    let slicedPages = pages.slice( curPF, curPL)

    return (
        <div>
            <div className={style.paginationBlock}>
                {slicedPages.map(p => {
                    return <span
                        className={props.currentPage === p && style.selectedName}
                        onClick={() => {props.onPageChanged(p)}}
                    >
                            {p}
                        </span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={
                                    user.photos.small != null ? user.photos.small : userPhoto}
                                     className={style.userFoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "0e80eca8-bc0a-4e06-8d26-63d07db5fb0d"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(user.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "0e80eca8-bc0a-4e06-8d26-63d07db5fb0d"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                        })
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </div>)
            }
        </div>
    )
}


export default Users