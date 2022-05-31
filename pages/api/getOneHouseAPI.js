// import { PrismaClient } from "@prisma/client";
import { getSession } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import prisma from '../../components/prismaClient'
// const user = useUser();

const getOneHouseAPI = async (req, res) => {
    const session = getSession(req, res);
    // const router = useRouter();
    // console.log('original url:')
    const sourceBuildingUrl = parseInt(req.headers.referer.split("/").slice(4)[0]);
    const sourceHouseUrl = req.headers.referer.split("/").slice(6).join("/");
    // console.log(sourceHouseUrl)
    // const currentRoute = router.asPath.split("/").slice(2).join("/");
    // const currentRoute = 1;
    const house = await prisma.houses.findUnique({
        where: {
            // buildingId: sourceBuildingUrl,
            houseId: sourceBuildingUrl + "." + sourceHouseUrl
        },
    });
    if (house) {
        // console.log("hhhheeeee")
        // res.redirect(200, '/dashboard')

        res.json({ house: JSON.stringify(house) });
        await prisma.$disconnect();
        return res;
    }
    // res.json({ house: null });
    console.log("wtf man")
    // redirect('/', 200);
    // res.location('/')
    // res.setHeader('Location', '/');
    // res.json({ house: null });
    res.redirect(307, '/dashboard')
    // window.location.href = "/"
    await prisma.$disconnect();
    // return res;
}
export default getOneHouseAPI;