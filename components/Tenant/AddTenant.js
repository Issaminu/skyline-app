// import React from 'react'

import { useUser } from "@auth0/nextjs-auth0";
import { Button, Text, css, Modal, Input, Textarea, Row, } from "@nextui-org/react"
import { useRouter } from "next/router";
import Loading from "../Loading"
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import toast from 'react-hot-toast';
import { myUserState } from '../../store/atoms';
import { useRecoilState } from 'recoil';

const AddTenant = () => {
  const [myUser, setMyUser] = useRecoilState(myUserState);
  const [visible, setVisible] = useState(false);
  // const [editVisible, setEditVisible] = useState(false);
  // const editHandler = () => setEditVisible(true);
  // const [open, setOpen] = useState(false);
  // const router = useRouter();
  const [name, setName] = useState();
  // const [location, setLocation] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [cin, setCin] = useState();
  const [familySize, setFamilySize] = useState();
  const [job, setJob] = useState();
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

  // const { user } = useUser();
  const [newTenant, setNewTenant] = useState("");
  // const postTodo=
  const addMyTenant = useMutation(async (DataToSend) => {
    // console.log("add my building neeo")
    setNewTenant(await axios.post('/api/addTenantAPI', DataToSend));
    // console.log(newBuilding.data.building.id)
  }, {
    onSuccess: async () => {
      queryClient.invalidateQueries('getTenants');
      toast.success("Action réalisée avec succès");

    }
  })
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    // console.log("closed");
  };
  const addTenant = async (e) => {
    e.preventDefault();
    // const varNotes = "";

    let DataToSend = {
      name: name.target.value,
      email: email.target.value,
      phone: phone.target.value,
      cin: cin.target.value,
      familySize: familySize.target.value,
      job: job.target.value,
      // notes: "TEMP", //THIS NEEDS TO GET REMOVED
      // rent: parseFloat(rent.target.value),
      // appartementSize: parseFloat(appartementSize.target.value),
      teamid: myUser.id,
    };
    // console.log(DataToSend)
    addMyTenant.mutate(DataToSend);
    // console.log("heres addMyBuilding:")
    // console.log(addMyBuilding)
    closeHandler();
    // console.log(user);
  }
  useEffect(() => {
    if (addMyTenant.status == "success") {
      // user.buildingIDs.push(newBuilding.data.building.id)
      // console.log("im success here")
    };
  }, [newTenant, addMyTenant.status])
  if (addMyTenant.status == "loading") {
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
        <h3 b="true" style={{ margin: 0 }}>Ajout Locataire</h3>
      </Modal.Header>
      <form onSubmit={addTenant}>

        <Modal.Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
            <Input bordered type="text" label="Nom" name="tenantName" onChange={setName} required={true} />
            <Input bordered type="text" label="Email" name="tenantEmail" onChange={setEmail} required={true} />
            <Input bordered type="text" label="Numéro de téléphone" name="tenantPhone" onChange={setPhone} required={true} />
            <Input bordered type="text" label="CIN" name="tenantCin" onChange={setCin} required={true} />
            {/* <Input bordered type="text" label="Mariée?" name="buildingLocation" onChange={setLocation} required={true} /> */}
            <Input bordered type="number" step="1" label="Nombre de membres du famille" name="tenantFamilySize" onChange={setFamilySize} required={true} />
            <Input bordered type="text" label="Métier" name="tenantJob" onChange={setJob} required={true} />
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
    <Button color="primary" css={{ marginTop: "1rem" }} shadow auto onClick={handler}><AddIcon style={{ marginRight: '0.5rem' }} />Ajout Locataire</Button>

  </>
  )
}

export default AddTenant