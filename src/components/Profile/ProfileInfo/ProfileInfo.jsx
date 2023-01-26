import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src='https://nben.ca/images/sec-header/img-header-1.jpg'/>
            </div>
            <div>
                {props.profile.fullName}
            </div>
            <div className={style.DescriptionBlock}>
                <img src={props.profile.photos.large}/>
                avatar + description
            </div>
            <div>
                {props.profile.aboutMe}
            </div>
            <div className={style.infoBlock}>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.website}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.contacts.youtube}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.mainLink}</div>
            </div>
            <div>
                {props.profile.lookingForAJobDescription}
            </div>
        </div>
    )
}

export default ProfileInfo