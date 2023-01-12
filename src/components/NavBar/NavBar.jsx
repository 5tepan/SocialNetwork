import React from "react";
import style from './NavBar.module.css'
import NavBarItem from "./NavBarItem/NavBarItem";


const NavBar = (props) => {

    let navBarItem = props.state.navBarData.map(navBar => <NavBarItem path={navBar.path} title={navBar.title} />)

    return (
        <div className={style.Nav}>
            <nav>
                <div>
                    {navBarItem}
                </div>
            </nav>
        </div>
    )
}

export default NavBar