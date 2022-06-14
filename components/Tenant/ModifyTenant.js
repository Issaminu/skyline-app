// import React from 'react'

import { useUser } from "@auth0/nextjs-auth0";
import { Button, Text, css, Modal, Input, Textarea, Row, } from "@nextui-org/react"
import { useRouter } from "next/router";
import Loading from "../Loading"
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { myUserState } from '../../store/atoms';

const ModifyTenant = (getTenant) => {
    const [myUser, setMyUser] = useRecoilState(myUserState);
    const [visible, setVisible] = useState(false);
    // const [editVisible, setEditVisible] = useState(false);
    // const editHandler = () => setEditVisible(true);
    // const [open, setOpen] = useState(false);
    // const router = useRouter();
    const [name, setName] = useState(getTenant.getTenant.name);
    // const [location, setLocation] = useState();
    const [email, setEmail] = useState(getTenant.getTenant.email);
    const [phone, setPhone] = useState(getTenant.getTenant.phone);
    const [cin, setCin] = useState(getTenant.getTenant.cin);
    const [familySize, setFamilySize] = useState(getTenant.getTenant.familySize);
    const [job, setJob] = useState(getTenant.getTenant.job);
    // const [appartementSize, setAppartementSize] = useState();
    const [tenantImage, setTenantImage] = useState(null);
    // const [createObjectURL, setCreateObjectURL] = useState(null);
    const uploadImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            console.log(i);

            setTenantImage(i);
            console.log(tenantImage);
            // setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const queryClient = useQueryClient();

    const { user } = useUser();
    const [newTenant, setNewTenant] = useState("");
    // const postTodo=
    const modifyMyTenant = useMutation(async (DataToSend) => {
        // console.log("modify my building neeo")
        setNewTenant(await axios.post('/api/modTenantAPI', DataToSend));
        // console.log(newBuilding.data.building.id)
    }, {
        onSuccess: async () => {
            queryClient.invalidateQueries('getTenants');
            queryClient.invalidateQueries('getOneTenant');
            toast.success("Action réalisée avec succès");

        }
    })
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        // console.log("closed");
    };
    const modifyTenant = async (e) => {
        e.preventDefault();
        // const varNotes = "";

        let DataToSend = {
            id: getTenant.getTenant.id,
            name: name,
            email: email,
            phone: phone,
            cin: cin,
            familySize: parseInt(familySize),
            job: job,
            // notes: "TEMP", //THIS NEEDS TO GET REMOVED
            // rent: parseFloat(rent.target.value),
            // appartementSize: parseFloat(appartementSize.target.value),
            teamid: myUser.id,
        };
        // console.log(DataToSend)
        modifyMyTenant.mutate(DataToSend);
        // console.log("heres modifyMyBuilding:")
        // console.log(modifyMyBuilding)
        // console.log(user);
    }
    useEffect(() => {
        if (modifyMyTenant.status == "success") {
            // user.buildingIDs.push(newBuilding.data.building.id)
            // console.log("im success here")
            closeHandler();

        };
    }, [newTenant, modifyMyTenant.status])
    // if (modifyMyTenant.status == "loading") {
    //     // console.log("im loading here")
    //     return <><Loading /></>
    // }
    return (<>
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            width="35rem"
        >
            <Modal.Header>
                <h3 b="true" style={{ margin: 0 }}>Ajout Locataire</h3>
            </Modal.Header>
            <form onSubmit={modifyTenant}>

                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
                        <Input initialValue={getTenant.getTenant.name} bordered type="text" label="Nom" name="tenantName" onChange={(e) => setName(e.target.value)} required={true} />
                        <Input initialValue={getTenant.getTenant.email} bordered type="text" label="Email" name="tenantEmail" onChange={(e) => setEmail(e.target.value)} required={true} />
                        <Input initialValue={getTenant.getTenant.phone} bordered type="text" label="Numéro de téléphone" name="tenantPhone" onChange={(e) => setPhone(e.target.value)} required={true} />
                        <Input initialValue={getTenant.getTenant.cin} bordered type="text" label="CIN" name="tenantCin" onChange={(e) => setCin(e.target.value)} required={true} />
                        {/* <Input bordered type="text" label="Mariée?" name="buildingLocation" onChange={setLocation} required={true} /> */}
                        <Input initialValue={getTenant.getTenant.familySize} bordered type="number" step="1" min="1" label="Nombre de membres du famille" name="tenantFamilySize" onChange={(e) => setFamilySize(e.target.value)} required={true} />
                        <Input initialValue={getTenant.getTenant.job} bordered type="text" label="Métier" name="tenantJob" onChange={(e) => setJob(e.target.value)} required={true} />
                        {/* <input type="file" accept="image/png, image/jpeg, image/jpg, image/svg, image/webp" onChange={((e) => uploadImage(e))}></input> */}
                        {/* <Input type="file" accept="image/png, image/jpeg, image/jpg, image/svg, image/webp" onChange={((e) => imageUpload(e))}/> */}

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
                icon={<BorderColorRoundedIcon style={{ width: "1.14rem" }} />}
                auto
                onClick={handler}
            />
        </div>
    </>
    )
}

export default ModifyTenant
