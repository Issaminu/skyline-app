import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../../components/prismaClient'
const getResidentsListAPI = async (req, res) => {
  const session = getSession(req, res);
  const users = await prisma.users.findMany({
    where: {
      id: {
        in: req.body.residentIDsArray
      }
    },
    select: {
      id: true,
      name: true,
      image: true,
      phone: true,
    },
  })
  if (users) {
    res.json({ residents: JSON.stringify(users) });
    await prisma.$disconnect();
    return res;
  }
  res.json({ residents: null });
  await prisma.$disconnect();
  return res;
}
export default getResidentsListAPI;