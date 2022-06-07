// import { PrismaClient } from "@prisma/client";
import prisma from '../../components/prismaClient'
import { getSession } from '@auth0/nextjs-auth0';

const reactivateTenantAPI = async (req, res) => {
  const session = getSession(req, res);

  // console.log("here's req:");
  // console.log(session.req.body.name);
  let currentdate = new Date();
  currentdate = currentdate.toISOString();
  // const prisma = await new PrismaClient();
  const tenantId = parseInt(req.headers.referer.split("/").slice(4).join("/"));
  const tenant = await prisma.tenants.update({
    where: {
      id: tenantId,
    },
    data: {
      accountStatus: "unactive",
      update_time: currentdate

    }
  })
  // console.log("heres dead building:");
  // console.log(building);
  if (tenant) {
    // session.user.buildingIDs.push(building.id);
    // session.save();
    // console.log(session.user.buildingIDs)
    res.tenant = tenant;
    res.json({ tenant: tenant });
    // console.log("heeeho:");
    // console.log(res.user);
    prisma.$disconnect();
    return res;
  }
  res.json({ tenant: null });

  prisma.$disconnect();
  return res;
}
export default reactivateTenantAPI;