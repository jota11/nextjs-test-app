import React from "react";
import userStyles from "@styles/Users.module.scss";

interface Props {
    link: string,
    avatar: string,
    joinDate: string,
    name: string,
    username: string
}

const Friend: React.FC<Props> = ({ link, avatar, joinDate, name, username }) => {
    return (
        <div>
            <a className={userStyles.card} href={"/users/" + link}>
                <section className={userStyles.info}>
                    <img alt={name + "'s Avatar"} src={avatar} />
                    <span className={userStyles.joindate}>Since {joinDate}</span>
                </section>
                <section className={userStyles.details}>
                    <p className={userStyles.name}>{name}</p>
                    <span className={userStyles.username}>@{username}</span>
                </section>
            </a>
        </div>
    )
}

export default Friend