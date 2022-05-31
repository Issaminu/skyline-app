// import { PrismaClient } from "@prisma/client";
import { getSession } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import prisma from '../../components/prismaClient'
// const user = useUser();

const getOneTenantAPI = async (req, res) => {
    const session = getSession(req, res);
    // const router = useRouter();
    // console.log('original url:')
    // console.log(req.headers.referer.split("/").slice(4).join("/"));
    const sourceUrl = parseInt(req.headers.referer.split("/").slice(4).join("/"));
    // const currentRoute = router.asPath.split("/").slice(2).join("/");
    // const currentRoute = 1;
    const tenant = await prisma.tenants.findUnique({
        where: {
            id: sourceUrl
        },
    });
    const buildings = await prisma.buildings.findMany({
        where: {
            teamid: session.user.id,
        },
        select: {
            id: true,
            name: true
        },
        orderBy: {
            name: 'asc'
        }
    })
    const houses = await prisma.houses.findMany({
        where: {
            teamid: session.user.id,
        },
        select: {
            id: true,
            name: true,
            buildingId: true,
            userIDs: true,
            teamid: true,
        },
        // orderBy: {
        //     name: 'asc'
        // }
    })
    tenant.houseIDs = null;
    let tenantHouseList = [];

    houses.map((house) => {
        if (house.userIDs != null) {
            // console.log(tenant.id)
            // console.log(house.userIDs)

            if (house.userIDs.includes(tenant.id)) {
                // console.log(house.userIDs)
                tenantHouseList.push(house);

                if (tenant.houseIDs == null) {
                    tenant.houseIDs = house.name;
                } else {
                    tenant.houseIDs = tenant.houseIDs + ", " + house.name
                }
            }
        }
    })
    // if (tenant.houseIDs != null) tenantHouseList = tenant.houseIDs.split(', ');
    if (tenant) {
        // console.log(tenantHouseList);

        let stuff = [tenant, buildings, houses, tenantHouseList];
        // stuff[0] = tenant;
        // stuff[1] = buildings;
        res.json({ stuff: JSON.stringify(stuff) });
        // console.log(buildings);
        await prisma.$disconnect();
        return res;
    }
    let stuff = [tenant, buildings, houses];

    res.json({ stuff: JSON.stringify(stuff) });


    await prisma.$disconnect();
    return res;
}
export default getOneTenantAPI;