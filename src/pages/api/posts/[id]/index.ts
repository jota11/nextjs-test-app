import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { API } from "@config/config";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = (req.query);
    const parsedId = parseInt(id as string); // yes
    if (isNaN(parsedId)) return res.status(400).send("ID must be a number");

    try {
        switch (req.method) {
            case "GET":
                const post = await prisma.posts.findUnique({
                    where: {
                        id: parsedId
                    }
                });
                post ? res.status(200).send(post) : res.status(404).send("Post not found!");
                break;

            case "DELETE":
                const deletePost = await prisma.posts.delete({
                    where: {
                        id: parsedId
                    },
                    select: {
                        id: true,
                        authorId: true,
                        title: true,
                        content: true
                    }
                });
                res.status(200).send(deletePost);
                break;

            case "PATCH":
                const patchPost = await prisma.posts.update({
                    where: {
                        id: parsedId
                    },
                    data: {
                        title: req.body.title,
                        content: req.body.content
                    }
                });
                res.status(200).send(patchPost);
                break;

            default:
                res.status(405).send(API.APIMessages[405]);
                break;
        }
    } catch (e) {
        res.status(422).send(API.APIMessages[422]);
    }
}
