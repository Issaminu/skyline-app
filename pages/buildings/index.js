// import React from 'react'

import { Breadcrumbs } from "@mui/material"
import { Grid, Button, Image, css } from "@nextui-org/react"
import Link from "next/link"
import AddIcon from '@mui/icons-material/Add';
import AddBuilding from '../../components/Building/AddBuilding'
import Building from "../../components/Building/Building";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import ListBuildings from "../../components/Building/ListBuildings";
import { useQueryClient } from 'react-query'

const buildings = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const queryClient = useQueryClient();
    queryClient.removeQueries(["getOneBuilding"]);
    queryClient.removeQueries(["getHousesList"]);
    // console.log("hey")
    return (
        <>
            <main>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "4rem", marginRight: "4rem" }}>
                    <h1 style={{ marginBottom: 0, color: "#457B9D" }}>Immeubles</h1>
                    <AddBuilding />
                </div>
                <ListBuildings />
            </main>


        </>
    )
}

export default buildings