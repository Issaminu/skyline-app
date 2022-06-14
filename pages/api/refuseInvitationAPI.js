import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../../components/prismaClient';


const refuseInvitationAPI = async (req, res) => {
  let currentdate = new Date();
  currentdate = currentdate.toISOString();
  const adminOfBuildings = await prisma.buildings.findMany({
    where: {
      adminIDs: {
        contains: String(req.body.myUser.id)
      }
    },
    select: {
      id: true,
    },
    orderBy: {
      create_time: 'desc'
    }
  });
  let adminOfBuildingsArray = [];
  adminOfBuildings.map((building) => {
    adminOfBuildingsArray.push(parseInt(building.id));
  })
  // const invitation = await prisma.invitations.delete({
  //   where: {
  //     id: { equals: req.body.invitationId },
  //     OR: [
  //       { receiverId: req.body.myUser.id },
  //       { buildingId: { in: adminOfBuildingsArray } }
  //     ]
  //   }

  // });
  const invitation = await prisma.invitations.delete({
    where: {
      id: req.body.invitationId,
    }
  });
  // req.body.myUser.notificationCount = req.body.myUser.notificationCount - 1;
  // console.log(req.body.myUser);
  if (invitation) {
    await prisma.users.update({
      where: { id: req.body.myUser.id },
      data: {
        notificationCount: req.body.myUser.notificationCount - 1,
        update_time: currentdate

      }
    });
    res.invitation = invitation;
    res.json({ invitation: JSON.stringify(invitation) });
    prisma.$disconnect();
    return res;
  };
  res.invitation = null;
  res.json({ invitation: null });
  prisma.$disconnect();
  return res;

}
export default refuseInvitationAPI