// pages/index.js
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
// import prisma from '../components/prismaClient';
import { useRecoilState } from 'recoil';
import { myUserState } from '../store/atoms';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query'

// import { useRecoilState } from 'recoil';
// import { myUserState } from '../../store/atoms';
import axios from 'axios';
export default function Index() {
  const router = useRouter();
  let { user, isLoading, error } = useUser();
  const [myUser, setMyUser] = useRecoilState(myUserState);
  const [tempp, setTempp] = useState(0);
  // console.log(user)
  // console.log('here is the first call of user: ' + user);
  // callHandleLoginAPI(user, router);
  // console.log('here is props.user:');
  // console.log(props.DBuser);
  // console.log('wtf:')
  // console.log(user)
  // useEffect(() => {
  // async function getMyUser() {
  // let tempUser = await axios.post('/api/Auth0GetUserInfoAPI', { email: user?.email }).data;
  const test = useMutation(async (DataToSend) => {
    if (user?.email) {
      // console.log("add my building neeo")
      const bruh = await axios.post('/api/Auth0GetUserInfoAPI', { email: user.email }).then((ress) => {
        // console.log(ress)
        setMyUser({ ...user, ...ress.data.user });
        router.push('/rerouter');
        // console.log(myUser);
        // let obj = { ...user, ...ress.data.user };

      });
      // console.log(bruh)
      // console.log(newBuilding.data.building.id)
      return bruh
    } else {
      // useEffect(() => {
      router.push('/api/auth/login');
      // })
    }

  }, {
    onSuccess: async () => {
      // await console.log(test);
      setTempp(tempp + 1);
      // setTimeout(() => {
      // console.log(myUser)


      // }, 10000)

    }
  })
  useEffect(() => {
    test.mutate(user?.email);
    // console.log(test)
    // console.log(user?.email);
  }, [user,]);

  if (isLoading) return <div>Loading...</div>;
  // if (isLoading) return null;
  if (error) return <div>{error.message}</div>;




  // return <a href="/api/auth/login">Login</a>;
}
// export default withAuthenticationRequired(Index, {
//   // Show a message while the user waits to be redirected to the login page.
//   onRedirecting: () => (<div>Redirecting you to the login page...</div>)
// });

// export const getServerSideProps = withPageAuthRequired({
//   //returnTo: '/foo',
//   async getServerSideProps(ctx) {
//     let session = getSession(ctx.req, ctx.res);

//     // const prisma = await new PrismaClient()
//     let DBuser = new Object();
//     // DBuser.accountStatus = "test";
//     DBuser = await prisma.users.findUnique({
//       where: {
//         email: session.user.email
//       },
//       select: {
//         id: true,
//         email: true,
//         // password: true,
//         name: true,
//         image: true,
//         // type: true,
//         // houseId: true,
//         accountStatus: true,
//         phone: true,
//         notificationCount: true,
//       },
//     })
//     const buildings = await prisma.buildings.findMany({
//       where: {
//         residentIDs: {
//           contains: String(session.user.id)
//         }
//       },
//       select: {
//         id: true,
//         adminIDs: true,
//         creatorId: true,
//       }
//     });
//     let creatorOfBuildingIDs = [];
//     let adminOfBuildingIDs = [];
//     let residentOfBuildingIDs = [];
//     buildings.map(building => {
//       residentOfBuildingIDs.push(building.id);
//       if (building.creatorId == session.user.id) {
//         creatorOfBuildingIDs.push(building.id);
//       }
//       if (building.adminIDs.includes(session.user.id)) {
//         adminOfBuildingIDs.push(building.id);
//       }
//     });
//     // DBuser.nickname = session.user.nickname;
//     // if ('accountStatus' in DBuser) {
//     //     session.user.accountStatus = DBuser.accountStatus;
//     // }
//     if (DBuser) {
//       session.user.id = DBuser.id;
//       session.user.name = DBuser.name;
//       session.user.image = DBuser.image;
//       session.user.type = DBuser.type;
//       session.user.accountStatus = DBuser.accountStatus;
//       session.user.residentOfBuildingIDs = residentOfBuildingIDs;
//       session.user.creatorOfBuildingIDs = creatorOfBuildingIDs;
//       session.user.adminOfBuildingIDs = adminOfBuildingIDs;
//       session.user.phone = DBuser.phone;
//       session.user.notificationCount = DBuser.notificationCount;

//       // console.log(session.user);
//       if (DBuser.id != null) {
//         // console.log('Hello old guy');

//       }
//       else {
//         // console.log("HELLO NEW GUY");
//       }
//       prisma.$disconnect();
//       // console.log('bye');
//       // return res;
//     } else console.log('user not found');
//     prisma.$disconnect();
//     // console.log('bye');
//     const props = 1;
//     return {
//       props: {
//         null: JSON.parse(JSON.stringify(props))
//       }
//     };
//     // redirect: {
//     //   destination: '/buildings',
//     //   permanent: false,
//     // }
//     // };
//   }
// });
