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
const Setup = (props) => {
  const { user } = useUser();
  const router = useRouter()
  const nameIcon = <PersonIcon />
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [image, setImage] = useState(null);
  const [buttonStatus, setButtonStatus] = useState(true);
  const sendSetup = useMutation((DataToSend) => {
    const ress = axios.post('/api/setupAPI', DataToSend).data;
    console.log(ress);
    return ress;
  }, {
    onSuccess: async () => {
      user.name = ress.body.user.name;
      user.phone = ress.body.user.phone;
      user.accountStatus = ress.body.user.accountStatus;
      router.push('/');
    },
  });
  async function handleSetupAPI(e) {
    e.preventDefault();
    let dataToSend = {};
    if (!name || !phone) return null;
    dataToSend.name = name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
    dataToSend.phone = phone;
    dataToSend.email = user.email;
    console.log(dataToSend);
    if (imageUrl) {
      dataToSend.image = imageUrl;
    } else {
      dataToSend.image = "/default.jpg";
    }
    sendSetup.mutate(dataToSend);
  }
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  let [imageUrl, setImageUrl] = useState();
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
              {/* <Image layout="fill" src="https:
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
    const DBuser = await prisma.users.upsert({
      where: {
        email: session.user.email,
      },
      create: {
        email: session.user.email,
        name: 'TEMP',
        image: '/default.jpg',
        accountStatus: 'TEMP',
        email_Verified: session.user.email_verified,
        create_time: currentdate,
        update_time: currentdate,
      },
      update: {}
    });
    if (DBuser) {
      session.user.name = DBuser.name;
      session.user.image = DBuser.image;
      session.user.accountStatus = DBuser.accountStatus;
      prisma.$disconnect();
      return {
        props: {
          user: session.user
        }
      }
    }
    prisma.$disconnect();
    return {
      props: {
        user: null
      }
    }
  }
})
export default Setup;
