
// import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
// import { withRouter } from 'next/router';
import Navbar from "../components/Navbar/Navbar";
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { PrismaClient } from '@prisma/client';
import { Input, useInput, Grid, Card, Button, Pagination, Modal } from "@nextui-org/react";
import HttpsIcon from '@mui/icons-material/Https';
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DialpadRoundedIcon from '@mui/icons-material/DialpadRounded';
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";
import { useMutation } from "react-query";
import { useS3Upload } from 'next-s3-upload';
import axios from 'axios';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
const setup = (props) => {
  const { user } = useUser();
  // const [visible, setVisible] = useState(true);

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
  // const passwordIcon = <HttpsIcon />
  // const calendarIcon = <CalendarTodayIcon />
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [image, setImage] = useState(null);
  const [buttonStatus, setButtonStatus] = useState(true);
  const sendSetup = useMutation((DataToSend) => {
    // console.log(DataToSend);
    const ress = axios.post('/api/setupAPI', DataToSend).data;
    // console.log(ress);
    return ress;
  }, {
    onSuccess: async () => {
      // console.log("success");
      user.name = ress.body.user.name;
      user.phone = ress.body.user.phone;
      // user.type = ress.body.user.type;
      user.accountStatus = ress.body.user.accountStatus;

      router.push('/');
    },
  });

  async function handleSetupAPI(e) {
    e.preventDefault();
    // return null;
    let dataToSend = {};
    if (!name || !phone) return null;
    dataToSend.name = name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
    // let body = encodeURIComponent(image.name);
    dataToSend.phone = phone;
    dataToSend.email = user.email;
    console.log(dataToSend);
    // dataToSend.image = "/default.jpg";
    // image = imageUrl;
    if (imageUrl) {
      dataToSend.image = imageUrl;
    } else {
      dataToSend.image = "/default.jpg";
    }
    // console.log(dataToSend);
    sendSetup.mutate(dataToSend);
  }
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  let [imageUrl, setImageUrl] = useState();
  // console.log(imageUrl);

  let handleFileChange = async file => {
    let { url } = await uploadToS3(file);
    setImageUrl(url);
  };

  useEffect(() => {
    if (!name || !phone) {
      setButtonStatus(true);
    }
    if (name && phone) {
      setButtonStatus(false);
    }
  }, [name, phone]);
  return (
    <main style={{ minWidth: '100vh', minHeight: '100vh', layout: 'fill', margin: 0, marginTop: '-3rem', marginBottom: '-3rem', backgroundImage: "url('/LoginBackgroundImage2.webp')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Modal
        aria-labelledby="modal-title"
        open={true}
        animated={false}
        preventClose
        css={{
          width: "60rem", display: "flex", justifyContent: 'center',
          // backgroundImage: "/public/LoginBackgroundImage.webp",
        }}>
        <Modal.Header>
          <h3>Remplissez vos informations</h3>
        </Modal.Header>
        <form onSubmit={handleSetupAPI} encType="multipart/form-data">
          <Modal.Body>
            <Input
              labelLeft={nameIcon}
              type="text"
              name="name"
              label="Votre nom"
              placeholder=""
              css={{ mb: "1rem" }}
              onChange={(e) => { setName(e.target.value) }}
            /><br></br>
            <Input
              labelLeft={<DialpadRoundedIcon />}
              type="text"
              name="phone"
              label="Votre numéro de téléphone"
              initialValue="+212"
              css={{ mb: "1rem" }}
              onChange={(e) => { setPhone(e.target.value) }}
            /><br></br>
            <p
              style={{
                margin: 0,
                marginLeft: '0.29rem',
                marginBottom: '0.1rem',
                fontSize: '0.875rem',
                letterSpacing: '0.01rem',
                userSelect: 'none',
              }}
            >
              Votre image (optionnel)
            </p>
            {/* <input type="file" id="file" onChange={(e) => { setImage(e.target.files[0]) }}>
            </input> */}
            <div>
              <FileInput onChange={handleFileChange} />

              <Button color="neutral" flat onClick={openFileDialog} css={{ width: '100%', minWidth: '100%' }}><AddAPhotoRoundedIcon style={{ width: '1rem', height: '1rem', marginRight: '1rem' }} />Ajoutez votre photo</Button>
              {/* <Image layout="fill" src="https://skyline-app-bucket.s3.eu-west-3.amazonaws.com/next-s3-uploads/03aabdd3-16dc-400d-81c1-2bab582b9ab7/avatar-49119fe7e3364a59bf8e09bb6340f70e.jpg" /> */}
              {/* {imageUrl && <img src={imageUrl} />} */}
            </div>
            <br></br>
            {/* <Input
                          labelLeft={passwordIcon}
                          type="password"
                          name="password"
                          label="Password"
                          placeholder="password"
                          css={{ mb: "1rem" }}
                          onChange={setPassword}
                      /> */}
            {/* <Card.Image
                      src="/LoginBackgroundImage2.jpg"
                      height="100%"
                      width="100%"
                      alt="Card image background"
                  /> */}
            {/* <Link href="/dashboard"><a>DASHBOARD HERE</a></Link> */}
          </Modal.Body>
          <Modal.Footer css={{ display: 'flex', justifyContent: 'center' }}>
            <Button disabled={buttonStatus} css={{ width: '100%', minWidth: "100%", height: '3.1rem' }} shadow type="submit">Submit</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </main >
  )
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
