import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/state";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="AppWrapper">
                <HeaderContainer/>
                <NavBar state={store._state.navBar}/>
                <div className='AppWrapperContent'>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/profile/'>
                            <Route path=":userId" element={<ProfileContainer/>} />
                            <Route path="me" element={<ProfileContainer/> }/>
                        </Route>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
