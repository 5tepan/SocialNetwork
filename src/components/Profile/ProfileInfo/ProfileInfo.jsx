import React from "react";
import style from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://nben.ca/images/sec-header/img-header-1.jpg'/>
            </div>
            <div className={style.DescriptionBlock}>
                avatar + descrip
            </div>
        </div>
    )
}

export default ProfileInfo