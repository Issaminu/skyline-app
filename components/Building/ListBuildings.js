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

const ListBuildings = () => {
    // const user = useUser();

    // user.user.buildingIDs = [];
    const getBuildingsList = useQuery('getBuildings', async () => {
        const buildings = await JSON.parse((await axios.get('/api/getBuildingsListAPI')).data.buildings);
        return buildings;
    })
    // const queryClient = new QueryClient();
    // queryClient.removeQueries(['getOneBuilding'], { exact: true });

    if (getBuildingsList.status == "loading") return <Loading />
    return (
        <div style={{ marginLeft: "4rem", marginRight: "4rem" }}>

            <Grid.Container gap={2} justify="left">
                {getBuildingsList.data.map(building => (

                    <Grid key={building.id} xs={12} sm={4}>
                        <Building building={building} />
                    </Grid>))}


            </Grid.Container>
        </div>
    )
}

export default ListBuildings