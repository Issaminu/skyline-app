import { PrismaClient } from "@prisma/client";

// import React from 'react'
const APPLICATION_SECRET = process.env.APPLICATION_SECRET;

const handleSetup1 = async (req, res) => {
    const prisma = await new PrismaClient();
    // console.log("here's req:");
    // console.log(req.body);

    const user = await prisma.users.upsert({ //upsert() is Prisma's create if not exist
        where: {
            email: req.body.email,
        },
        create: {
            email: req.body.email,
            name: 'TEMP',
            image: 'TEMP',
            type: 'TEMP',
            accountStatus: 'TEMP',
            email_Verified: false
        },
        update: {}
    });
    if (user) {
        if (user.id != null) {
            res.user = user;
        }
        res.json({ user: user });
        // console.log("heeeho:");
        // console.log(res.user);
        prisma.$disconnect();
        return res;
    }
    res.json({ user: null });

    prisma.$disconnect();
    return res;
}
export default handleSetup1;