import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';


const ProfileContainer = (props) => {

    const params = useParams()

    // на случай, если айдишник не пришёл
    if (!params.userId) {
        params.userId = '27675'
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
            .then(response=> {props.setUserProfile(response.data)});
    })

    return (
        <Profile profile= {props.profile} />
    );
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)