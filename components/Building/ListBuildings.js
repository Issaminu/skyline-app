// import React from 'react'
// import { useUser } from "@auth0/nextjs-auth0";
import { Grid, Button, Image, css } from "@nextui-org/react"
// import { useEffect, useState } from "react";
import Building from "./Building";
import Loading from '../Loading'
import { useQuery } from "react-query";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0";
// import { QueryClient } from 'react-query'
// import { useEffect } from "react";
import { useRecoilState } from 'recoil';
import { myUserState } from '../../store/atoms';
const ListBuildings = () => {
  // const { user } = useUser();
  const [myUser, setMyUser] = useRecoilState(myUserState);
  // console.log(myUser);
  // user.user.buildingIDs = [];
  let DataToSend = {
    email: myUser.email,
    myUser: myUser,
  };
  const getBuildingsList = useQuery('getBuildings', async () => {
    // console.log(DataToSend);
    const buildings = await JSON.parse((await axios.post('/api/getBuildingsListAPI', DataToSend)).data.buildings);
    return buildings;
  })
  // const queryClient = new QueryClient();
  // queryClient.removeQueries(['getOneBuilding'], { exact: true });
  // console.log(getBuildingsList.data?.[0] == null);
  if (getBuildingsList.status == "loading") return <Loading />
  return (
    (getBuildingsList.data?.[0] != null ?
      (<div style={{ marginLeft: "4rem", marginRight: "4rem" }}>
        <Grid.Container gap={2} justify="left">
          {getBuildingsList.data.map(building => (
            <Grid key={building.id} xs={12} sm={4}>
              <Building building={building} />
            </Grid>))}
        </Grid.Container>
      </div>)
      :
      <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ display: 'flex', justifyContent: "center", color: '#555454' }}>Vous n&apos;êtes résident d&apos;aucun immeuble.</h2><h4 style={{ display: 'flex', justifyContent: "center", color: '#656565' }}>Veuillez demander aux administrateurs de votre immeuble de vous inviter.</h4><h4 style={{ display: 'flex', justifyContent: "center", color: '#656565' }}>Ou bien, créez-la vous-même.</h4>
      </div >)
  )
}
export default ListBuildings