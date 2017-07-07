import * as React from 'react'

interface UserDescription {
    avatarUrl: string,
    name: string
}

export interface CommentProps {
    author: UserDescription,
    text: string,
    date: Date
}

function Avatar(props: UserDescription) {
    return (
        <img className="Avatar"
            src={props.avatarUrl}
            alt={props.name}
        />
    );
}

function UserInfo(props: UserDescription) {
    return (
        <div className="UserInfo">
            <Avatar avatarUrl={props.avatarUrl} name={props.name} />
            <div className="UserInfo-name">
                {props.name}
            </div>
        </div>
    );
}

export function Comment(props: CommentProps) {
    return (
        <div className="Comment">
            <UserInfo avatarUrl={props.author.avatarUrl} name={props.author.name} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date.toDateString()}
            </div>
        </div>
    );
}