import { getSession } from '@auth0/nextjs-auth0';
import Receiver from 'tailwind/dist/wires/commandbus/amqp/Receiver';
import prisma from '../../components/prismaClient';

const acceptInvitationAPI = async (req, res) => { //THIS API IS CALLED ONLY BY INVITATION RECEIVERS, NOT BY ADMINS
  const session = getSession(req, res);
  let invitation = null;
  // console.log(req.body.senderIsAdmin == true);
  // return res;
  let currentdate = new Date();
  currentdate = currentdate.toISOString();

  if (req.body.senderIsAdmin == true) {
    invitation = await prisma.invitations.delete({
      where: {
        id: req.body.invitationId
      }
    });
    const building = await prisma.buildings.findUnique({
      where: {
        id: req.body.buildingId
      },
    });

    await prisma.buildings.update({
      where: {
        id: req.body.buildingId
      },
      data: {
        residentIDs: building.residentIDs + ", " + req.body.myUser.id,
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
            residentIDs: house.residentIDs + ", " + req.body.myUser.id,
            update_time: currentdate

          }
        });
      } else {
        house = await prisma.houses.update({
          where: {
            id: parseInt(houseId)
          },
          data: {
            residentIDs: String(req.body.myUser.id),
            update_time: currentdate

          }
        });
      }
    });
    if (req.body.isAdmin) {
      await prisma.buildings.update({
        where: {
          id: req.body.buildingId
        },
        data: {
          adminIDs: building.adminIDs + ", " + req.body.myUser.id,
          update_time: currentdate

        }
      });
    }
  } else {
    let currentdate = new Date();
    currentdate = currentdate.toISOString();
    invitation = await prisma.invitations.update({
      where: {
        id: req.body.invitationId
      },
      data: {
        status: "pendingValidation",
        update_time: currentdate
      }
    });
    const building = await prisma.buildings.findUnique({
      where: {
        id: req.body.buildingId
      },
    })
    let adminIDsArray = building.adminIDs.split(', ');
    let tempAdmin = null;
    await adminIDsArray.map(async (adminId, index) => {
      tempAdmin = await prisma.users.findUnique({
        where: {
          id: parseInt(adminId)
        }
      });
      await prisma.users.update({
        where: {
          id: parseInt(tempAdmin.id)
        },
        data: {
          notificationCount: { increment: 1 },
          update_time: currentdate

        }
      });
    });
  };
  if (invitation) {
    await prisma.users.update({
      where: { id: req.body.myUser.id },
      data: {
        notificationCount: { increment: -1 },
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
export default acceptInvitationAPI;