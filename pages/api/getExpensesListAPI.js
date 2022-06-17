import { getSession } from '@auth0/nextjs-auth0';
import prisma from '../../components/prismaClient';

const getExpensesListAPI = async (req, res) => {
  const buildings = await prisma.buildings.findMany({
    where: {
      residentIDs: { contains: String(req.body.myUser.id) }
    }
  });
  let expenses = [];
  let tempExpenses = [];
  await Promise.all(buildings.map(async (building) => {
    tempExpenses = await prisma.expenses.findMany({
      where: {
        buildingId: parseInt(building.id)
      },
      orderBy: {
        expenseDate: "desc"
      }
    });
    expenses = [...expenses, ...tempExpenses];
  }));
  // console.log(expenses)
  // console.log(tempUser)

  // let result={expenses: JSON.stringify(expenses)}
  // console.log(expenses);

  res.json({ expenses: JSON.stringify(expenses) });
  // console.log(users)
  await prisma.$disconnect();
  return res;

}
export default getExpensesListAPI