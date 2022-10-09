import prisma from "../../components/prisma";

const signupAPI = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const { name, email, password, phone } = req.body;
        const bcrypt = require("bcrypt");
        const hashedPassword = await bcrypt.hash(password, 10);
        let currentdate = new Date();
        currentdate = currentdate.toISOString();
        const user = await prisma.users.create({
          data: {
            name: name,
            email: email,
            password: hashedPassword,
            phone: phone,
            image: "/default.jpg",
            accountStatus: "active",
            email_Verified: false,
            notificationCount: 0,
            create_time: currentdate,
            update_time: currentdate,
          },
        });
        if (user) {
          res.status(200).json({ ok: true });
        } else {
          res.status(400).json({ ok: false });
        }
      } catch (error) {
        res.status(400).json({ ok: false, error: error });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
export default signupAPI;
