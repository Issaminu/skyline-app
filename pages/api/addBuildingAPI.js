// import { PrismaClient } from "@prisma/client";
import prisma from '../../components/prismaClient'
import { getSession } from '@auth0/nextjs-auth0';

const addBuildingAPI = async (req, res) => {
    const session = getSession(req, res);

    // console.log("here's req:");
    // console.log(session.req.body.name);
    let currentdate = new Date();
    currentdate = currentdate.toISOString();
    // const prisma = await new PrismaClient();
    // const sourceBuildingUrl = parseInt(req.headers.referer.split("/").slice(4)[0]);
    // const percentageOfBuilding = parseFloat(((parseFloat(req.body.appartementSize) * 100) / parseFloat(req.body.surface)).toFixed(2))

    const building = await prisma.buildings.create({
        data: {
            name: req.body.name,
            location: req.body.location,
            city: req.body.city,
            thumbnail: "/defaultBuilding.jpg",
            // images: "TEMP",
            // floors: parseInt(req.body.floors),
            surface: parseFloat(req.body.surface),
            houseQuantity: parseInt(req.body.houses),
            creatorId: parseInt(session.user.id),
            adminIDs: String(session.user.id),
            residentIDs: String(session.user.id),
            treasury: 0,
            houseIDs: null,
            // userIDs: "TEMP",
            // rent: parseFloat(req.body.rent),
            // houseSize: parseFloat(req.body.appartementSize),
            // populationTotal: 0,
            // notes: req.body.notes,
            // teamid: req.body.teamid,
            create_time: currentdate,
            update_time: currentdate,
        },
    });
    // for (let j = 1; j < (parseInt(req.body.floors) + 1); j++) {
    //     for (let i = 1; i < (parseInt(req.body.houses) + 1); i++) {
    //         const houses = await prisma.houses.upsert({
    //             where: {
    //                 houseId: building.id + "." + j + "-" + i,
    //             },
    //             create: {
    //                 houseId: building.id + "." + j + "-" + i,
    //                 name: j + "-" + i,
    //                 buildingId: building.id,
    //                 buildingName: req.body.name,
    //                 buildingSurface: req.body.surface,
    //                 description: "TEMP",
    //                 floor: j,
    //                 houseNumber: i,
    //                 location: req.body.location,
    //                 size: parseFloat(req.body.appartementSize),
    //                 status: "empty",
    //                 comment: "TEMP",
    //                 priceRent: parseFloat(req.body.rent),

    //                 // percentageOfBuilding: percentageOfBuilding,
    //                 teamid: req.body.teamid,
    //                 create_time: currentdate,
    //                 update_time: currentdate,
    //             },
    //             update: {}
    //         })
    //     }
    // }

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
export default addBuildingAPI;