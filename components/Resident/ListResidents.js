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
// import { QueryClient } from 'react-query'
// import { useEffect } from "react";
// import '../TagifyUser.js'
const ListResidents = (props) => {
    // const user = useUser();
    // const residentColor
    // user.user.buildingIDs = [];
    // let DataToSend = {};
    // const router = useRouter();

    // console.log(router.query.id)

    const getResidentsList = useQuery('getResidentsList', async () => {
        let DataToSend = {
            residentIDsArray: props.building.residentIDs.split(', ').map(Number),
        }
        const residents = await JSON.parse((await axios.post('/api/getResidentsListAPI', DataToSend)).data.residents);
        return residents;
    });
    // const queryClient = useQueryClient();
    // let i = 1;
    if (getResidentsList.status == "loading") return <Loading />
    // let residentArray = [];
    // getResidentsList.data.map((resident) => {
    //     residentArray.push([resident.floor, resident]);
    // })

    getResidentsList.data.map((resident) => {
        if (props.building.creatorId == resident.id) {
            resident.importance = 3;
        }
        else if (props.building.adminIDs.includes(resident.id)) {
            resident.importance = 2;
        }
        else {
            resident.importance = 1;
        }
    })
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {/* <div>
                    Etage {i}
                </div> */}
                <div style={{ display: "flex", flexDirection: "row" }}>

                    <Grid.Container gap={2} css={{ padding: 0 }}>
                        {getResidentsList.data.map((resident) => {
                            {
                                return <Grid key={resident.name} >
                                    <Card bordered shadow={false} title={(resident.importance == 1 ? "Résident" : (resident.importance == 3 ? "Créateur" : "Administrateur"))} css={{
                                        padding: 0,
                                        width: "8rem", height: "8rem", display: "flex", justifyContent: "center",
                                        // backgroundColor: (resident.importance == 1 ? "#C3C1C1" : (resident.importance == 3 ? "#ED9F55" : "#f31260"))
                                    }}>
                                        <div style={{ color: (resident.importance == 1 ? "#C3C1C1" : (resident.importance == 3 ? "#ED9F55" : "#f31260")), display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                                            {resident.importance == 1 ? <PersonRoundedIcon /> : (resident.importance == 3 ? <LocalPoliceRoundedIcon style={{ height: '2.6rem', width: '2.6rem' }} /> : <StarBorderRoundedIcon />)}
                                        </div>
                                        <div style={{ color: "black", display: 'flex', justifyContent: 'center', flexDirection: 'column' }} title={resident.name}>
                                            {resident.name.split(' ').map((name) => { return <div key={name} style={{ display: 'flex', justifyContent: 'center' }}><h5 key={name} style={{ marginBottom: 0 }}>{name.slice(0, 9) + (name.length > 9 ? "..." : "")}</h5></div> })}
                                            {/* <h6>{resident.name}</h6> */}

                                        </div>
                                    </Card>
                                </Grid>
                            }

                        })}
                    </Grid.Container>
                </div >
            </div >
        </>


    )
}

export default ListResidents