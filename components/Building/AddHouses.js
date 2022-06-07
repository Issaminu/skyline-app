import { Modal, Button, Text, Input, Row, Checkbox, Grid, Spacer } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import toast from 'react-hot-toast'
import { useUser } from '@auth0/nextjs-auth0'
import axios from 'axios';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import SelectCreatorHouse from './SelectCreatorHouse'
const AddHouses = (props) => {
  const initialAppartementsState = Array(props.houseQuantity).fill(null).map((value, index) => (value = { name: null, size: null }))
  const [appartements, setAppartements] = useState(initialAppartementsState);
  const queryClient = useQueryClient();
  const [startCreatorHouseNow, setStartCreatorHouseNow] = useState(false);
  const [newBuilding, setNewBuilding] = useState();
  const addHouse = async (e) => {
    e.preventDefault()
    props.DataToSend.appartements = appartements;
    setStartCreatorHouseNow(true);
    console.log("you're supposed to be in SelectCreatorHouse now");
  }
  const [id, setId] = useState(0)
  const [size, setSize] = useState(0)
  const { user } = useUser();
  let housesArray = []
  const [card2, setCard2] = useState('inherit')
  const [submitStatus2, setSubmitStatus2] = useState(true)
  const [visible2, setVisible2] = useState(true)
  const closeHandler2 = () => {
    setVisible2(false)
    props.closeModal()
  }
  let tempAppartementArray = [];
  useEffect(() => {
    tempAppartementArray = appartements;
  })
  let y = false;
  let x = 0;
  useEffect(() => {
    appartements.map((appartement) => {
      if (!(!!appartement.name && !!appartement.size)) {
        y = true;
        setSubmitStatus2(true);
      }
    })
    for (let i = 0; i < appartements.length; i++) {
      for (let j = i + 1; j < appartements.length; j++) {
        if (appartements[i].name === appartements[j].name) {
          x = 1;
          setSubmitStatus2(true);
          break;
        }
      }
    }
    if (x === 0 && y === false) {
      setSubmitStatus2(false);
    }
  }, [appartements]);
  return (
    <>
      <div className='card2' style={{ display: card2 }}>
        {/* {console.log(card2)} */}
        <div>
          <div>
            <Modal
              preventClose
              animated={false}
              closeButton
              aria-labelledby="modal-title"
              open={visible2}
              onClose={closeHandler2}
              width="35rem"
            >
              <Modal.Header>
                <h3 b="true" style={{ margin: 0 }}>
                  Ajout d'appartements
                </h3>
              </Modal.Header>
              <form onSubmit={addHouse}>
                <Modal.Body>
                  <div>
                    {/* <h4 style={{ display: "flex", justifyContent: 'center', marginTop: '2rem', marginBottom: '0rem' }}>Appartement {index + 1}</h4> */}
                    <div style={{}}>
                      <Grid.Container gap={0}>
                        {/* <div style={{ display: "flex", flexDirection: 'row', marginTop: '' }}> */}
                        <Grid style={{ display: "flex", flexDirection: 'row', height: '2.3rem' }}>
                          <p>Appart.</p>
                          <Spacer x={1} />
                          <p>Identifiant</p>
                          <Spacer x={7.7} />
                          <p>Dimensions</p>
                        </Grid>
                        {/* </div> */}
                        {Array(props.houseQuantity)
                          .fill(null)
                          .map((value, index) => (
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                              }}
                              key={index}
                            >
                              <Grid >
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                  <p style={{ marginLeft: '1rem' }}>{index + 1}</p>
                                  <Spacer x={2} />
                                  <Input
                                    bordered
                                    type="text"
                                    aria-label="Identifiant d'appartement"
                                    name="appartementId"
                                    onChange={(e) => {
                                      tempAppartementArray = [...appartements];
                                      tempAppartementArray[index].name = e.target.value;
                                      setAppartements(tempAppartementArray);
                                    }}
                                    required={true}
                                  />
                                  <Spacer x={2} />
                                  <Input
                                    bordered
                                    type="number"
                                    step="0.001"
                                    min="1"
                                    aria-label="Dimensions d'appartement (en m²)"
                                    name="appartementSize"
                                    labelRight="m²"
                                    onChange={(e) => {
                                      tempAppartementArray = [...appartements];
                                      tempAppartementArray[index].size = e.target.value;
                                      setAppartements(tempAppartementArray);
                                    }}
                                    required={true}
                                  />
                                </div>
                              </Grid>
                            </div>
                          ))}
                      </Grid.Container>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Row style={{ justifyContent: 'space-between' }}>
                    <Button size="md" onClick={closeHandler2} light color="bruh" css={{ width: "10rem", minWidth: "10rem" }}>
                      Annuler
                    </Button>
                    <Button
                      disabled={submitStatus2}
                      size="md"
                      shadow
                      type="submit"
                      css={{ width: "10rem", minWidth: "10rem" }}
                    >
                      Continuer <ArrowForwardRoundedIcon style={{ height: "1.2rem", marginLeft: "1rem !important" }} />
                    </Button>
                  </Row>
                </Modal.Footer>
              </form>
            </Modal >
          </div >
        </div >
      </div >
      {
        startCreatorHouseNow == false ? null : (
          <div style={{ position: 'absolute' }}>
            <SelectCreatorHouse
              DataToSend={props.DataToSend}
              closeOlderModal={() => props.closeModal()}
              closeModal={() => setStartCreatorHouseNow(false)}
            />
          </div>
        )
      }
    </>
  )
}
export default AddHouses
