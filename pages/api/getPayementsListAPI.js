import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../../components/prismaClient';

const getPayementsListAPI = async (req, res) => {
  const session = getSession(req, res);
  const buildings = await prisma.buildings.findMany({
    where: {
      residentIDs: { contains: String(session.user.id) }
    }
  });
  let payements = [];
  let tempPayements = [];
  await Promise.all(buildings.map(async (building) => {
    tempPayements = await prisma.payements.findMany({
      where: {
        buildingId: parseInt(building.id)
      }
    });
    payements = [...payements, ...tempPayements];
  }));
  let tempUser = null;
  let users = [];
  await Promise.all(payements.map(async (payement) => {
    // console.log(payement)

    tempUser = await prisma.users.findUnique({
      where: {
        id: parseInt(payement.userId)
      }
    });
    // console.log(payement.userId)
    payement.user = tempUser;
  }));
  // console.log(payements)
  // console.log(tempUser)

  // let result={payements: JSON.stringify(payements)}
  // console.log(payements);

  res.json({ payements: JSON.stringify(payements) });
  // console.log(users)
  await prisma.$disconnect();
  return res;

}
export default getPayementsListAPI