// import React from "react";
import { Text, Button, Grid, Row, Modal } from "@nextui-org/react";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from 'next/router';
import axios from "axios";
import { Router } from "react-router-dom";
import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteBuilding = () => {
    const { user } = useUser();
    const router = useRouter();
    const deleteThisBuilding = (async () => {
        // console.log(user.user.buildingIDs)
        await axios.get('/api/delBuildingAPI');
        user.buildingIDs.pop(router.asPath.split("/").slice(2).join("/"))
        router.push('/buildings');
    })
    const [visible, setVisible] = useState(false);
    // const [editVisible, setEditVisible] = useState(false);
    const handler = () => setVisible(true);
    // const editHandler = () => setEditVisible(true);

    const closeHandler = () => {
        setVisible(false);
        // console.log("closed");
    };
    return (
        <>
            <Button
                light
                onClick={handler}
                color="error"
                icon={<DeleteIcon fill="currentColor" />}
                auto
                // size="xs"
                css={{
                    // width: 'auto',
                    // backgroundColor: "#FCD7E5",
                    // color: "#F21361",
                    // "&:active": {
                    //     backgroundColor: "#fcc5d8"
                    // }
                }}
            />

            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                width="30rem"
            >
                <Modal.Header>
                    <h3 b>Confirmation</h3>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: "column", textAlign: 'center' }}>
                        <Text>Êtes-vous sûr que vous souhaitez supprimer cette immeuble ?</Text>
                        <Text b>Cette action est irréversible</Text>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    {/* <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Button auto flat color="error" onClick={closeHandler}>
                                Close
                            </Button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                            <Button auto onClick={closeHandler}>
                                Sign in
                            </Button>
                        </div>


                    </div> */}
                    <Grid.Container justify="space-between" alignContent="center">
                        <Grid>
                            <Button light onClick={closeHandler} css={{ width: "8rem", minWidth: "3rem" }} >
                                Annuler
                            </Button>
                        </Grid>
                        <Grid>
                            <Button shadow color="error" css={{ width: "8rem", minWidth: "3rem" }} onClick={deleteThisBuilding}>
                                Supprimer
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteBuilding