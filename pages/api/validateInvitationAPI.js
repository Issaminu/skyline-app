import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../../components/prismaClient';

const validateInvitationAPI = async (req, res) => { //THIS API IS CALLED ONLY BY ADMINS, NOT BY INVITATION RECEIVERS
  const session = getSession(req, res);
  let currentdate = new Date();
  currentdate = currentdate.toISOString();
  const invitation = await prisma.invitations.delete({
    where: {
      id: req.body.invitationId
    }
  });
  const building = await prisma.buildings.findUnique({
    where: {
      id: req.body.buildingId
    },
  });
  let adminArray = [];
  building.adminIDs.split(', ').map((admin) => {
    adminArray.push(parseInt(admin));
  });
  adminArray.map(async (admin) => {
    await prisma.users.update({
      where: { id: admin },
      data: {
        notificationCount: { increment: -1 },
        update_time: currentdate
      }
    });
  });
  await prisma.buildings.update({
    where: {
      id: req.body.buildingId
    },
    data: {
      residentIDs: building.residentIDs + ", " + req.body.receiverId,
      update_time: currentdate
    }
  });
  let houseIDs = req.body.receiverHouseIDs.split(', ');
  houseIDs.pop();
  // console.log('here is houseIDs: ', houseIDs);
  let house = null;
  await houseIDs.map(async (houseId) => {
    house = await prisma.houses.findUnique({
      where: {
        id: parseInt(houseId)
      }
    });
    if (house.residentIDs != null) {
      house = await prisma.houses.update({
        where: {
          id: parseInt(houseId)
        },
        data: {
          residentIDs: house.residentIDs + ", " + req.body.receiverId,
          update_time: currentdate
        }
      });
    } else {
      house = await prisma.houses.update({
        where: {
          id: parseInt(houseId)
        },
        data: {
          residentIDs: String(req.body.receiverId),
          update_time: currentdate
        }
      });
    }
  });

  if (invitation) {
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

export default validateInvitationAPI