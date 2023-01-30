import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTunk} from "../../redux/profileReducer";
import {Navigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';


const ProfileContainer = (props) => {

    const params = useParams()

    // на случай, если айдишник не пришёл
    if (!params.userId) {
        params.userId = '27675'
    }

    useEffect(() => {
        props.getProfileTunk(params.userId)
    })

    if (!props.isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (
        <Profile profile= {props.profile} />
    );
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {getProfileTunk})(ProfileContainer)