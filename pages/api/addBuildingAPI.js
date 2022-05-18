import { PrismaClient } from "@prisma/client";

// import React from 'react'
const APPLICATION_SECRET = process.env.APPLICATION_SECRET;

const addBuildingAPI = async (req, res) => {
    // console.log("here's req:");
    // console.log(req.body);
    let currentdate = new Date();
    currentdate = currentdate.toISOString();
    const prisma = await new PrismaClient();

    const building = await prisma.buildings.upsert({ //upsert() is Prisma's create if not exist
        where: {
            name: req.body.name,
        },
        create: {
            name: req.body.name,
            location: req.body.location,
            thumbnail: "TEMP",
            images: "TEMP",
            floors: req.body.floors,
            Surface: req.body.surface,
            houseQuantity: req.body.houses,
            houseIDs: "TEMP",
            userIDs: "TEMP",
            populationTotal: 0,
            notes: req.body.notes,
            create_time: currentdate,
            update_time: currentdate,
        },
        update: {}
    });
    if (building) {

        res.user = building;
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