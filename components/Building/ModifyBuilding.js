// import React from 'react'

import { useUser } from "@auth0/nextjs-auth0";
import { Button, Text, css, Modal, Input, Textarea, Row } from "@nextui-org/react"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import toast from 'react-hot-toast';


const ModBuilding = (getBuilding) => {
    // console.log(getBuilding.getBuilding)
    const [visible, setVisible] = useState(false);
    // const [editVisible, setEditVisible] = useState(false);
    // const editHandler = () => setEditVisible(true);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [name, setName] = useState(getBuilding.getBuilding.name);
    const [location, setLocation] = useState(getBuilding.getBuilding.location);
    const [floors, setFloors] = useState(getBuilding.getBuilding.floors);
    const [surface, setSurface] = useState(getBuilding.getBuilding.surface);
    const [houses, setHouses] = useState(getBuilding.getBuilding.houseQuantity);
    const [notes, setNotes] = useState(getBuilding.getBuilding.notes);
    const [rent, setRent] = useState(getBuilding.getBuilding.rent)
    const [houseSize, setHouseSize] = useState(getBuilding.getBuilding.houseSize)
    const queryClient = useQueryClient();
    const { user } = useUser();
    const [modBuilding, setModBuilding] = useState("");
    // const postTodo=
    const modMyBuilding = useMutation(async (DataToSend) => {
        // console.log("add my building neeo")
        setModBuilding(await axios.post('/api/modBuildingAPI', DataToSend));
        // console.log(newBuilding.data.building.id)
    }, {
        onSuccess: async () => {
            queryClient.invalidateQueries('getBuildings');
            queryClient.invalidateQueries('getOneBuilding');

        }
    })
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        // console.log("closed");
    };
    // console.log(notes);
    const modBuildingSend = async (e) => {
        e.preventDefault();
        // const varNotes = "";

        let DataToSend = {
            id: parseInt(router.asPath.split("/").slice(2).join("/")),
            name: name,
            location: location,
            floors: parseInt(floors),
            surface: parseFloat(surface),
            houses: parseInt(houses),
            rent: parseFloat(rent),
            size: parseFloat(houseSize),
            notes: notes,
            teamid: user.id,
        };
        // console.log(DataToSend)
        modMyBuilding.mutate(DataToSend);
        // console.log("heres addMyBuilding:")
        // console.log(addMyBuilding)
        // console.log(user);
    }
    useEffect(() => {
        if (modMyBuilding.status == "success") {
            // user.buildingIDs.push(modBuilding.data.building.id)
            // console.log("hmmmmm")
            closeHandler();
            toast.success("Action réalisée avec succès");

        };
    }, [modBuilding, modMyBuilding.status])

    return (<>
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            width="35rem"
        >
            <Modal.Header>
                <h3 style={{ margin: 0 }}>Modifier Immeuble</h3>
            </Modal.Header>
            <form onSubmit={modBuildingSend}>

                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
                        <Input initialValue={getBuilding.getBuilding.name} bordered type="text" label="Nom d'immeuble" name="buildingName" onChange={(e) => { setName(e.target.value) }} required={true} />
                        <Input initialValue={getBuilding.getBuilding.location} bordered type="text" label="Location" name="buildingLocation" onChange={(e) => { setLocation(e.target.value) }} required={true} />
                        <Input initialValue={getBuilding.getBuilding.surface} bordered type="number" step="0.001" label="Surface globale (en m²)" labelRight="m²" name="buildingSurface" onChange={(e) => { setSurface(e.target.value) }} required={true} />

                        <div style={{ display: 'flex', gap: '3rem' }}>
                            <Input disabled initialValue={getBuilding.getBuilding.floors} bordered type="number" label="Nombre d'étages" name="buildingFloors" onChange={(e) => { setFloors(e.target.value) }} required={true} />
                            <Input disabled initialValue={getBuilding.getBuilding.houseQuantity} bordered type="number" label="Nombre d'appartements par étage" name="buildingHouses" onChange={(e) => { setHouses(e.target.value) }} required={true} />
                        </div>
                        <Input bordered initialValue={getBuilding.getBuilding.rent} type="number" step="0.001" min="1" label="Prix de location" name="buildingRent" labelRight="DH" onChange={(e) => { setRent(e.target.value) }} required={true} />
                        <Input bordered initialValue={getBuilding.getBuilding.houseSize} type="number" step="0.001" min="1" label="Dimensions d'un appartement (en m²)" name="buildingAppartementSize" labelRight="m²" onChange={(e) => { setHouseSize(e.target.value) }} required={true} />

                        {/* <Textarea initialValue={getBuilding.getBuilding.notes} bordered minRows={2} maxRows={5} label="Commentaire (optionnel)" onChange={(e) => { setNotes(e.target.value) }} name="buildingNotes" /> */}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Row style={{ justifyContent: 'space-between' }}>

                        <Button size="md" onClick={closeHandler} light color="bruh">
                            Annuler
                        </Button>
                        <Button size="md" type="submit" shadow>Enregistrer</Button>
                    </Row>


                </Modal.Footer>
            </form>

        </Modal>
        <div width="1rem">
            <Button
                // fullWidth
                light
                css={{
                    minWidth: '2rem',
                    width: "1rem"
                }}
                // width="inherit"
                color="success"
                // size="xs"
                icon={<BorderColorIcon style={{ width: "1.14rem" }} />}
                auto
                onClick={handler}
            />
        </div>

    </>
    )
}

export default ModBuilding