import React from "react";
import {v1} from "uuid";




export type DialogItemType = {
    id: string;
    name: string;
}


export type StateType = {
 profilePage: ProfileType;
 messagesPage:DialogsPageType;


};
export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>
};

export type DialogType = {
    name: string;
    id: string;
};
export type MessageType = {
    message: string;
    id?:string;
}
export type ProfileType = {
    posts:Array<PostsType>
}
export type PostsType = {
    message: string;
    likesCount: number;
        id?: string;
}
/*export type PostType = {
    message: string
    likesCount: number
    id: string
}*/

let rerenderEntireTree = () => {
    console.log("State changed")
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hi,how are you?", likesCount: 12},
            {id: v1(), message: "It's my first post", likesCount: 10}],
        },
    messagesPage: {
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your it-kamasutra'},
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'Yo'}],
        dialogs: [
            {id: v1(), name: 'Tomek'},
            {id: v1(), name: 'Kamila'},
            {id: v1(), name: 'Pzemek'},
            {id: v1(), name: 'Pawel'},
            {id: v1(), name: 'Karolina'},
            {id: v1(), name: 'Wladyslaw'}
        ]
    }

}

export const addPost = (postText: string) => {
    let newPost: PostsType = {
        id:v1(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost) ;
    rerenderEntireTree();

};

export const subscribe =  (observer: () => void) => {
    rerenderEntireTree = observer;
}

export default state;