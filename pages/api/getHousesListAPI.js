// import { PrismaClient } from "@prisma/client";
import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../../components/prismaClient'
// const user = useUser();

const getHousesListAPI = async (req, res) => {
    const session = getSession(req, res);
    // console.log("here's req:");
    // console.log(session);
    // const { user } = useUser();
    // const prisma = await new PrismaClient();
    const houses = await prisma.houses.findMany({
        where: {
            teamid: session.user.id,
            buildingId: parseInt(req.headers.referer.split("/").slice(4).join("/")),
        },
    });

    // console.log(buildings);
    if (houses) {
        // console.log("here's buildings:");
        // console.log(buildings);
        // session.user.buildingIDs = [];
        // buildings.map(building => session.user.buildingIDs.push(building.id))
        // console.log(session.user);
        // res.buildings = JSON.stringify(buildings);
        // console.log(res.buildings);
        res.json({ houses: JSON.stringify(houses) });
        // console.log("heeeho:");
        // console.log(res.user);
        await prisma.$disconnect();
        return res;
    }
    res.json({ houses: null });

    await prisma.$disconnect();
    return res;
}
export default getHousesListAPI;