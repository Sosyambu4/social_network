import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/state";

export type ProfilePropsType = {
    stateProfilePage: ProfileType
    addPost:(postText: string) => void;
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.stateProfilePage.posts} addPost={props.addPost} />
        </div>
    )
}

export default Profile;