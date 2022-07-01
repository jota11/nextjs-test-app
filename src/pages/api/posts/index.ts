import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { API } from "@config/config";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        switch (req.method) {
            case "GET":
                const posts = await prisma.posts.findMany();
                posts ? res.status(200).send(posts) : res.status(404).send("No posts found!");
                break;

            case "POST":
                const newPost = await prisma.posts.create({
                    data: {
                        authorId: req.body.authorId,
                        title: req.body.title,
                        content: req.body.content
                    }
                });
                res.status(201).send(newPost);
                break;

            default:
                res.status(405).send(API.APIMessages[405]);
                break;
        }
    } catch (e) {
        res.status(422).send(API.APIMessages[422]);
    }
}
