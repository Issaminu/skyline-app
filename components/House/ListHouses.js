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
// import { QueryClient } from 'react-query'
// import { useEffect } from "react";
// import '../TagifyUser.js'
const ListHouses = () => {
    // const user = useUser();
    // const houseColor
    // user.user.buildingIDs = [];
    const getHousesList = useQuery('getHousesList', async () => {
        const houses = await JSON.parse((await axios.get('/api/getHousesListAPI')).data.houses);
        return houses;
    });
    // const queryClient = useQueryClient();
    const router = useRouter();
    let i = 1;
    if (getHousesList.status == "loading") return <Loading />
    let houseArray = [];
    getHousesList.data.map((house) => {
        houseArray.push([house.floor, house]);
    })
    console.log(houseArray)
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {/* <div>
                    Etage {i}
                </div> */}
                <div style={{ display: "flex", flexDirection: "row" }}>

                    <Grid.Container gap={2}>
                        {getHousesList.data.map((house) => {
                            {
                                return < Grid key={house.name} >
                                    <Card bordered onClick={() => { router.push("/buildings/" + house.buildingId + "/houses/" + house.name) }} shadow={false} title="Paye ce mois" hoverable clickable css={{
                                        width: "8rem", height: "8rem", display: "flex", justifyContent: "center",
                                        backgroundColor: (house.status == "empty" ? "#C3C1C1" : (house.status == "paid" ? "#17c964" : "#f31260"))
                                    }}>
                                        <div style={{ display: "flex", marginBottom: '0', justifyContent: "center", fontWeight: "bold", fontSize: "1.7rem", color: "white" }}>
                                            {house.name}

                                        </div>
                                        <div style={{ display: "flex", marginBottom: '-1rem', justifyContent: "center", fontWeight: "bold", fontSize: "1.7rem", color: "white" }}>
                                            {house.status == "empty" ? <h4>Vide</h4> : (house.status == "paid" ? <h4>Payé</h4> : <h4 style={{ whiteSpace: 'nowrap' }}>Non payé</h4>)}

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

export default ListHouses