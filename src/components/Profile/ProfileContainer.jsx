import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTunk} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";


const ProfileContainer = (props) => {

    const params = useParams()

    // на случай, если айдишник не пришёл
    if (!params.userId) {
        params.userId = '27675'
    }

    useEffect(() => {
        props.getProfileTunk(params.userId)
    })

    return (
        <Profile profile= {props.profile} />
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, {getProfileTunk}),
    withAuthNavigate
)(ProfileContainer)