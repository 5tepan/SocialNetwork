import React from "react";
import Header from "./Header";
import { useEffect } from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";


const HeaderContainer = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    props.setAuthUserData(id, email, login)
                }
            });
    })

    return (
        <Header props={props} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)