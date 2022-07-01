import { GetServerSidePropsContext, GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import userStyles from "@styles/Users.module.scss";
import Post from "@components/Post";
import Friend from "@components/Friend";
import { PrismaClient, User, Posts } from "@prisma/client";

const prisma = new PrismaClient();

type Props = {
    user: User;
    users: User[];
    userPosts: Posts[];
}

const UserPage: NextPage<Props> = ({ user, users, userPosts }) => {
    return (
        <main>
            <Head>
                <title>User Profile - {user.name}</title>
            </Head>
            <div id={userStyles.profile}>
                <section id={userStyles.banner}>
                    <div id={userStyles.user_info_card}>
                        <img alt="User's Avatar" src={user.avatar} />
                        <h1>{user.name}</h1>
                        <h2>@{user.username}</h2>
                    </div>
                </section>
                <section id={userStyles.main}>
                    <section id={userStyles.friends}>
                        {users.map((u: User) => (
                            <Friend
                                key={u.id}
                                link={u.id.toString()}
                                avatar={u.avatar}
                                name={u.name}
                            />
                        ))}
                    </section>
                    <section id={userStyles.posts}>
                        {userPosts.map((post: Posts) => (
                            <Post
                                key={post.id}
                                title={post.title}
                                date={post.createdAt.toString().slice(0, 10)}
                                content={post.content}
                            />
                        ))}
                    </section>
                </section>
            </div>
        </main>
    );

}

// export async function getStaticProps(context: GetStaticPropsContext) {
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const id = context.params!.id;
    const parsedId = parseInt(id as string);
    const user = await prisma.user.findUnique({
        where: {
            id: parsedId
        }
    });
    const users = await prisma.user.findMany();
    const userPosts = await prisma.posts.findMany({
        where: {
            authorId: parsedId
        }
    });
    // console.log("User:", user);
    // console.log("Users:", users);
    // console.log("User's Posts:", userPosts);
    return {
        props: {
            user: JSON.parse(JSON.stringify(user)),
            users: JSON.parse(JSON.stringify(users)),
            userPosts: JSON.parse(JSON.stringify(userPosts))
        }
    }
}

// export async function getStaticPaths() {
//     const users = await prisma.user.findMany();
//     const paths = users.map((data: User) => ({
//         params: { id: data.id.toString() }
//     }));
//     // console.log(paths);
//     return {
//         paths,
//         fallback: false
//     }
// }

export default UserPage;