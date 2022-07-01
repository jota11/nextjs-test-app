import React from "react";
import postStyles from "@styles/Post.module.scss";

interface Props {
    title: string,
    date: string,
    content: string
}

const Post: React.FC<Props> = ({ title, date, content }) => {
    return (
        <article className={postStyles.post}>
            <section className={postStyles.info}>
                <h2 className={postStyles.title}>{title}</h2>
                <span className={postStyles.date}>{date}</span>
            </section>
            <p className={postStyles.content}>{content}</p>
        </article>
    )
}

export default Post