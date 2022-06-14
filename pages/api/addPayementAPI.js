import prisma from '../../components/prismaClient'
import { getSession } from '@auth0/nextjs-auth0';

const addPayementAPI = async (req, res) => {
  let currentdate = new Date();
  currentdate = currentdate.toISOString();
  const payement = await prisma.payements.create({
    data: {
      buildingId: req.body.building.id,
      buildingName: req.body.building.name,
      reason: req.body.reason,
      userId: req.body.resident.id,
      userName: req.body.resident.name,
      amount: parseInt(req.body.amountPaid),
      payementDate: req.body.payementDate,
      create_time: currentdate,
      update_time: currentdate,
    }
  });
  const building = await prisma.buildings.findUnique(
    {
      where: {
        id: req.body.building.id
      }
    });
  await prisma.buildings.update({
    where: {
      id: req.body.building.id
    },
    data: {
      treasury: building.treasury + parseInt(req.body.amountPaid)
    }
  });
  if (payement) {
    res.json({ payement: JSON.stringify(payement) });
    await prisma.$disconnect();
    return res;
  }
}
export default addPayementAPI