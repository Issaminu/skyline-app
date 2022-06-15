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
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';

const AddExpense = (props) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [surface, setSurface] = useState();
  const [houses, setHouses] = useState();
  const [submitStatus, setSubmitStatus] = useState(true);
  const queryClient = useQueryClient();
  const { user } = useUser();
  const [residentPaying, setResidentPaying] = useState([]);
  const [expenseDate, setExpenseDate] = useState(new Date());
  const [amountSpent, setAmountSpent] = useState(null);
  const [reason, setReason] = useState(null);
  const [beneficiary, setBeneficiary] = useState(null);


  const addMyExpense = useMutation((DataToSend) => {
    return axios.post('/api/addExpenseAPI', DataToSend);
  }, {
    onSuccess: async () => {
      toast.success("Dépense ajoutée avec succès.");
      closeHandler();
    },
    onError: async (error) => {
      toast.error(error.response.data.message, { style: {} });
      closeHandler();
    }
  });

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  // console.log(receiverHouses);

  const addExpense = async (e) => {
    e.preventDefault();

    let DataToSend = {
      building: props.building,
      beneficiary: beneficiary,
      amountSpent: amountSpent,
      expenseDate: expenseDate,
      reason: reason,
    };
    addMyExpense.mutate(DataToSend);
  };
  // console.log(residentPaying?.id != null);
  // console.log(expenseDate)
  // console.log(receiverHouses?.[0] != null);
  useEffect(() => {
    if (beneficiary && expenseDate && amountSpent && reason) {
      setSubmitStatus(false);
    }
    if (!beneficiary || !expenseDate || !amountSpent || !reason) {
      setSubmitStatus(true);
    }
  }, [expenseDate, amountSpent, beneficiary, reason]);
  return (<>
    <Modal
      style={{ zIndex: 1, height: "25rem" }}
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      width="35rem"
    >
      <Modal.Header>
        <h3 b="true" style={{ margin: 0, }}>Ajout dépense</h3>
      </Modal.Header>
      <form onSubmit={addExpense}>
        <Modal.Body style={{ height: '15.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
            {/* {props.building.adminIDs.includes(user.id) ? */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Input bordered type="text" label="Bénéficiaire" onChange={(e) => { setBeneficiary(e.target.value) }} required={true} />
              <Input bordered type="text" label="Raison" onChange={(e) => { setReason(e.target.value) }} required={true} />
            </div>

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
                  Date de dépense
                </p>
                <DatePicker dateFormat="dd/MM/yyyy" style={{}} selected={expenseDate} onChange={(date) => setExpenseDate(date)} />
              </div>
              <Input css={{ height: '3.5rem', marginLeft: '3rem' }} bordered type="number" min="1" step="0.001" label="Montant de dépense" labelRight="DH" onChange={(e) => { setAmountSpent(e.target.value) }} required={true} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ marginTop: '0rem' }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Button size="md" onClick={closeHandler} light color="bruh">
              Annuler
            </Button>
            <Button color="error" disabled={submitStatus} size="md" shadow type="submit">Enregistrer</Button>
          </Row>
        </Modal.Footer>
      </form>
    </Modal>
    <Button css={{ marginTop: "1rem", }} color="error" shadow auto onClick={handler}><EngineeringRoundedIcon style={{ marginRight: '0.5rem' }} />Ajouter une dépense</Button>
  </>
  )
}

export default AddExpense;