// import React from 'react'

import { Breadcrumbs } from "@mui/material"
import { Grid, Button, Image, css } from "@nextui-org/react"
import Link from "next/link"
import AddIcon from '@mui/icons-material/Add';
import AddBuilding from '../../components/AddBuilding'
import Building from "../../components/Building";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import ListBuildings from "../../components/ListBuildings";
import { useQueryClient } from 'react-query'

const buildings = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const queryClient = useQueryClient();
    queryClient.removeQueries(["getOneBuilding"]);
    // console.log("hey")
    return (
        <>
            <main style={{}} >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "4rem", marginRight: "4rem" }}>
                    <h1 style={{ marginBottom: 0, }}>Immeubles</h1>
                    <AddBuilding css={{}} />
                </div>
                <ListBuildings />
            </main>


        </>
    )
}

export default buildings