import React from "react";
import Header from "./Header";
import { useEffect } from 'react';
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {headerAPI} from "../../api/HeaderAPI";


const HeaderContainer = (props) => {

    useEffect(() => {
        headerAPI.getHeader().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
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