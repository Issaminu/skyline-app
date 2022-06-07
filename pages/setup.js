
// import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
// import { withRouter } from 'next/router';
import Navbar from "../components/Navbar/Navbar";
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { PrismaClient } from '@prisma/client';
import { Input, useInput, Grid, Card, Button, Pagination } from "@nextui-org/react";
import HttpsIcon from '@mui/icons-material/Https';
import React, { useState } from 'react'
import Link from "next/link";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import PersonIcon from '@mui/icons-material/Person';
// import useSWR from "swr";
const setup = (props) => {
  const { user } = useUser();
  // console.log(user);
  // var currentdate = new Date();
  // console.log(currentdate.toISOString());

  // console.log(currentdate);
  // var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth()
  //     + "/" + currentdate.getFullYear() + " @ "
  //     + currentdate.getHours() + ":"
  //     + currentdate.getMinutes() + ":" + currentdate.getSeconds();
  // console.log(datetime);

  const router = useRouter()
  const nameIcon = <PersonIcon />
  const passwordIcon = <HttpsIcon />
  const calendarIcon = <CalendarTodayIcon />
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [image, setImage] = useState();

  async function handleSetupAPI(e) {
    e.preventDefault()
    let dataToSend = new Object();
    dataToSend.name = name.target.value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    ),
      dataToSend.phone = phone.target.value;
    dataToSend.image = "/default.jpg";
    dataToSend.email = user.email;

    let ress = await fetch('/api/setupAPI', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    })
      .then(function (response) {
        return response.json();
      })
    // .then(data => console.log(JSON.stringify(data)))

    if (ress) {
      // console.log("heeeho:");
      // console.log(ress);
      user.name = ress.body.user.name;
      user.phone = ress.body.user.phone;
      // user.type = ress.body.user.type;
      user.accountStatus = ress.body.user.accountStatus;

      router.push('/');
    }
    // const { data, error } = useSWR('setupAPI', fetcher);
    // console.log('here is resp:')
    // console.log(ress)
    // if (error) {
    //     console.log('error:')
    //     console.log(error)
    // }
    // if (!data) return ('loading')

  }
  return (
    <main>
      <Card css={{
        width: "20rem", display: "flex", justifyContent: 'center',
        // backgroundImage: "/public/LoginBackgroundImage.webp",
      }}>

        <form method="POST" action="/login">
          {/* <p>A basic card.</p> */}
          <Input
            labelLeft={nameIcon}
            type="text"
            name="name"
            label="Votre nom"
            placeholder=""
            css={{ mb: "1rem" }}
            onChange={setName}
          /><br></br>
          <Input
            labelLeft={nameIcon}
            type="text"
            name="phone"
            label="Votre telephone"
            defaultValue="+212"
            css={{ mb: "1rem" }}
            onChange={setPhone}
          /><br></br>
          <Input
            labelLeft={nameIcon}
            type="text"
            name="image"
            label="Votre image WIP"
            placeholder=""
            css={{ mb: "1rem" }}
            onChange={setImage}
          /><br></br>
          {/* <Input
                        labelLeft={passwordIcon}
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="password"
                        css={{ mb: "1rem" }}
                        onChange={setPassword}

                    /> */}
          <Button onClick={handleSetupAPI}>Submit</Button>
          {/* <Card.Image
                    src="/LoginBackgroundImage2.jpg"
                    height="100%"
                    width="100%"
                    alt="Card image background"
                /> */}
          {/* <Link href="/dashboard"><a>DASHBOARD HERE</a></Link> */}
        </form>
      </Card>
    </main>)
}
export const getServerSideProps = withPageAuthRequired({

  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const prisma = await new PrismaClient();
    let currentdate = new Date();
    currentdate = currentdate.toISOString();
    // console.log(session.user)
    const DBuser = await prisma.users.upsert({ //upsert() is Prisma's create if not exist
      where: {
        email: session.user.email,
      },
      create: {
        email: session.user.email,
        name: 'TEMP',
        image: '/default.jpg',
        // type: 'TEMP',
        accountStatus: 'TEMP',
        email_Verified: session.user.email_verified,
        create_time: currentdate,
        update_time: currentdate,
      },
      update: {}
    });
    if (DBuser) {
      // res.json({ user: user });
      // console.log("heeeho:");
      // console.log(session.user);
      session.user.name = DBuser.name;
      session.user.image = DBuser.image;
      // session.user.type = DBuser.type;
      session.user.accountStatus = DBuser.accountStatus;
      // session.user.email_Verified = DBuser.email_Verified;
      prisma.$disconnect();
      // console.log('bye!');
      return {
        props: {
          user: session.user
        }
      }
    }
    // res.json({ user: null });

    prisma.$disconnect();
    return {
      props: {
        user: null
      }
    }
  }
})




// async function handleSetup1(user) { //THIS IS DEPRICATED FOR getServerSideProps

//     if (user) {
//         let ress = await fetch('/api/handleSetup1', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(user),
//         })
//             .then(function (response) {
//                 return response.json();
//             }).then(data => console.log(JSON.stringify(data)))
//         return ress;
//     }
// }


export default setup;
// export const getServerSideProps = withPageAuthRequired();
