import React, { useState } from 'react'

import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
import { Card, Grid, Text, Divider, Button, Row, Input, Textarea } from '@nextui-org/react';
import { useRouter } from 'next/router';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();
    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [floors, setFloors] = useState();
    const [surface, setSurface] = useState();
    const [houses, setHouses] = useState();
    const [notes, setNotes] = useState();


    const addBuilding = async (e) => {
        e.preventDefault();
        let DataToSend = {
            name: name.target.value,
            location: location.target.value,
            floors: parseInt(floors.target.value),
            surface: parseInt(surface.target.value),
            houses: parseInt(houses.target.value),
            notes: notes.target.value,
        };
        // console.log("here's DataToSend:");
        // console.log(DataToSend);
        let ress = await fetch('/api/addBuildingAPI', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(DataToSend),
        })
            .then(function (response) {
                return response.json();
            })
        if (ress) {
            console.log("Building added successfully");
            handleClose();
        } else {
            console.log("loading or error");
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <main>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button> */}
            <Button color="primary" shadow auto onClick={handleClickOpen}><AddIcon style={{ marginRight: '0.5rem' }} />Ajout Immeuble</Button>

            <BootstrapDialog onClose={handleClose} aria-labelledby="" open={open} style={{}}>

                <Card css={{ mw: "100%" }}>
                    {/* <form> */}
                    <Card.Header css={{}}>
                        <h3 style={{ margin: 0 }}>Ajout Immeuble</h3>

                    </Card.Header>
                    <Divider />
                    <Card.Body css={{ marginBottom: '0.5rem' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
                            <Input clearable bordered type="text" label="Nom d'immeuble" name="buildingName" onChange={setName} required />
                            <Input clearable bordered type="text" label="Location" name="buildingLocation" onChange={setLocation} required />
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Input bordered type="number" label="Nombre d'étages" name="buildingFloors" onChange={setFloors} required />
                                <Input bordered type="number" label="Nombre d'appartements" name="buildingHouses" onChange={setHouses} required />
                            </div>

                            <Input clearable bordered type="text" label="Surface globale" name="buildingSurface" onChange={setSurface} required />
                            <Textarea bordered minRows={2} maxRows={5} label="Commentaire (optionnel)" onChange={setNotes} name="buildingNotes" />
                        </div>

                    </Card.Body>
                    {/* <Divider /> */}
                    <Card.Footer>
                        <Row style={{ justifyContent: 'space-between' }}>
                            <Button size="md" onClick={handleClose} flat color="bruh">
                                Annuler
                            </Button>
                            <Button size="md" onClick={addBuilding}>Enregistrer</Button>
                        </Row>
                    </Card.Footer>
                    {/* </form> */}
                </Card>
            </BootstrapDialog>
        </main>
    );
}
