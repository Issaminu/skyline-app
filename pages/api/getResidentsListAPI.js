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
  });
  let tempHouses = {};
  await Promise.all(users.map(async (user) => {
    user.residentHouses = null;
    tempHouses = await prisma.houses.findMany({
      where: {
        residentIDs: {
          contains: String(user.id)
        }
      },
      select: {
        name: true,
      }
    });
    await Promise.all(tempHouses.map((house, index) => {
      if (index == 0) {
        user.residentHouses = house.name;
      } else {
        user.residentHouses = user.residentHouses + ", " + house.name;
        // } console.log(user.residentHouses);
      }
    }));
  }));
  // console.log(tempHouses);
  // await tempHouses.map((house, index) => {
  //   // console.log(house)
  //   if (index == 0) {
  //     user.residentHouses = house.name;
  //   } else {
  //     user.residentHouses = user.residentHouses + ", " + house.name;
  //     // } console.log(user.residentHouses);
  //   }
  // });
  // user.residentHouses = redidentHouses;
  // await console.log(users);
  // return null;
  if (users) {
    // return null
    res.json({ residents: JSON.stringify(users) });
    // console.log(users)
    await prisma.$disconnect();
    return res;
  }
  res.json({ residents: null });
  prisma.$disconnect();
  return res;
}
export default getResidentsListAPI;