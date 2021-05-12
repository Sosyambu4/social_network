import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, addPostAC, newTextChangeHandlerAC, ProfileType} from "../../../redux/state";

export type PropsType = ProfileType & {


    dispatch: (action: ActionsTypes) => void;
}


const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    let addPost = () => {
        props.dispatch((addPostAC)(props.newPostText))
    };

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        props.dispatch((newTextChangeHandlerAC)(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChangeHandler} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>)
}

export default MyPosts;