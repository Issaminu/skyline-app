// import { PrismaClient } from "@prisma/client";
import prisma from '../../components/prismaClient'
import { getSession } from '@auth0/nextjs-auth0';

const addInvitationAPI = async (req, res) => {
    const session = getSession(req, res);

    // console.log("here's req:");
    // console.log(session.req.body.name);
    let currentdate = new Date();
    currentdate = currentdate.toISOString();
    // const prisma = await new PrismaClient();
    // const sourceInvitationUrl = parseInt(req.headers.referer.split("/").slice(4)[0]);
    // const percentageOfInvitation = parseFloat(((parseFloat(req.body.appartementSize) * 100) / parseFloat(req.body.surface)).toFixed(2))

    const invitedUser = await prisma.users.findFirst({
        where: {
            // OR: [{
            email: req.body.receiverEmail,
            // }],
            NOT: {
                accountStatus: {
                    contains: 'TEMP'
                }
            }
        },
        select: {
            id: true,
            email: true,
        }
    });
    if (!invitedUser) {
        return res.status(400).send({
            message: 'Cet utilisateur n\'existe pas.'
        });
    }
    if (req.body.building.residentIDs.includes(String(invitedUser.id))) {
        return res.status(400).send({
            message: 'Cet utilisateur est déjà un résident de cet immeuble.'
        });
    }
    const invitations = await prisma.invitations.findMany({
        where: {
            buildingId: req.body.building.id,
            receiverEmail: req.body.receiverEmail,
        }
    });
    if (invitations.length > 0) {
        return res.status(400).send({
            message: 'Cet utilisateur est déjà invité à cet immeuble.'
        });
    }
    const invitation = await prisma.invitations.create({
        data: {
            buildingId: req.body.building.id,
            senderId: session.user.id,
            receiverId: invitedUser.id,
            receiverEmail: invitedUser.email,
            status: "pendingAcceptance",
            isAccepted: false,
            isValidated: false,
            isAdmin: false,
            create_time: currentdate,
            update_time: currentdate,
        }
    });

    await prisma.users.update({
        where: {
            id: invitedUser.id,
        },
        data: {
            notificationCount: {
                increment: 1
            }
        }
    });


    if (invitation) {
        // session.user.invitationIDs.push(invitation.id);
        // session.save();
        // console.log(session.user.invitationIDs)
        res.invitation = invitation;
        res.json({ invitation: invitation });
        // onsole.log("heeeho:");
        // console.log(res.user);
        prisma.$disconnect();
        return res;
    };
    json({ invitation: null });
    ma.$disconnect();
    return res;
};
export default addInvitationAPI; 