// import React from 'react'
import { PrismaClient } from "@prisma/client";
const setupAPI = async (req, res) => {

    const data = req.body;
    // console.log('hey heeres data:')
    // console.log(JSON.serialize(data))
    const email = data.email;
    const prisma = await new PrismaClient();
    let currentdate = new Date();
    currentdate = currentdate.toISOString();
    const DBuser = await prisma.users.update({ //upsert() is Prisma's create if not exist
        where: {
            email: email,
            // id: data.id,
        },
        data: {
            name: data.name,
            phone: data.phone,
            image: data.image,
            type: 'manager',
            accountStatus: 'active',
            update_time: currentdate
        }
    });
    if (DBuser) {
        // res.json({ user: user });
        // console.log("heeeho:");
        // console.log(DBuser);
        // await req.body.save();
        // console.log('REQ: ' + req.session.get('user'));
        prisma.$disconnect();
        res.send({ ok: true, body: { user: DBuser } });
        // console.log('bye');

        return res;

    } else console.log('user not found');
    prisma.$disconnect();
    // console.log('bye');

}

export default setupAPI