import React from "react";
import style from './NavBarItem.module.css';
import {NavLink} from "react-router-dom";


const NavBarItem = (props) => {
    return (
        <div className={style.Item}>
            <NavLink
                to={props.path}
                className={navData => navData.isActive ? style.ActiveLink : style.Item}
            >
                {props.title}
            </NavLink>
        </div>
    )
}

export default NavBarItem