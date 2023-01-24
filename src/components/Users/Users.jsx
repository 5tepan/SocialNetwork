import React from "react";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/default-user.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={
                                user.photos.small != null ? user.photos.small : userPhoto}
                                 className={style.userFoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
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
}


export default Users