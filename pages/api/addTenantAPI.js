// import { PrismaClient } from "@prisma/client";
import prisma from '../../components/prismaClient'
import { getSession } from '@auth0/nextjs-auth0';

const addBuildingAPI = async (req, res) => {
    const session = getSession(req, res);

    let currentdate = new Date();
    currentdate = currentdate.toISOString();

    const tenant = await prisma.tenants.upsert({ //upsert() is Prisma's create if not exist
        where: {
            cin: req.body.cin,
        },
        create: {
            cin: req.body.cin,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            familySize: parseInt(req.body.familySize),
            job: req.body.job,
            image: "TEMP",
            cinRecto: "TEMP",
            cinVerso: "TEMP",
            accountStatus: "active",
            notes: "TEMP",
            teamid: req.body.teamid,
            create_time: currentdate,
            update_time: currentdate,
        },
        update: {}
    });

    if (tenant) {
        // session.user.buildingIDs.push(building.id);
        // session.save();
        // console.log(session.user.buildingIDs)
        res.tenant = tenant;
        res.json({ tenant: tenant });
        // console.log("heeeho:");
        // console.log(res.user);
        prisma.$disconnect();
        return res;
    }
    res.json({ tenant: null });

    prisma.$disconnect();
    return res;
}
export default addBuildingAPI;