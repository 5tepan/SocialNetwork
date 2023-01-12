import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/state";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App updateNewPostText={store.updateNewPostText.bind(store)} state={store.getState()}
                 addPost={store.AddPost.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

reportWebVitals();
