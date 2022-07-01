import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { API } from "@config/config";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = (req.query);
    const parsedID = parseInt(id as string);
    if (isNaN(parsedID)) return res.status(400).send("ID must be a number");

    try {
        switch (req.method) {
            case "GET":
                const user = await prisma.user.findUnique({
                    where: {
                        id: parsedID
                    }
                });
                user ? res.status(200).send(user) : res.status(404).send("User not found!");
                break;

            case "DELETE":
                const deleteUser = await prisma.user.delete({
                    where: {
                        id: parsedID
                    },
                    select: {
                        name: true,
                        username: true,
                        email: true
                    }
                });
                res.status(201).send(deleteUser);
                break;

            case "PATCH":
                const patchUser = await prisma.user.update({
                    where: {
                        id: parsedID
                    },
                    data: {
                        name: req.body.name,
                        email: req.body.email,
                        username: req.body.username,
                        password: req.body.password
                    }
                });
                res.status(200).send(patchUser);
                break;

            default:
                res.status(405).send(API.APIMessages[405]);
                break;
        }
    } catch (e) {
        res.status(422).send(API.APIMessages[422]);
    }
}
