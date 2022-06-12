import prisma from '../../components/prismaClient';

const Auth0GetUserInfoAPI = async (req, res) => {
  // console.log(req.body.email)
  const user = await prisma.users.findFirst({
    where: {
      email: req.body.email
    },
  });
  if (user) {
    // console.log(user)
    res.json({ user: user });
    prisma.$disconnect();
    return res;
  }
  res.json({ user: null });
  prisma.$disconnect();
  return res;
}

export default Auth0GetUserInfoAPI