import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react'
import { useEffect, useState } from 'react'

const AddHouses = (props) => {
  console.log('you entered AddHouses')

  const [appartements, setAppartements] = useState([])
  // let tempAppartementName = ''
  // let tempAppartementSize = ''
  // let tempAppartementObject = null
  // let [myHouses, setMyHouses] = useState(null)

  const addHouse = async (e) => {
    e.preventDefault()

    let DataToSend = {
      appartements: appartements,
    }

    closeHandler()
  }
  const [id, setId] = useState(0)
  const [size, setSize] = useState(0)
  const [visible, setVisible] = useState(true)
  const handler = () => setVisible(true)
  const closeHandler = () => {
    setVisible(false)
    console.log('closed')
  }
  let housesArray = []
  const [card2, setCard2] = useState('none')
  const [submitStatus2, setSubmitStatus2] = useState(true)
  const [visible2, setVisible2] = useState(true)
  const handler2 = () => setVisible2(true)
  const closeHandler2 = () => {
    setVisible2(false)
    props.closeModal()
  }

  return (
    <div className="AddHouses">
      {/* {console.log(phouseQuantity)} */}
      <div style={{}}>
        <div>
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible2}
            onClose={closeHandler2}
            width="35rem"
          >
            <Modal.Header>
              <h3 b="true" style={{ margin: 0 }}>
                Ajout Appartements
              </h3>
            </Modal.Header>
            <form onSubmit={addHouse}>
              <Modal.Body>
                <div>
                  {Array(props.houseQuantity)
                    .fill(null)
                    .map((value, index) => (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem',
                        }}
                        key={index}
                      >
                        <Input
                          bordered
                          type="text"
                          label="Identifiant d'appartement"
                          name="appartementId"
                          onChange={(e) => {
                            tempAppartementName = e.target.value
                          }}
                          required={true}
                        />
                        <Input
                          bordered
                          type="number"
                          step="0.001"
                          min="1"
                          label="Dimensions d'appartement (en m²)"
                          name="appartementSize"
                          labelRight="m²"
                          onChange={(e) => {
                            tempAppartementSize = e.target.value
                          }}
                          required={true}
                        />
                      </div>
                    ))}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Row style={{ justifyContent: 'space-between' }}>
                  <Button size="md" onClick={closeHandler2} light color="bruh">
                    Annuler
                  </Button>
                  <Button
                    disabled={submitStatus2}
                    size="md"
                    shadow
                    type="submit"
                  >
                    Continuer
                  </Button>
                </Row>
              </Modal.Footer>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default AddHouses
