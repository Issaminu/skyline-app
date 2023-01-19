import prisma from "../../components/prisma";
import { getToken, JWT } from "next-auth/jwt";
import { userState } from "../../store/atoms";

interface Token extends JWT {
  user?: userState;
}

const getBuildings = async (req, res) => {
  const token: Token = await getToken({ req });
  const { method } = req;
  switch (method) {
    case "GET":
      if (token) {
        // Signed in
        try {
          const buildings = await prisma.buildings.findMany({
            where: {
              residentIDs: {
                contains: String(token.user.id),
              },
            },
          });
          if (buildings.length) {
            // setTimeout(() => {
            res.json({ buildings: JSON.stringify(buildings) });
            return res;
            // }, 3000);
          } else {
            res.status(404).end();
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({ ok: false, status: "error" });
        }
        return res;
      } else {
        // Not Signed in
        res.status(401).end();
      }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
  return res;
};
export default getBuildings;
