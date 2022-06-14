import prisma from '../../components/prismaClient';
import { getSession } from '@auth0/nextjs-auth0';


const getInvitationsList = async (req, res) => {
  // const session = getSession(req, res);
  // console.log(req.body)
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
  const userInvites = await prisma.invitations.findMany({
    where: {
      receiverId: req.body.myUser.id,
      status: "pendingAcceptance"
    },
    orderBy: {
      create_time: 'desc'
    }
  });
  // console.log(userInvites);
  const adminValidates = await prisma.invitations.findMany({
    where: {
      status: "pendingValidation",
      buildingId: {
        in: adminOfBuildingsArray
      }
    },
    orderBy: {
      create_time: 'desc'
    }
  });
  // let user = null;
  // adminValidates.map(async (invitation) => {
  //   user = await prisma.users.findUnique({
  //     where: {
  //       id: invitation.receiverId,
  //     },
  //     select: {
  //       name: true
  //     }
  //   });
  //   invitation.receiverName = user.name;
  // });
  const invitations = [...userInvites, ...adminValidates];
  // console.log(invitations)
  let position = "";
  req.body.myUser.notificationCount = parseInt(invitations.length);

  invitations.map(invitation => {
    // invitation.receiverHouseNames = "1g1, 2f1, 53g1, 345g, 4234f, 345g "

    invitation.receiverHouseNames = invitation.receiverHouseNames.substring(0, invitation.receiverHouseNames.length - 2);
    // console.log(invitation.receiverHouseNames);
    position = invitation.receiverHouseNames.lastIndexOf(', ');
    if (position > 0) {
      invitation.receiverHouseNames = invitation.receiverHouseNames.substring(0, position) + " et" + invitation.receiverHouseNames.substring(position + 1);
    }
  });
  if (invitations) {
    const result = { invitations: JSON.stringify(invitations), myUser: req.body.myUser };
    // console.log(result);
    res.json({ result: result });
    prisma.$disconnect();
    return res;
  };
  // console.log("wtf")
  res.invitations = null;
  res.json({ result: null });
  prisma.$disconnect();
  return res;

}

export default getInvitationsList