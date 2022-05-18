// import { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client"
// import { signIn, useSession, signOut } from 'next-auth/react'
// import React, { useEffect } from "react";

// const prisma = new PrismaClient()
// // prisma.users.fi
// const handleLogin = (req, res) => {
//     // console.log(req);
//     const session = useSession();

//     return (signIn('credentials',
//         {
//             email: req.email,
//             password: req.password,
//             callbackUrl: `localhost:3000/`

//         }));

//     res.status(200).json({
//         id: session.data.id,
//         name: session.data.name,
//         email: session.data.email
//     });
//     return res;
//     console.log('done with handleLogin().');
// }
// export default handleLogin;




// import { withIronSessionApiRoute } from "next-iron-session"
// const prisma = new PrismaClient()

// export default withIronSessionApiRoute;



import bcrypt from 'bcrypt';
import { PrismaClient } from "@prisma/client";
// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
// }
// export async function getServerSideProps(context) {
//     const prisma = new PrismaClient()
//     console.log("login info: " + context.email + " " + context.password);

//     let user = (prisma.users.findFirst({
//         where: {
//             email: context.email,
//             password: context.password
//         }
//     }));
//     // user = JSON.stringify(user);
//     console.log(user);
//     if (context.email == user.email && context.password == user.password) {
//         console.log('Login Success!');
//     }
//     else {
//         console.log("FAIL");
//     }
//     return {
//         props:
//         {
//             data: user,
//         }
//     };
// }
import { withIronSessionApiRoute } from "iron-session/next";
const APPLICATION_SECRET = process.env.APPLICATION_SECRET;
export default withIronSessionApiRoute(
    async function loginRoute(req, res) {
        console.log('hey');
        // console.log(req);
        const prisma = new PrismaClient()
        // const bcrypt = require('bcrypt');

        const user = await prisma.users.findFirst({
            where: {
                email: req.body.email,
                password: req.body.password,
                // password: bcrypt.hash(req.body.password, 10)
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
            // req.session.set('user', { user });

            await req.session.save();
            // console.log('REQ: ' + req.session.get('user'));

            res.send({ ok: true, body: { user: user } });
            return res;
        } else console.log('user not found');
        prisma.$disconnect();
        console.log('bye');

    },
    {
        cookieName: "skyline-AuthSessionCookie",
        password: APPLICATION_SECRET,
        // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
        cookieOptions: {
            // secure: process.env.NODE_ENV === "production",
            maxAge: undefined,
        },
    },
);
        // const user = prisma.users.findFirst({
        //     where: {
        //         email: req.email,
        //         password: req.password
        //     }
        // })

        // console.log(user);
        // get user from database then:
        // req.session.user = {
        //     id: 230,
        //     admin: true,
        // };
        // await req.session.save();
        // res.send({ ok: true });
    // });
// export default loginRoute;
//     {
//         cookieName: "skyline-AuthSessionCookie",
//         password: "me_password",
//         // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
//         cookieOptions: {
//             secure: process.env.NODE_ENV === "production",
//         },
//     },
// );