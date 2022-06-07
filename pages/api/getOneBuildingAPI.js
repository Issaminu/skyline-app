// import { PrismaClient } from "@prisma/client";
import { getSession } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import prisma from '../../components/prismaClient'
// const user = useUser();

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
    orderBy: {
      id: 'desc'
    }
  });
  if (building && appartements) {
    // console.log(building)
    // console.log(appartements)
    const result = {
      building: building,
      appartements: appartements
    }
    res.json({ result: JSON.stringify(result) });
    // console.log(res.result)
    await prisma.$disconnect();
    return res;
  }
  res.json({ building: null, appartements: null });

  await prisma.$disconnect();
  return res;
}
export default getOneBuildingAPI;