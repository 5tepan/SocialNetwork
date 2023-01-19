import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/state";


function App() {
    return (
        <BrowserRouter>
            <div className="AppWrapper">
                <Header/>
                <NavBar state={store._state.navBar}/>
                <div className='AppWrapperContent'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<DialogsContainer/>}/>
                        <Route path='/profile'
                               element={<Profile/>}/>
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
