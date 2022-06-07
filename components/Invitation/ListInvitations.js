import React from 'react'
import { Grid, Button, Image, css } from "@nextui-org/react"
// import { useEffect, useState } from "react";
import Loading from '../Loading'
import { useQuery } from "react-query";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0";
import Invitation from './Invitation';

const ListInvitations = () => {
  const getInvitationsList = useQuery('getInvitations', async () => {
    const invitations = await JSON.parse((await axios.get('/api/getInvitationsListAPI')).data.invitations);
    return invitations;
  });
  if (getInvitationsList.status == "loading") return <Loading />
  return (
    (getInvitationsList.data?.[0] != null ?
      (<div style={{ marginLeft: "10rem", marginRight: "10rem", marginTop: '2rem' }}>
        <Grid.Container gap={1} justify="left">
          {getInvitationsList.data.map(invitation => (
            <Grid key={invitation.id} style={{ height: '7rem' }} sm={400}>
              <Invitation invitation={invitation} />
            </Grid>))}
        </Grid.Container>
      </div>)
      :
      (<div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ display: 'flex', justifyContent: "center", color: '#555454' }}>Vous n'avez aucune invitation en attente.</h2>
      </div>)
    )
  )
}

export default ListInvitations