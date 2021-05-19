import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import state, {StateType, store, StoreType} from './redux/state'

export const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


rerenderEntireTree();

store.subscriber(() => {
   let state = store.getState ();
    rerenderEntireTree()});