import prisma from '../../components/prismaClient';

const Auth0GetUserInfoAPI = async (req, res) => {
  // console.log(req.body)
  const user = await prisma.users.findUnique({
    where: {
      email: req.body.email
    },
  });

  // console.log(user)
  if (user) {
    // console.log(JSON.stringify(user))
    res.user = user;
    res.json({ user: user });
    prisma.$disconnect();
    return res;
  }
  res.json({ user: null });
  prisma.$disconnect();
  return res;
}

export default Auth0GetUserInfoAPI