import React from 'react'
import { Grid, Button, Image, css } from "@nextui-org/react"
// import { useEffect, useState } from "react";
import Loading from '../Loading'
import { useQuery } from "react-query";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0";
import Invitation from './Invitation';
import { useRecoilState } from 'recoil';
import { myUserState } from '../../store/atoms';

const ListInvitations = () => {
  const [myUser, setMyUser] = useRecoilState(myUserState);
  const getInvitationsList = useQuery('getInvitations', async () => {
    const result = await axios.post('/api/getInvitationsListAPI', { myUser: myUser }).then(res => {
      // console.log(res);
      return res.data;
    });
    return result;
  });
  if (getInvitationsList.status == "loading") return <Loading />
  // console.log(getInvitationsList.data.result?.myUser);
  // setMyUser(getInvitationsList.data.result.myUser);
  return (
    (JSON.parse(getInvitationsList.data.result?.invitations)?.[0] != null ?
      (<div style={{ marginLeft: "10rem", marginRight: "10rem", marginTop: '2rem' }}>
        <Grid.Container gap={1} justify="left">
          {JSON.parse(getInvitationsList.data.result.invitations).map(invitation => (
            <Grid key={invitation.id} style={{ height: '7rem' }} sm={400}>
              <Invitation invitation={invitation} />
            </Grid>))}
        </Grid.Container>
      </div>)
      :
      (<div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ display: 'flex', justifyContent: "center", color: '#555454' }}>Vous n&apos;avez aucune invitation en attente.</h2>
      </div>)
    )
  )
}

export default ListInvitations