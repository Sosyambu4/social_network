import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, StateType, subscribe} from './redux/state';

export const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};



rerenderEntireTree();

subscribe(rerenderEntireTree);

