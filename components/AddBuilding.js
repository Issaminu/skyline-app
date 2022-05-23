// import React from 'react'

import { useUser } from "@auth0/nextjs-auth0";
import { Button, Text, css, Modal, Input, Textarea, Row, } from "@nextui-org/react"
import { useRouter } from "next/router";
import Loading from "../components/Loading"
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'
const AddBuilding = () => {
    const [visible, setVisible] = useState(false);
    // const [editVisible, setEditVisible] = useState(false);
    // const editHandler = () => setEditVisible(true);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [floors, setFloors] = useState();
    const [surface, setSurface] = useState();
    const [houses, setHouses] = useState();
    const [notes, setNotes] = useState("");
    const [rent, setRent] = useState();
    const [appartementSize, setAppartementSize] = useState();

    const queryClient = useQueryClient();

    const { user } = useUser();
    const [newBuilding, setNewBuilding] = useState("");
    // const postTodo=
    const addMyBuilding = useMutation(async (DataToSend) => {
        // console.log("add my building neeo")
        setNewBuilding(await axios.post('/api/addBuildingAPI', DataToSend));
        // console.log(newBuilding.data.building.id)
    }, {
        onSuccess: async () => {
            queryClient.invalidateQueries('getBuildings');

        }
    })
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        // console.log("closed");
    };

    const addBuilding = async (e) => {
        e.preventDefault();
        // const varNotes = "";

        let DataToSend = {
            name: name.target.value,
            location: location.target.value,
            floors: parseInt(floors.target.value),
            surface: parseFloat(surface.target.value),
            houses: parseInt(houses.target.value),
            notes: "TEMP", //THIS NEEDS TO GET REMOVED
            rent: parseFloat(rent.target.value),
            appartementSize: parseFloat(appartementSize.target.value),
            teamid: user.id,
        };
        // console.log(DataToSend)
        addMyBuilding.mutate(DataToSend);
        // console.log("heres addMyBuilding:")
        // console.log(addMyBuilding)
        closeHandler();
        // console.log(user);
    }
    useEffect(() => {

        if (addMyBuilding.status == "success") {
            user.buildingIDs.push(newBuilding.data.building.id)
            // console.log("im success here")
        };
    }, [newBuilding, addMyBuilding.status])
    if (addMyBuilding.status == "loading") {
        // console.log("im loading here")
        return <><Loading /></>
    }
    return (<>
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            width="35rem"
        >
            <Modal.Header>
                <h3 b="true" style={{ margin: 0 }}>Ajout Immeuble</h3>
            </Modal.Header>
            <form onSubmit={addBuilding}>

                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
                        <Input bordered type="text" label="Nom d'immeuble" name="buildingName" onChange={setName} required={true} />
                        <Input bordered type="text" label="Location" name="buildingLocation" onChange={setLocation} required={true} />
                        <Input bordered type="number" min="1" step="0.001" label="Surface globale (en m²)" labelRight="m²" name="buildingSurface" onChange={setSurface} required={true} />

                        <div style={{ display: 'flex', gap: '3rem' }}>
                            <Input bordered type="number" min="1" step="1" label="Nombre d'étages" name="buildingFloors" onChange={setFloors} required={true} />
                            <Input bordered type="number" min="1" step="1" label="Nombre d'appartements par étage" name="buildingHouses" onChange={setHouses} required={true} />
                        </div>
                        <Input bordered type="number" step="0.001" min="1" label="Prix de location" name="buildingRent" labelRight="DH" onChange={setRent} required={true} />
                        <Input bordered type="number" step="0.001" min="1" label="Dimensions d'un appartement (en m²)" name="buildingAppartementSize" labelRight="m²" onChange={setAppartementSize} required={true} />

                        {/* <Textarea bordered minRows={2} maxRows={5} label="Commentaire (optionnel)" onChange={setNotes} name="buildingNotes" /> */}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Row style={{ justifyContent: 'space-between' }}>
                        <Button size="md" onClick={closeHandler} light color="bruh">
                            Annuler
                        </Button>
                        <Button size="md" shadow type="submit">Enregistrer</Button>
                    </Row>


                </Modal.Footer>
            </form>

        </Modal>
        <Button color="primary" css={{ marginTop: "1rem" }} shadow auto onClick={handler}><AddIcon style={{ marginRight: '0.5rem' }} />Ajout Immeuble</Button>

    </>
    )
}

export default AddBuilding