import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ChangeAddPost, ProfileType} from "../../redux/state";

export type ProfilePropsType = {
    stateProfilePage: ProfileType
    addPost:(postText: string) => void;

    updateNewPostText: (newText: string) => void
    ChangeAddPost:(newText: string) => void;
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.stateProfilePage.posts}
                    newPostText={props.stateProfilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     ChangeAddPost={ChangeAddPost}
                     addPost={props.addPost} />
        </div>
    )
}

export default Profile;