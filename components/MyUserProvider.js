import { useUser } from '@auth0/nextjs-auth0';
import { useMutation } from 'react-query';
// import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
export default async function getServerSideProps(ctx) {
  // let { user } = getSession(ctx.req, ctx.res);
  // console.log(user);
}
const MyUserProvider = () => {
  const { user } = useUser();
  // console.log(user)
  let myUser = null;
  useEffect(async () => {
    async function test() {
      if (user) {
        myUser = await axios.post('/api/Auth0GetUserInfoAPI', { email: user.email }).data.user;
        console.log(myUser);

      }
    }
    test();
  });
  // const myUser = await useMutation(async (email) => {
  //   const bruh = await axios.post('/api/Auth0GetUserInfoAPI', { email: email }).data.user;
  //   return bruh;
  // });
  // myUser.mutate(user?.email);
  return myUser;
}

// export default MyUserProvider