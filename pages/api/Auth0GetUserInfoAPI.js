import prisma from '../../components/prismaClient';

const Auth0GetUserInfoAPI = async (req, res) => {
  const user = await prisma.users.findUnique({
    where: {
      email: req.body.email
    },
  });
  if (user) {
    res.json({ user: user });
    prisma.$disconnect();
    return res;
  }
  res.json({ user: null });
  prisma.$disconnect();
  return res;
}

export default Auth0GetUserInfoAPI