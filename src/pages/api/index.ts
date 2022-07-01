import { NextApiRequest, NextApiResponse } from "next";
import { API } from "@config/config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        switch (req.method) {
            case "GET":
                res.status(200).send("OK");
                break;

            default:
                res.status(405).send(API.APIMessages[405]);
                break;
        }
    } catch (e) {
        res.status(422).send(API.APIMessages[422]);
    }
}
