// import { PrismaClient } from "@prisma/client";
import prisma from '../../components/prismaClient'
import { getSession } from '@auth0/nextjs-auth0';

const addReservationAPI = async (req, res) => {
    const session = getSession(req, res);
    // console.log(req.body);
    let currentdate = new Date();
    currentdate = currentdate.toISOString();
    req.body.houses.map(async (thisHouse) => {
        let house = await prisma.houses.findUnique({
            where: {
                id: parseInt(thisHouse.id)
            }
        })
        if (house.userIDs != null) {
            if (!(house.userIDs.includes(String(req.body.tenantId)))) {
                await prisma.houses.update({
                    where: {
                        id: house.id
                    },
                    data: {
                        userIDs: String(house.userIDs + ", " + req.body.tenantId)
                    }
                })
            }
        } else {
            await prisma.houses.update({
                where: {
                    id: house.id
                },
                data: {
                    userIDs: String(req.body.tenantId)
                }
            })
        }
    })
    // console.log(req.body.tenantId);
    let building = await prisma.buildings.update({
        where: {
            id: req.body.buildingId
        },
        data: {
            populationTotal: { increment: req.body.familySize },

        }
    })
    let tenant = await prisma.tenants.findUnique({
        where: {
            id: req.body.tenantId
        }
    })
    if (tenant.houseIDs != null) {
        req.body.houses.map(async (thisHouse) => {
            await prisma.tenants.update({
                where: {
                    id: req.body.tenantId
                },
                data: {
                    houseIDs: String(tenant.houseIDs + ", " + thisHouse.id),
                    buildingId: String(req.body.buildingId)
                }
            })
        })
    } else {
        req.body.houses.map(async (thisHouse) => {
            await prisma.tenants.update({
                where: {
                    id: req.body.tenantId
                },
                data: {
                    houseIDs: String(thisHouse.id),
                    buildingId: String(req.body.buildingId)
                }
            })
        })
    }

    // const houses = await prisma.houses.update({
    //     where: {
    //         id: req.body.houseIDs
    //     },
    //     update: {}
    // });

    // if (tenant) {
    // session.user.reservationIDs.push(reservation.id);
    // session.save();
    // console.log(session.user.reservationIDs)
    // res.tenant = tenant;
    res.json({ result: "ok" });
    // console.log("heeeho:");
    // console.log(res.user);
    // prisma.$disconnect();
    // return res;

    // res.json({ tenant: null });

    prisma.$disconnect();
    return res;
}
export default addReservationAPI;