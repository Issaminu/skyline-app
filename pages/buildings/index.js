// import React from 'react'

import { Breadcrumbs } from "@mui/material"
import { Grid, Button, Image, css } from "@nextui-org/react"
import Link from "next/link"
import AddIcon from '@mui/icons-material/Add';
import AddBuilding from '../../components/Building/AddBuilding'
import Building from "../../components/Building/Building";
import { useUser } from "@auth0/nextjs-auth0";
import { useContext, useEffect, useState } from "react";
import ListBuildings from "../../components/Building/ListBuildings";
import { useMutation, useQueryClient } from 'react-query'
import { useRecoilState } from 'recoil';
import { myUserState } from '../../store/atoms';
import axios from 'axios';
// import { MyUser } from "../../components/MyUserProvider";

const buildings = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let { user } = useUser();
  // let test = useContext('MyUser');
  // console.log(test);
  // if (user) {
  //   user.bruh = 1
  //   console.log(user)
  // }
  // const [myUser, setMyUser] = useRecoilState(myUserState);
  // // useEffect(() => {
  // // async function getMyUser() {
  // // let tempUser = await axios.post('/api/Auth0GetUserInfoAPI', { email: user?.email }).data;
  // const [tempp, setTempp] = useState(0);
  // const test = useMutation(async (DataToSend) => {
  //   // console.log("add my building neeo")
  //   const bruh = await axios.post('/api/Auth0GetUserInfoAPI', DataToSend).then((ress) => {
  //     // console.log(ress.data.user);
  //     setMyUser(ress.data.user);
  //   });
  //   // console.log(bruh)
  //   // console.log(newBuilding.data.building.id)
  //   return bruh
  // }, {
  //   onSuccess: async () => {
  //     // await console.log(test);
  //     setTempp(tempp + 1);

  //   }
  // })
  // useEffect(() => {
  //   test.mutate(user?.email);
  //   // console.log(test)
  //   // console.log(user?.email);
  // }, [user,]);
  // await setMyUser(tempUser);
  // await console.log(tempUser);
  // return tempUser;
  // }
  // console.log(getMyUser());
  // })
  // console.log(myUser);
  const queryClient = useQueryClient();
  // queryClient.removeQueries(['getExpenses']);
  // queryClient.removeQueries(['getPayements']);
  queryClient.removeQueries(["getOneBuilding"]);
  queryClient.removeQueries(["getHousesList"]);
  queryClient.removeQueries(['getResidentsList']);
  queryClient.removeQueries(['getInvitations']);

  // console.log("hey")
  return (
    <>
      <main>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "4rem", marginRight: "4rem" }}>
          <h1 style={{ marginBottom: 0, color: "#457B9D" }}>Immeubles</h1>
          <AddBuilding />
        </div>
        <ListBuildings />
      </main>


    </>
  )
}

export default buildings