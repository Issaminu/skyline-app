// import React from 'react'

import { Breadcrumbs } from "@mui/material"
import { Button, Image } from "@nextui-org/react"
import Link from "next/link"
import AddIcon from '@mui/icons-material/Add';
import AddBuilding from '../../components/AddBuilding'
const buildings = () => {
    const AjoutImmeuble = () => {
        return <AddBuilding />
    }
    return (
        <>
            <main style={{}} >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>Immeubles</h1>
                    <div style={{ display: "flex", alignItems: 'center' }}>

                        {/* <Button color="primary" shadow auto onClick={AjoutImmeuble}><AddIcon style={{ marginRight: '0.5rem' }} />Ajout Immeuble</Button> */}
                        <AddBuilding />
                    </div>
                </div>
                <Image src="/default.jpg" width="400px" height="400px"></Image>

            </main>

            <h1>This is Buildings</h1>
        </>
    )
}

export default buildings