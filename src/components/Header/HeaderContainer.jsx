import React from "react";
import Header from "./Header";
import { useEffect } from 'react';
import {connect} from "react-redux";
import {getHeaderTunk, setAuthUserData} from "../../redux/authReducer";


const HeaderContainer = (props) => {

    useEffect(() => {
        props.getHeaderTunk()
    })

    return (
        <Header props={props} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{setAuthUserData, getHeaderTunk})(HeaderContainer)