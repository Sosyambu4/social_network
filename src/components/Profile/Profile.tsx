import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfileType} from "../../redux/state";

export type ProfilePropsType = {
    stateProfilePage: ProfileType
    dispatch: (action: ActionsTypes) => void;

}

const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.stateProfilePage.posts}
                    newPostText={props.stateProfilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;