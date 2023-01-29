import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={style.Header}>
            <header>
                <img src='https://2.downloader.disk.yandex.ru/preview/42401273cc218d51ecb4a05bc5a0be82ae41879101b176bc7a2932dbeb71c97a/inf/ODsHxtLy4uMRM96oFRcBguXq1OORcL8qME-G-pPQraMGrTBZTg5dOFYbUlNzdxfdbQaujzZBmUkUxlvAgxiX4g%3D%3D?uid=680938212&filename=pngwingcom.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=680938212&tknv=v2&size=3814x1939' />
                <div className={style.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        </div>
    )
}

export default Header