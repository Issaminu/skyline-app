// import { PrismaClient } from "@prisma/client";
import prisma from '../../components/prismaClient'
import { getSession } from '@auth0/nextjs-auth0';

const modTenantAPI = async (req, res) => {
    const session = getSession(req, res);

    // console.log("here's req:");
    // console.log(session.req.body.name);
    let currentdate = new Date();
    currentdate = currentdate.toISOString();
    // const prisma = await new PrismaClient();

    const tenant = await prisma.tenants.update({
        where: {
            id: parseInt(req.body.id),
            // teamid: parseInt(req.body.teamid),
        },
        data: {
            name: req.body.name,
            // image: "TEMP",
            // floors: req.body.floors,
            // houseQuantity: req.body.houses,
            cin: req.body.cin,
            email: req.body.email,
            phone: req.body.phone,
            familySize: req.body.familySize,
            job: req.body.job,
            create_time: currentdate,
            update_time: currentdate,
        },
    });
    if (tenant) {
        // session.user.tenantIDs.push(tenant.id);
        // session.save();
        // console.log(session.user.tenantIDs)
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
export default modTenantAPI;