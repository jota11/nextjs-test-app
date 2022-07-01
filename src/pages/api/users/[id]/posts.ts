import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { API } from "@config/config";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = (req.query);
    const parsedId = parseInt(id as string);
    if (isNaN(parsedId)) return res.status(400).send("ID must be a number");

    try {
        switch (req.method) {
            case "GET":
                const postsFromUser = await prisma.posts.findMany({
                    where: {
                        authorId: parsedId
                    }
                });
                postsFromUser ? res.status(200).send(postsFromUser) : res.status(400).send("Error");
                break;

            default:
                res.status(405).send(API.APIMessages[405]);
                break;
        }
    } catch (e) {
        res.status(422).send(API.APIMessages[422]);
    }
}
