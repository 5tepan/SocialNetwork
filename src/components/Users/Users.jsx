import React from "react";
import style from './Users.module.css'

const Users = (props) => {
debugger
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    urlFoto: 'https://fgtcabinetry.com/wp-content/uploads/2022/06/testi-user.png',
                    followed: false,
                    fullName: 'Step',
                    status: 'yoyo',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    urlFoto: 'https://fgtcabinetry.com/wp-content/uploads/2022/06/testi-user.png',
                    followed: true,
                    fullName: 'Andrey',
                    status: 'hihi',
                    location: {city: 'Moskou', country: 'Russia'}
                },
                {
                    id: 3,
                    urlFoto: 'https://fgtcabinetry.com/wp-content/uploads/2022/06/testi-user.png',
                    followed: false,
                    fullName: 'Samanta',
                    status: 'hallo',
                    location: {city: 'Berlin', country: 'Germany'}
                }
            ]
        )
    }
debugger
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={style.userFoto} src={user.urlFoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unFollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users