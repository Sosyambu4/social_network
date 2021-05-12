import React from "react";
import {v1} from "uuid";
import {access} from "fs";

export type DialogItemType = {
    id: string;
    name: string;
}
export type StateType = {
    profilePage: ProfileType;
    messagesPage: DialogsPageType;

}
export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>
}
export type DialogType = {
    name: string;
    id: string;
}
export type MessageType = {
    message: string;
    id?: string;
}
export type ProfileType = {
    posts: Array<PostsType>
    newPostText: string;

}
export type PostsType = {
    message: string;
    likesCount: number;
    id?: string;
}
export type StoreType = {
    _state: StateType;
    getState: () => StateType;
    subscriber: (observer: () => void) => void;
    callSubscriber: () => void;
    dispatch: (action: ActionsTypes) => void;

}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof newTextChangeHandlerAC>


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


export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "",
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
    },
    callSubscriber() {
        console.log('Test')
    },
    subscriber(observer) {
        this.callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) { //type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: v1(),
                message: this._state.profilePage.newPostText = action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this.callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this.callSubscriber();
        }
        ;

    }
}


export default store;