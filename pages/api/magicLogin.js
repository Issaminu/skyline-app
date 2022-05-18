import { PrismaClient } from "@prisma/client";
import { unsealData } from "iron-session";
import { withIronSessionApiRoute } from "iron-session/next";
const APPLICATION_SECRET = process.env.APPLICATION_SECRET;

export default withIronSessionApiRoute(magicLoginRoute, {
    cookieName: "skyline-AuthSessionCookie",
    password: APPLICATION_SECRET,
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});

async function magicLoginRoute(req, res) {
    const { userId } = await unsealData(req.query.seal, {
        password: APPLICATION_SECRET,
    });

    // const user = getUserFromDatabase(userId);
    const prisma = new PrismaClient()
    // const bcrypt = require('bcrypt');

    const user = await prisma.users.findFirst({
        where: {
            id: userId,
        },
        select: {
            id: true,
            email: true,
            password: true,
            name: true,
            image: true,
            type: true,
            houseId: true,
            accountStatus: true
        },
    })
    // console.log(JSON.stringify(req, null, 2));
    // console.log("user.email: " + user.email);
    // console.log("req.email: " + req.body.email);
    // console.log("user.password: " + user.password);
    // console.log("req.password: " + req.body.password);
    if (user) {
        if (req.body.email == user.email && req.body.password == user.password) {
            console.log('Login Success!');
        }
        else {
            console.log("ERROR! BAD EMAIL OR PASSWORD");
        }


        // console.log(user);

        req.session.user = {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            type: user.type,
            houseId: user.houseId,
            accountStatus: user.accountStatus,
        };

        await req.session.save();

        res.redirect(`/dashboard`);
    }
}