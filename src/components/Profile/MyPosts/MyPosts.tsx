import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfileType} from "../../../redux/state";

export type PropsType = ProfileType & {
    addPost: (postText: string) => void;
    ChangeAddPost:(newText: string) => void;
    updateNewPostText: (newText: string) => void
}


const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

// let newPostElement= React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPost(props.newPostText);
    };

    const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {props.ChangeAddPost
        (e.currentTarget.value)
    }
/*let onPostChange = () => {
    props.addPost(props.newPostText)*/


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChangeHandler}  value={props.newPostText}></textarea>
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