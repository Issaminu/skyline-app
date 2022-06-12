// import React from 'react'
// import { useUser } from "@auth0/nextjs-auth0";
import { Grid, Container, Card, Button, Image, css, Dropdown, Text, Tooltip, Switch } from "@nextui-org/react"
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
  const { user } = useUser();
  // console.log(user);

  const resident = props.resident;
  if (props.building.adminIDs.includes(user.id)) {
    user.importance = 2;
    if (props.building.creatorId == user.id) {
      user.importance = 3;
    }
  }
  let checked = (resident.importance == 2);
  // console.log(checked)
  return (
    <Dropdown placement="right-top" disableAnimation>
      <Dropdown.Trigger>

        <Card isHoverable variant="bordered" title={(resident.importance == 1 ? "Résident" : (resident.importance == 3 ? "Créateur" : "Administrateur"))} css={{
          padding: 0,
          cursor: 'pointer',
          width: "8rem", height: "8rem", display: "flex", justifyContent: "center",
          // backgroundColor: (resident.importance == 1 ? "#C3C1C1" : (resident.importance == 3 ? "#ED9F55" : "#f31260"))
        }}>
          <div style={{ color: (resident.importance == 1 ? "#C3C1C1" : (resident.importance == 3 ? "#ED9F55" : "#ED9F55")), display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            {resident.importance == 1 ? <PersonRoundedIcon style={{ height: '2.6rem', width: '2.6rem' }} /> : (resident.importance == 3 ? <LocalPoliceRoundedIcon style={{ height: '2.6rem', width: '2.6rem' }} /> : <ShieldRoundedIcon style={{ height: '2.6rem', width: '2.6rem' }} />)}
          </div>
          <div style={{ color: "black", display: 'flex', justifyContent: 'center', flexDirection: 'column' }} title={resident.name}>
            {resident.name.split(' ').map((name) => { return <div key={name} style={{ display: 'flex', justifyContent: 'center' }}><h5 key={name} style={{ marginBottom: 0 }}>{name.slice(0, 9) + (name.length > 9 ? "..." : "")}</h5></div> })}
            {/* <h6>{resident.name}</h6> */}
          </div>
        </Card>
      </Dropdown.Trigger>
      <Dropdown.Menu color="primary" aria-label="Resident Actions" css={{ height: 'fit-content !important', width: 'fit-content' }}>
        <Dropdown.Item textValue={resident.email} key="residentInfo" css={{ height: "fit-content", pointerEvents: 'none', ':focus': { outline: 'none' }, ':focus-visible': { outline: 'none' } }}>
          <Text b css={{ d: "flex", justifyContent: 'center', color: '#ED9F55' }}>
            {resident.importance == 1 ? "Résident" : (resident.importance == 3 ? "Créateur" : "Administrateur")}
          </Text>
          <Text b color="inherit" css={{ d: "flex", justifyContent: 'center' }}>
            {resident.email}
          </Text>
          <Text b color="inherit" css={{ d: "flex", justifyContent: 'center' }}>
            {resident.phone}
          </Text>
          <Text color="inherit" css={{ d: "flex", justifyContent: 'center' }}>
            <span style={{ maxWidth: '9rem' }}>
              {/* {resident.residentHouses = "1g, 3f, 5f, 7g, 21f, 1g, 3f, 5f, 7g, 21f"} */}
              {resident.residentHouses}
            </span>
          </Text>
        </Dropdown.Item>
        {user.importance == 3 ?
          (resident.importance != 3 ?
            <Dropdown.Item textValue="Remove admin" key="settings" withDivider css={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}>
                Administrateur <Switch checked={checked} animated={false} size="sm" />
              </div>
            </Dropdown.Item>
            : null) : null}
        {resident.importance != 3 ?
          (resident.id == user.id ?
            <Dropdown.Item textValue="Remove user" key="logout" color="error" withDivider>
              Quitter l&apos;immeuble
            </Dropdown.Item>
            : (user.importance >= 2 ?
              <Dropdown.Item textValue="Remove user" key="logout" color="error" withDivider css={{ width: 'fit-content' }}>
                Retirer cet utilisateur de l&apos;immeuble
              </Dropdown.Item> : null)) : null}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Resident