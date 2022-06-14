import prisma from '../../components/prismaClient'
import { getSession } from '@auth0/nextjs-auth0';

const addExpenseAPI = async (req, res) => {
  let currentdate = new Date();
  currentdate = currentdate.toISOString();
  const expense = await prisma.expenses.create({
    data: {
      buildingId: req.body.building.id,
      buildingName: req.body.building.name,
      reason: req.body.reason,
      amount: parseInt(req.body.amountSpent),
      beneficiary: req.body.beneficiary,
      expenseDate: req.body.expenseDate,
      create_time: currentdate,
      update_time: currentdate,
    }
  });
  await prisma.buildings.update({
    where: {
      id: req.body.building.id
    },
    data: {
      treasury: parseInt(req.body.building.treasury) - parseInt(req.body.amountSpent)
    }
  });
  if (expense) {
    res.json({ expense: JSON.stringify(expense) });
    await prisma.$disconnect();
    return res;
  }
}
export default addExpenseAPI