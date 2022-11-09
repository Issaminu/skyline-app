// import prisma from "../../components/prisma";
import { getToken } from "next-auth/jwt";

export default async (req, res) => {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req });
  if (token) {
    // Signed in
    console.log("JSON Web Token", JSON.stringify(token, null, 2));
  } else {
    // Not Signed in
    res.status(402);
  }
  res.end();
};
// const Test = async (req, res) => {
//   console.log(req.body);
//   const buildings = { eyo: 59, eyo2: 69 };
//   if (buildings) {
//     res.json({ buildings: JSON.stringify(buildings) });
//     return res;
//   }
//   res.json({ buildings: null });

//   return res;
// };
// export default Test;
