import prisma from "../../components/prisma";

const getBuildings = async (req, res) => {
  console.log(req.body);
  const buildings = await prisma.buildings.findMany({
    where: {
      residentIDs: {
        contains: String(req.body.userID),
      },
    },
  });

  if (buildings) {
    res.json({ buildings: JSON.stringify(buildings) });
    return res;
  }
  res.json({ buildings: null });

  return res;
};
export default getBuildings;
