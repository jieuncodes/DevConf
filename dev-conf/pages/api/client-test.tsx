import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse ){
    await client.conference.create({
        data:{
            title: "testTitle",
            online: true,
            site: "www.homepage.com",
            techStacks: "Python",
            uploaderInfo: "J"
        }
    });
    res.json({
        ok:true,
    })
}
    
