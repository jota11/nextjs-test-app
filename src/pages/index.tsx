import type { NextPage } from "next"
import Link from "next/link";
import styles from "@styles/Home.module.scss"
import ButtonItem from "@components/ButtonItem";
import { navLinks } from "@config/config";

const Home: NextPage = () => {
    return (
        <main className={styles.main}>
            <Link href="https://github.com/jota11/nextjs-test-app">
                <a className="github-label" rel="noopener noreferrer" target="_blank"></a>
            </Link>
            <h1 className={styles.title}>Next.js testings</h1>
            <section className={styles.tests}>
                {navLinks.map((link, index) => {
                    return (
                        <ButtonItem
                            key={index}
                            url={link.path}
                            title={link.title}
                            description={link.description}
                        />
                    );
                })}
            </section>
        </main>
    )
}

export default Home
