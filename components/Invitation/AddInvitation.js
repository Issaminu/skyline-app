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
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { useRecoilState } from 'recoil';
import { myUserState } from '../../store/atoms';
const AddInvitation = (props) => {
  const [visible, setVisible] = useState(false);
  const [myUser, setMyUser] = useRecoilState(myUserState);
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [surface, setSurface] = useState();
  const [houses, setHouses] = useState();
  const [submitStatus, setSubmitStatus] = useState(true);
  const queryClient = useQueryClient();
  const { user } = useUser();
  const [newInvitation, setNewInvitation] = useState("");
  const [selectedCityOption, setSelectedCityOption] = useState(null);
  const [receiverEmail, setReceiverEmail] = useState();
  const [adminSelection, setAdminSelection] = useState(false);
  const [receiverHouses, setReceiverHouses] = useState([]);


  const addMyInvitation = useMutation((DataToSend) => {
    return axios.post('/api/addInvitationAPI', DataToSend);
  }, {
    onSuccess: async () => {
      toast.success("Invitation envoyée avec succès.");
      closeHandler();
    },
    onError: async (error) => {
      toast.error(error.response.data.message, { style: {} });
      closeHandler();
    }
  });
  const customStyles = {
    control: (base, state) => ({
      ...base,
    }),
    menu: (base) => ({
      ...base,
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: '6rem',
    }),
  };
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    setAdminSelection(false);
  };
  // console.log(receiverHouses);

  const addInvitation = async (e) => {
    e.preventDefault();
    let receiverHouseNames = "";
    let receiverHouseIDs = "";
    receiverHouses.map((house, index) => {
      receiverHouseNames = receiverHouseNames + house.name + ", ";
      receiverHouseIDs = receiverHouseIDs + house.id + ", ";
    });
    let DataToSend = {
      building: props.building,
      receiverEmail: receiverEmail.target.value,
      isAdmin: adminSelection,
      receiverHouseIDs: receiverHouseIDs,
      receiverHouseNames: receiverHouseNames,
      myUser: myUser
    };
    addMyInvitation.mutate(DataToSend);
    setAdminSelection(false);
  }
  // console.log(addMyInvitation);
  // console.log(receiverHouses?.[0] != null);
  useEffect(() => {
    if (receiverEmail?.target.value && receiverEmail?.target.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && receiverHouses?.[0] != null) {
      setSubmitStatus(false);
    }
    if ((receiverEmail?.target.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) == null || !(!!receiverEmail?.target.value) || (receiverHouses?.[0] == null)) {
      setSubmitStatus(true);
    }
  }, [receiverEmail?.target.value, receiverHouses]);
  return (<>
    <Modal
      style={{ zIndex: 1, height: "30rem" }}
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
        <Modal.Body style={{ height: '20rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
            <Input bordered type="email" label="Email de l'invité" name="invitationName" onChange={setReceiverEmail} required={true} />

            {props.building.adminIDs.includes(myUser.id) ?
              <Checkbox isSelected={adminSelection} onChange={setAdminSelection} color="primary" size="sm">
                Rendez cet utilisateur un administrateur
              </Checkbox>

              : <p style={{ marginTop: 0, marginBottom: 0, color: "#F5A524" }}><ErrorOutlineRoundedIcon style={{ height: '0.9rem', paddingTop: '0.07rem' }} /><b>Un administrateur de cet immeuble va vérifier cette invitation.</b></p>}
            <div>
              <p
                style={{
                  margin: 0,
                  marginLeft: '0.29rem',
                  fontSize: '0.875rem',
                  letterSpacing: '0.01rem',
                  userSelect: 'none',
                }}
              >
                Appartements occupés par l&apos;invité
              </p>
              <Select
                isMulti
                onChange={(e) => {
                  setReceiverHouses(e);
                }}
                name="selectTenants"
                options={props.appartements}
                styles={customStyles}
                placeholder=""
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ marginTop: '0rem' }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Button size="md" onClick={closeHandler} light color="bruh">
              Annuler
            </Button>
            <Button disabled={submitStatus} size="md" shadow type="submit">Inviter</Button>
          </Row>
        </Modal.Footer>
      </form>
    </Modal>
    <Button css={{ marginTop: "1rem", }} shadow auto onClick={handler}><AddCircleRoundedIcon style={{ marginRight: '0.5rem' }} />Inviter un utilisateur</Button>
  </>
  )
}

export default AddInvitation;