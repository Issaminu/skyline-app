import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../../components/prismaClient';

const getNotificationCountAPI = async (req, res) => {
  const session = getSession(req, res);

  const notificationCount = await prisma.users.findUnique({
    where: {
      id: session.user.id
    },
    select: {
      notificationCount: true
    }
  })
  res.json({ notificationCount: notificationCount.notificationCount });
  prisma.$disconnect();
  return res;
}

export default getNotificationCountAPI