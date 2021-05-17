import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, store, StoreType} from "./redux/state";
import {News} from './components/New/New';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Setting/Setting";

export type AppType = {
    state: StoreType;
    dispatch: (action: ActionsTypes) => void;

}
const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs stateMessagesPage={props.state.state.messagesPage}
                           dispatch={props.state.dispatch.bind(props.state)}
                                                  onChange={props.state.state.messagesPage.newMessageBody}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile stateProfilePage={props.state.state.profilePage}
                                                  dispatch={props.state.dispatch.bind(props.state)}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
