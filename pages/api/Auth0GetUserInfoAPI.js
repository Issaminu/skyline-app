import prisma from '../../components/prismaClient';

const Auth0GetUserInfoAPI = async (req, res) => {
  // console.log(req.body)
  const user = await prisma.users.findUnique({
    where: {
      email: req.body.email
    },
    select: {
      id: true,
      email: true,
      name: true,
      image: true,
      accountStatus: true,
      notificationCount: true
    }
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