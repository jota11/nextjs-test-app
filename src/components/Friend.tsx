import React from "react";
import userStyles from "@styles/Users.module.scss";

interface Props {
    link: string,
    avatar: string,
    name: string
}

const Friend: React.FC<Props> = ({ link, avatar, name }) => {
    return (
        <a href={/users/ + link}>
            <div className={userStyles.friend}>
                <img alt={name + "'s Avatar"} src={avatar} />
                <span>{name}</span>
            </div>
        </a>
    )
}

export default Friend