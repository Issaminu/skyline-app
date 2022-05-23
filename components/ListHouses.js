// import React from 'react'
// import { useUser } from "@auth0/nextjs-auth0";
import { Grid, Container, Card, Button, Image, css } from "@nextui-org/react"
// import { useEffect, useState } from "react";
import Building from "./Building";
import Loading from './Loading'
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
// import { QueryClient } from 'react-query'
// import { useEffect } from "react";

const ListHouses = () => {
    // const user = useUser();

    // user.user.buildingIDs = [];
    const getHousesList = useQuery('getHousesList', async () => {
        const houses = await JSON.parse((await axios.get('/api/getHousesListAPI')).data.houses);
        return houses;
    });
    const queryClient = useQueryClient();
    queryClient.removeQueries(["getOneHouse"]);
    // console.log(getHousesList.data);
    // const queryClient = new QueryClient();
    // queryClient.removeQueries(['getOneBuilding'], { exact: true });
    const router = useRouter();
    if (getHousesList.status == "loading") return <Loading />
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    Etage 5
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>

                    <Grid.Container gap={2}>
                        {getHousesList.data.map((house) => {
                            return <Grid key={house.name}>
                                <Card bordered onClick={() => { router.push("/buildings/" + router.asPath.split("/").slice(2).join("/") + "/houses/" + house.name) }} shadow={false} title="Paye ce mois" hoverable clickable css={{ width: "8rem", height: "8rem", display: "flex", justifyContent: "center", backgroundColor: "#17C964" }}>
                                    <div style={{ display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "1.4rem", color: "white" }}>
                                        {house.name}

                                    </div>
                                </Card>
                            </Grid>

                        })}
                    </Grid.Container>
                </div>
            </div>
        </>


    )
}

export default ListHouses