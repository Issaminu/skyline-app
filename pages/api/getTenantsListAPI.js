// import { PrismaClient } from "@prisma/client";
import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../../components/prismaClient'
// const user = useUser();

const getTenantsListAPI = async (req, res) => {
  const session = getSession(req, res);

  // console.log("here's req:");
  // console.log(session);
  // const { user } = useUser();
  // const prisma = await new PrismaClient();
  const tenants = await prisma.tenants.findMany({
    where: {
      teamid: session.user.id
    },
    orderBy: {
      create_time: 'desc'
    }
  });
  // console.log(tenants);
  if (tenants) {
    // console.log("here's tenants:");
    // console.log(buildings);
    // session.user.buildingIDs = [];
    // buildings.map(building => session.user.buildingIDs.push(building.id))
    // console.log(session.user);
    // res.buildings = JSON.stringify(buildings);
    // console.log(res.buildings);
    res.json({ tenants: JSON.stringify(tenants) });
    // console.log("heeeho:");
    // console.log(res.user);
    await prisma.$disconnect();
    return res;
  }
  res.json({ tenants: null });

  await prisma.$disconnect();
  return res;
}
export default getTenantsListAPI;