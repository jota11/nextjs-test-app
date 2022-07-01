import { NextPage } from "next";
import Head from "next/head";
import UserCard from "@components/UserCard";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

type Props = {
    users: User[];
}

const UsersPage: NextPage<Props> = ({users}) => {
    return (
        <main>
            <Head>
                <title>Users List</title>
            </Head>
            {users.map((u: User) => (
                <UserCard
                    key={u.id}
                    link={u.id.toString()}
                    avatar={u.avatar}
                    joinDate={u.createdAt.toString().slice(0, 4)}
                    name={u.name}
                    username={u.username}
                />
            ))}
        </main>
    );
}

// export async function getStaticProps() {
export async function getServerSideProps() {
    const users = await prisma.user.findMany();
    // console.log(users);
    return {
        props: {
            users: JSON.parse(JSON.stringify(users))
        }
    }
}

export default UsersPage;