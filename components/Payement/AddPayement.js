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
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddPayement = (props) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [surface, setSurface] = useState();
  const [houses, setHouses] = useState();
  const [submitStatus, setSubmitStatus] = useState(true);
  const queryClient = useQueryClient();
  const { user } = useUser();
  const [residentPaying, setResidentPaying] = useState([]);
  const [payementDate, setPayementDate] = useState(new Date());
  const [amountPaid, setAmountPaid] = useState(null);
  const [reason, setReason] = useState(null);

  const addMyPayement = useMutation((DataToSend) => {
    return axios.post('/api/addPayementAPI', DataToSend);
  }, {
    onSuccess: async () => {
      toast.success("Cotisation ajoutée avec succès.");
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
  };
  // console.log(receiverHouses);
  let residents = null;
  useEffect(() => {
    residents = props.residents;
  }, []);
  const addPayement = async (e) => {
    e.preventDefault();

    let DataToSend = {
      building: props.building,
      resident: residentPaying,
      amountPaid: amountPaid,
      payementDate: payementDate,
      reason: reason,
    };
    addMyPayement.mutate(DataToSend);
  };
  // console.log(residentPaying?.id != null);
  // console.log(payementDate)
  // console.log(receiverHouses?.[0] != null);
  useEffect(() => {
    if (residentPaying?.id != null && payementDate && amountPaid && reason) {
      setSubmitStatus(false);
    }
    if (residentPaying?.id == null || !payementDate || !amountPaid || !reason) {
      setSubmitStatus(true);
    }
  }, [payementDate, amountPaid, residentPaying, reason]);
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
        <h3 b="true" style={{ margin: 0, }}>Ajout cotisation</h3>
      </Modal.Header>
      <form onSubmit={addPayement}>
        <Modal.Body style={{ height: '20rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
            {/* {props.building.adminIDs.includes(user.id) ? */}

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
                Personne payante
              </p>
              <Select
                onChange={(e) => {
                  setResidentPaying(e);
                }}
                name="selectTenants"
                options={props.residents}
                styles={customStyles}
                placeholder=""
                className="basic-single"
                classNamePrefix="select"
              />
            </div>
            <Input bordered type="text" label="Raison" onChange={(e) => { setReason(e.target.value) }} required={true} />

            <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                  Date de cotisation
                </p>
                <DatePicker dateFormat="dd/MM/yyyy" style={{}} selected={payementDate} onChange={(date) => setPayementDate(date)} />
              </div>
              <Input css={{ height: '3.5rem', marginLeft: '3rem' }} bordered type="number" min="1" step="0.001" label="Montant" labelRight="DH" onChange={(e) => { setAmountPaid(e.target.value) }} required={true} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ marginTop: '0rem' }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Button size="md" onClick={closeHandler} light color="bruh">
              Annuler
            </Button>
            <Button color="success" disabled={submitStatus} size="md" shadow type="submit">Enregistrer</Button>
          </Row>
        </Modal.Footer>
      </form>
    </Modal>
    <Button css={{ marginTop: "1rem", }} color="success" shadow auto onClick={handler}><MonetizationOnRoundedIcon style={{ marginRight: '0.5rem' }} />Ajouter une cotisation</Button>
  </>
  )
}

export default AddPayement;