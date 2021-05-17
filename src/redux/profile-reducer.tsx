import {v1} from "uuid";
import {ActionsTypes, PostsType, ProfileType} from "./state";

export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}
export const newTextChangeHandlerAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}


export const profileReducer = (state: ProfileType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText = action.postText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = "";
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default: return state;
    }


    return state;
}