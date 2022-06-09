// import { PrismaClient } from "@prisma/client";
import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../../components/prismaClient';

const getOneBuildingAPI = async (req, res) => {
  const session = getSession(req, res);
  // const router = useRouter();
  // console.log('original url:')
  // console.log(req.headers.referer.split("/").slice(4).join("/"));
  const sourceUrl = parseInt(req.headers.referer.split("/").slice(4).join("/"));
  // const currentRoute = router.asPath.split("/").slice(2).join("/");
  // const currentRoute = 1;
  const building = await prisma.buildings.findUnique({
    where: {
      id: sourceUrl
    },
  });
  const appartements = await prisma.houses.findMany({
    where: {
      buildingId: sourceUrl
    },
    select: {
      id: true,
      name: true
    },
    // orderBy: {
    //   id: 'desc'
    // }
  });
  const residents = [];
  const residentIDsArray = building.residentIDs.split(", ");
  // console.log(residentIDsArray)
  await Promise.all(residentIDsArray.map(async (residentID) => {
    residents.push(await prisma.users.findUnique({
      where: {
        id: parseInt(residentID)
      },
    }));
  }));
  if (building && appartements && residents) {
    // console.log(residents)
    // console.log(appartements)
    const result = {
      building: building,
      appartements: appartements,
      residents: residents
    };
    res.json({ result: JSON.stringify(result) });
    // console.log(res.result)
    await prisma.$disconnect();
    return res;
  }
}
export default getOneBuildingAPI;