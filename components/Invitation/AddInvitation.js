// import React from 'react'

import { useUser } from "@auth0/nextjs-auth0";
import { Button, Text, css, Modal, Input, Textarea, Row, Checkbox, } from "@nextui-org/react"
import { useRouter } from "next/router";
import Loading from "../Loading"
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'
import toast from 'react-hot-toast';
import Select from 'react-select';
import cityOptions from '../MoroccoCities.json';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';




const AddInvitation = (props) => {
    // console.log(cityOptions.cityOptions);
    const [visible, setVisible] = useState(false);
    // const [editVisible, setEditVisible] = useState(false);
    // const editHandler = () => setEditVisible(true);
    // const [open, setOpen] = useState(false);
    // const router = useRouter();
    const [name, setName] = useState();
    const [location, setLocation] = useState();
    // const [floors, setFloors] = useState();
    const [surface, setSurface] = useState();
    const [houses, setHouses] = useState();
    // const [notes, setNotes] = useState("");
    // const [rent, setRent] = useState();
    const [submitStatus, setSubmitStatus] = useState(true);

    const queryClient = useQueryClient();
    const { user } = useUser();
    const [newInvitation, setNewInvitation] = useState("");
    const [selectedCityOption, setSelectedCityOption] = useState(null);
    const [receiverEmail, setReceiverEmail] = useState();
    const [adminSelection, setAdminSelection] = useState(false);
    // console.log(String(name.target.value).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()))
    // const postTodo=
    const addMyInvitation = useMutation((DataToSend) => {
        // console.log("add my invitation neeo")
        // try {
        return axios.post('/api/addInvitationAPI', DataToSend);
        // } catch {
        //     (error) => { console.log(error) };
        // }

        // console.log(ress)
        // setNewInvitation(ress);
        // console.log(newInvitation.data.invitation.id)
    }, {
        onSuccess: async () => {
            toast.success("Invitation envoyée avec succès.");
            // console.log("invalidate sussy backa?")
            // queryClient.invalidateQueries('getInvitations');
        },
        onError: async (error) => {
            toast.error(error.response.data.message, { style: {} });
            closeHandler();
        }
    })
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        // console.log("closed");
    };
    const addInvitation = async (e) => {
        e.preventDefault();
        // const varNotes = "";

        let DataToSend = {
            building: props.building,
            receiverEmail: receiverEmail.target.value,
        };
        addMyInvitation.mutate(DataToSend);
        // console.log("heres addMyInvitation:")
        // console.log(addMyInvitation)
        // console.log(user);
    }
    // useEffect(() => {
    // console.log(addInvitation.status);

    // if (addMyInvitation.status == "success") {
    //     // user.invitationIDs.push(newInvitation.data.invitation.id)
    //     toast.success("Action réalisée avec succès");
    //     // console.log("im success here")
    // };
    // }, [newInvitation, addMyInvitation.status]);
    // useEffect(() => {
    //     if (adminSelection == true) {
    //         console.log("it is admin noe")
    //     }

    // }, [adminSelection]);

    // if (addMyInvitation.status == "loading") {
    //     // console.log("im loading here")
    //     return <><Loading /></>
    // }
    useEffect(() => {
        if (receiverEmail?.target.value) {
            setSubmitStatus(false);
        }
        if (!(!!receiverEmail?.target.value)) {
            setSubmitStatus(true);
        }
    }, [receiverEmail?.target.value]);
    return (<>
        <Modal
            style={{ zIndex: 1 }}
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            width="35rem"
        >
            <Modal.Header>
                <h3 b="true" style={{ margin: 0, }}>Inviter un utilisateur</h3>
            </Modal.Header>
            <form onSubmit={addInvitation}>

                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
                        <Input bordered type="email" label="Email de l'invité" name="invitationName" onChange={setReceiverEmail} required={true} />
                        <Checkbox isSelected={adminSelection} onChange={setAdminSelection} color="primary" size="sm">
                            Rendez cet utilisateur un administrateur
                        </Checkbox>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Row style={{ justifyContent: 'space-between' }}>
                        <Button size="md" onClick={closeHandler} light color="bruh">
                            Annuler
                        </Button>
                        <Button disabled={submitStatus} size="md" shadow type="submit">Enregistrer</Button>
                    </Row>


                </Modal.Footer>
            </form>

        </Modal>
        <Button css={{ marginTop: "1rem", }} shadow auto onClick={handler}><AddCircleRoundedIcon style={{ marginRight: '0.5rem' }} />Inviter un résident</Button>

    </>
    )
}

export default AddInvitation