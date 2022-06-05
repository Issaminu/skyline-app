// import { PrismaClient } from "@prisma/client";
import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../../components/prismaClient'
// const user = useUser();

const getResidentsListAPI = async (req, res) => {
    const session = getSession(req, res);
    // console.log("here's req:");
    // console.log(session);
    // const { user } = useUser();
    // const prisma = await new PrismaClient();
    // const building = await prisma.building.findUnique({
    //     where: {
    //         id: parseInt(req.headers.referer.split("/").slice(4).join("/")),
    //         residentIDs: {
    //             contains: String(session.user.id)
    //         }
    //     },
    //     select: {
    //         creatorId: true,
    //         adminIDs: true,
    //         residentIDs: true,
    //     }
    // });
    // console.log(req.body);
    const users = await prisma.users.findMany({
        where: {
            id: {
                in: req.body.residentIDsArray
            }
        },
        select: {
            id: true,
            name: true,
            image: true,
            // accountStatus: true,
            phone: true,
        }
    })
    // console.log(buildings);
    if (users) {
        // console.log("here's buildings:");
        // console.log(buildings);
        // session.user.buildingIDs = [];
        // buildings.map(building => session.user.buildingIDs.push(building.id))
        // console.log(session.user);
        // res.buildings = JSON.stringify(buildings);
        // console.log(res.buildings);
        res.json({ residents: JSON.stringify(users) });
        // console.log("heeeho:");
        // console.log(res.user);
        await prisma.$disconnect();
        return res;
    }
    res.json({ residents: null });

    await prisma.$disconnect();
    return res;
}
export default getResidentsListAPI;