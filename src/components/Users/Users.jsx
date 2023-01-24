import React from "react";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/default-user.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);

        return (
            <div>
                <div className={style.paginationBlock}>
                    {slicedPages.map(p => {
                        return <span
                            className={this.props.currentPage === p && style.selectedName}
                            onClick={() => {this.onPageChanged(p)}}
                                >
                            {p}
                        </span>
                    })}
                </div>
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