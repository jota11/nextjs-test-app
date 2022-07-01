import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { API } from "@config/config";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        switch (req.method) {
            case "GET":
                const users = await prisma.user.findMany();
                res.status(200).send(users);
                break;
                
            case "POST":
                const newUser = await prisma.user.create({
                    data: {
                        name: req.body.name,
                        email: req.body.email,
                        username: req.body.username,
                        password: req.body.password
                    }
                });
                res.status(201).send(newUser);
                break;
                
            default:
                res.status(405).send(API.APIMessages[405]);
                break;
        }
    } catch (e) {
        res.status(422).send(API.APIMessages[422]);
    }
}
