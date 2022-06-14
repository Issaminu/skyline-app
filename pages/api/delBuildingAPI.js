// import { PrismaClient } from "@prisma/client";
import prisma from '../../components/prismaClient'
import { getSession } from '@auth0/nextjs-auth0';

const delBuildingAPI = async (req, res) => {

  // console.log("here's req:");
  // console.log(session.req.body.name);
  let currentdate = new Date();
  currentdate = currentdate.toISOString();
  // const prisma = await new PrismaClient();
  const buildingId = parseInt(req.headers.referer.split("/").slice(4).join("/"));
  const building = await prisma.buildings.delete({
    where: {
      id: buildingId,
    },
  });
  const houses = await prisma.houses.deleteMany({
    where: {
      buildingId: buildingId,
    }
  })
  // console.log("heres dead building:");
  // console.log(building);
  if (building) {
    // session.user.buildingIDs.push(building.id);
    // session.save();
    // console.log(session.user.buildingIDs)
    res.building = building;
    res.json({ building: building });
    // console.log("heeeho:");
    // console.log(res.user);
    prisma.$disconnect();
    return res;
  }
  res.json({ building: null });

  prisma.$disconnect();
  return res;
}
export default delBuildingAPI;