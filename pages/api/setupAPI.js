// import React from 'react'
// import { PrismaClient } from "@prisma/client";
import prisma from '../../components/prismaClient'
import fs from "fs";

const setupAPI = async (req, res) => {

  const data = req.body;
  // console.log('hey heeres data:')
  // console.log(JSON.serialize(data))
  // const email = data.email;
  // const prisma = await new PrismaClient();
  let currentdate = new Date();
  currentdate = currentdate.toISOString();
  // const image = fs.readFileSync(data.image);
  // console.log(req.body);

  console.log(req.body);


  const DBuser = await prisma.users.update({ //upsert() is Prisma's create if not exist
    where: {
      email: data.email,
      // id: data.id,
    },
    data: {
      name: data.name,
      phone: data.phone,
      image: data.image,
      // type: 'manager',
      accountStatus: 'active',
      update_time: currentdate
    }
  });
  if (DBuser) {
    // res.json({ user: user });
    // console.log("heeeho:");
    // console.log(DBuser);
    // await req.body.save();
    // console.log('REQ: ' + req.session.get('user'));
    prisma.$disconnect();
    res.json({ result: DBuser });
    // console.log('bye');

    return res;

  } else console.log('user not found');
  prisma.$disconnect();
  // console.log('bye');
  res.json({ result: null });
  return res;
}

export default setupAPI