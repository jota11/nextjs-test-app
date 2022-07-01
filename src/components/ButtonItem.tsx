import React from "react";
import Link from "next/link"
import styles from "@styles/Home.module.scss";

interface Props {
    url: string,
    title?: string,
    description?: string
}

const ButtonItem: React.FC<Props> = ({url, title, description}) => {
    return (
        <Link href={url}>
            <a className={styles.item + " center"}>
                <p>{title}</p>
                <span>{description}</span>
            </a>
        </Link>
    )
}

export default ButtonItem
