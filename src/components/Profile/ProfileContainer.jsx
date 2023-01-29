import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import {profileAPI} from "../../api/ProfileAPI";


const ProfileContainer = (props) => {

    const params = useParams()

    // на случай, если айдишник не пришёл
    if (!params.userId) {
        params.userId = '27675'
    }

    useEffect(() => {
        profileAPI.getProfile(params.userId).then(data=> {props.setUserProfile(data)});
    })

    return (
        <Profile profile= {props.profile} />
    );
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)