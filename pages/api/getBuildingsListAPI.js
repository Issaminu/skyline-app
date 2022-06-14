// import { PrismaClient } from "@prisma/client";
import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../../components/prismaClient'
// const user = useUser();
const getBuildingsListAPI = async (req, res) => {
  // const session = getSession(req, res);
  // console.log(req.headers['x-forwarded-for']);
  // console.log("here's req:");
  // console.log(req.body + '1');
  // const { user } = useUser();
  // console.log(req.body);
  // const prisma = await new PrismaClient();
  const buildings = await prisma.buildings.findMany({
    where: {
      residentIDs: {
        contains: String(req.body.myUser.id)
      }
    },
  });

  // console.log(req.body.test);
  if (buildings) {
    // console.log("here's buildings:");
    // console.log(buildings);
    // session.user.buildingIDs = [];
    // buildings.map(building => session.user.buildingIDs.push(building.id))
    // console.log(session.user);
    // res.buildings = JSON.stringify(buildings);
    // console.log(res.buildings);
    res.json({ buildings: JSON.stringify(buildings) });
    // console.log("heeeho:");
    // console.log(res.user);
    await prisma.$disconnect();
    return res;
  }
  res.json({ buildings: null });

  await prisma.$disconnect();
  return res;
}
export default getBuildingsListAPI;