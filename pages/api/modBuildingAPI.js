// import { PrismaClient } from "@prisma/client";
import prisma from '../../components/prismaClient'
import { getSession } from '@auth0/nextjs-auth0';

const modBuildingAPI = async (req, res) => {
    const session = getSession(req, res);

    // console.log("here's req:");
    // console.log(session.req.body.name);
    let currentdate = new Date();
    currentdate = currentdate.toISOString();
    // const prisma = await new PrismaClient();

    const building = await prisma.buildings.update({ //upsert() is Prisma's create if not exist
        where: {
            id: req.body.id,
        },
        data: {
            name: req.body.name,
            location: req.body.location,
            // thumbnail: "/defaultBuilding.jpg",
            images: "TEMP",
            // floors: req.body.floors,
            surface: req.body.surface,
            // houseQuantity: req.body.houses,
            rent: parseFloat(req.body.rent),
            houseSize: parseFloat(req.body.size),
            houseIDs: "TEMP",
            userIDs: "TEMP",
            populationTotal: 0,
            notes: req.body.notes,
            teamid: req.body.teamid,
            create_time: currentdate,
            update_time: currentdate,
        },
    });
    const houses = await prisma.houses.updateMany({
        where: {
            buildingId: req.body.id,
        },
        data: {
            location: req.body.location,
            buildingName: req.body.name,
            size: parseFloat(req.body.size),
            buildingSurface: req.body.surface,
            priceRent: parseFloat(req.body.rent),
        }

    })
    if (building) {
        // session.user.buildingIDs.push(building.id);
        // session.save();
        // console.log(session.user.buildingIDs)
        res.building = building;
        res.json({ building: building });
        // console.log("heeeho:");
        // console.log(res.user);
        prisma.$disconnect();
        return res;
    }
    res.json({ building: null });

    prisma.$disconnect();
    return res;
}
export default modBuildingAPI;