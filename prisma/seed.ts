const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const { fakerEN_US } = require("@faker-js/faker");
const faker = fakerEN_US;
// import { PrismaClient } from "@prisma/client";
// import { fakerEN_US as faker } from "@faker-js/faker";

const userCount = 20;
const buildingsCount = 30;
const housesCount = 200;
const contributionsCount = 600;
const expensesCount = 300;

enum HouseStatus {
  AVAILABLE = "AVAILABLE",
  OCCUPIED = "OCCUPIED",
  RESERVED = "RESERVED",
}
const prisma = new PrismaClient();

async function main() {
  try {
    const testUser = {
      name: "Issam Boubcher",
      email: "test@gmail.com",
      password: await bcrypt.hash("123123123", 10),
      phone: faker.phone.number("+212 ## ## ## ##"),
      image: `https://randomuser.me/api/portraits/men/23.jpg`,
      isEmailVerified: true,
    };
    await prisma.user.upsert({
      where: {
        email: testUser.email,
      },
      update: testUser,
      create: testUser,
    });

    const users = await generateFakeUsers(userCount);
    await prisma.user.createMany({
      data: users,
    });

    const buildings = generateBuildings(buildingsCount);
    await prisma.building.createMany({
      data: buildings,
    });

    const houses = generateHouses(housesCount);
    await prisma.house.createMany({
      data: houses,
    });

    const contributions = generateContributions(contributionsCount);
    await prisma.contribution.createMany({
      data: contributions,
    });

    const expenses = generateExpenses(300);
    await prisma.expense.createMany({
      data: expenses,
    });

    console.log(
      `✅Added ${userCount} users, ${buildingsCount} buildings, ${housesCount} houses, ${contributionsCount} contributions, ${expensesCount} expenses`
    );
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}
main();

async function generateFakeUsers(count: number) {
  return await Promise.all(
    [...Array(count)].map(async () => {
      const password = await bcrypt.hash(faker.internet.password(), 10);
      const randomGender = Math.random() < 0.5 ? "men" : "women";
      const randomNumber = Math.floor(Math.random() * 98 + 1);
      const user = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: password,
        phone: faker.phone.number("+212 ## ## ## ##"),
        image: `https://randomuser.me/api/portraits/${randomGender}/${randomNumber}.jpg`,
        isEmailVerified: faker.datatype.boolean(),
      };
      return user;
    })
  );
}

function generateBuildings(count: number) {
  const buildings = [];
  const creatorId = faker.number.int({ min: 1, max: 20 });
  let adminIDs = [creatorId];
  for (let i = 0; i < 5; i++) {
    const newAdminId = faker.number.int({ min: 1, max: 20 });
    if (!adminIDs.includes(newAdminId)) adminIDs.push(newAdminId);
  }
  let residentIDs = [...adminIDs];
  for (let i = 0; i < 5; i++) {
    const newResidentId = faker.number.int({ min: 1, max: 20 });
    if (!residentIDs.includes(newResidentId)) residentIDs.push(newResidentId);
  }
  for (let i = 0; i < count; i++) {
    const building = {
      name: faker.company.name(),
      city: faker.location.city(),
      location: faker.location.streetAddress(),
      surface: faker.number.float({ min: 200, max: 10000, precision: 0.01 }),
      thumbnail: `https://source.unsplash.com/featured/?building&id=${i + 1}`,
      creatorId: creatorId,
      // admins: adminIDs,
      // residents: residentIDs,
    };
    buildings.push(building);
  }
  return buildings;
}

function generateHouses(count: number) {
  const houses = [];
  for (let i = 0; i < count; i++) {
    const house = {
      name: `House ${i + 1}`,
      size: faker.number.float({ min: 50, max: 200, precision: 0.01 }),
      status: faker.helpers.enumValue(HouseStatus),
      buildingId: faker.number.int({ min: 1, max: buildingsCount }),
    };
    houses.push(house);
  }
  return houses;
}

function generateContributions(count: number) {
  const contributions = [];
  for (let i = 0; i < count; i++) {
    const contribution = {
      amount: faker.number.float({ min: 10, max: 1000, precision: 0.01 }),
      contributorId: faker.number.int({ min: 1, max: 20 }),
      houseId: faker.number.int({ min: 1, max: housesCount }),
    };
    contributions.push(contribution);
  }
  return contributions;
}

function generateExpenses(count: number) {
  const expenses = [];
  for (let i = 0; i < count; i++) {
    const expense = {
      beneficiary: faker.company.name(),
      adminId: faker.number.int({ min: 1, max: 20 }),
      amount: faker.number.float({ min: 100, max: 5000, precision: 0.01 }),
      explanation: faker.lorem.sentence(),
    };
    expenses.push(expense);
  }
  return expenses;
}
