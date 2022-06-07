// import React from 'react'
// import { useUser } from "@auth0/nextjs-auth0";
import { Grid, Container, Card, Button, Image, css } from "@nextui-org/react"
// import { useEffect, useState } from "react";
import Building from "../Building/Building";
import Loading from '../Loading'
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import LocalPoliceRoundedIcon from '@mui/icons-material/LocalPoliceRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';

const Resident = (props) => {
  const resident = props.resident;
  return (
    <Card variant="bordered" title={(resident.importance == 1 ? "Résident" : (resident.importance == 3 ? "Créateur" : "Administrateur"))} css={{
      padding: 0,
      width: "8rem", height: "8rem", display: "flex", justifyContent: "center",
      // backgroundColor: (resident.importance == 1 ? "#C3C1C1" : (resident.importance == 3 ? "#ED9F55" : "#f31260"))
    }}>
      <div style={{ color: (resident.importance == 1 ? "#ED9F55" : (resident.importance == 3 ? "#ED9F55" : "#ED9F55")), display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
        {resident.importance == 1 ? <PersonRoundedIcon style={{ height: '2.6rem', width: '2.6rem' }} /> : (resident.importance == 3 ? <LocalPoliceRoundedIcon style={{ height: '2.6rem', width: '2.6rem' }} /> : <ShieldRoundedIcon style={{ height: '2.6rem', width: '2.6rem' }} />)}
      </div>
      <div style={{ color: "black", display: 'flex', justifyContent: 'center', flexDirection: 'column' }} title={resident.name}>
        {resident.name.split(' ').map((name) => { return <div key={name} style={{ display: 'flex', justifyContent: 'center' }}><h5 key={name} style={{ marginBottom: 0 }}>{name.slice(0, 9) + (name.length > 9 ? "..." : "")}</h5></div> })}
        {/* <h6>{resident.name}</h6> */}

      </div>
    </Card>
  )
}

export default Resident