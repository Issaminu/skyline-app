// import React from "react";
import { Text, Button, Grid, Row, Modal, Spacer } from "@nextui-org/react";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from 'next/router';
import axios from "axios";
import { Router } from "react-router-dom";
import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import toast from 'react-hot-toast';

const DeactivateTenant = () => {
    const { user } = useUser();
    const router = useRouter();
    const queryClient = useQueryClient();

    const deactivateThisTenant = (async () => {
        // console.log(user.user.buildingIDs)
        await axios.get('/api/deactivateTenantAPI');
        queryClient.invalidateQueries('getOneTenant');
        closeHandler();
        toast.success("Action réalisée avec succès");

        // user.buildingIDs.pop(router.asPath.split("/").slice(2).join("/"))
        // router.push('/buildings');
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
            <Button rounded flat color="success" onClick={handler} icon={<CheckCircleOutlineRoundedIcon fill="currentColor" style={{ height: "1rem", marginRight: "5rem !important" }} />} css={{ width: "8rem", minWidth: "8rem" }}><Spacer />Activé</Button>
            {/* <Button
                light
                onClick={handler}
                color="success"
                icon={<CheckCircleOutlineRoundedIcon fill="currentColor" />}
                auto
                // size="xs"
                css={{
                    width: '1rem',
                    minWidth: '1rem',
                    marginRight: '6.5rem'
                    // backgroundColor: "#FCD7E5",
                    // color: "#F21361",
                    // "&:active": {
                    //     backgroundColor: "#fcc5d8"
                    // }
                }}
            /> */}


            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                width="30rem"
            >
                <Modal.Header>
                    <h3 b="true">Confirmation</h3>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: "column", textAlign: 'center' }}>
                        <Text>Êtes-vous sûr que vous souhaitez désactiver ce locataire ?</Text>
                        <Text b="true">Vous pouvez toujours le réactiver</Text>
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
                            <Button rounded light onClick={closeHandler} css={{ width: "8rem", minWidth: "3rem" }} >
                                Annuler
                            </Button>
                        </Grid>
                        <Grid>
                            <Button rounded shadow color="error" css={{ width: "8rem", minWidth: "3rem" }} onClick={deactivateThisTenant}>
                                Désactiver
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeactivateTenant