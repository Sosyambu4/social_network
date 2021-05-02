import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfileType} from "../../../redux/state";

export type PropsType = ProfileType & {
    addPost:(postText: string) => void;
}


const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onClickAddPost = () => {
        if(newPostElement.current){
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = ' ' ;
        }
    };
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div >
                    <button onClick={onClickAddPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>)
}

export default MyPosts;