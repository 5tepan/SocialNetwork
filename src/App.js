import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {updateNewPostText} from "./redux/state";

function App(props) {
    return (
        <BrowserRouter>
            <div className="AppWrapper">
                <Header/>
                <NavBar state={props.state.navBar}/>
                <div className='AppWrapperContent'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs state={props.state.messagePage}/>}/>
                        <Route path='/profile'
                               element={<Profile addPost={props.addPost} state={props.state.profilePage}
                                                 updateNewPostText={props.updateNewPostText}/>}/>
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
