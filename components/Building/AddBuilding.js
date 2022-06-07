import { useUser } from '@auth0/nextjs-auth0'
import {
  Button,
  Text,
  css,
  Modal,
  Input,
  Textarea,
  Row,
} from '@nextui-org/react'
import { useRouter } from 'next/router'
import Loading from '../Loading'
import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import AddIcon from '@mui/icons-material/Add'
import axios from 'axios'
import toast from 'react-hot-toast'
import Select from 'react-select'
import cityOptions from '../MoroccoCities.json'
import AddHouses from './AddHouses';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


const AddBuilding = () => {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState()
  const [location, setLocation] = useState()
  const [surface, setSurface] = useState()
  const [houses, setHouses] = useState()
  const [submitStatus, setSubmitStatus] = useState(true)
  const queryClient = useQueryClient()
  const { user } = useUser()
  const [selectedCityOption, setSelectedCityOption] = useState(null)
  const [startHousesNow, setStartHousesNow] = useState(false)
  const [card1, setCard1] = useState('inherit')
  const [DataToSend, setDataToSend] = useState({});
  const addMyBuilding = useMutation(
    async (DataToSend) => {
      await axios.post('/api/addBuildingAPI', DataToSend)
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries('getBuildings')
        setSelectedCityOption(null)
        setName()
        setLocation()
        setSurface()
        setHouses()
      },
    }
  )
  const handler = () => setVisible(true)
  const handler2 = () => setVisible2(true);
  const closeHandler = () => {
    setVisible(false)
  }
  const closeHandler2 = () => {
    setVisible2(false)
  }
  const addBuilding = async (e) => {
    e.preventDefault()
    setDataToSend({
      name: name.target.value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      ),
      location: location.target.value,
      city: selectedCityOption.value,
      surface: parseFloat(surface.target.value),
      houses: parseInt(houses.target.value),
      teamid: user.id,
    })
    setStartHousesNow(true)
    closeHandler()
  }
  const customStyles = {
    control: (base, state) => ({
      ...base,
    }),
    menu: (base) => ({
      ...base,
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: '10rem',
    }),
  }
  useEffect(() => {
    if (
      name?.target.value != null &&
      location?.target.value != null &&
      selectedCityOption?.value != null &&
      houses?.target.value != null
    ) {
      setSubmitStatus(false)
    }
    if (
      !(
        !!name?.target.value &&
        !!location?.target.value &&
        !!selectedCityOption?.value &&
        !!houses?.target.value
      )
    ) {
      setSubmitStatus(true)
    }
  }, [
    name?.target.value,
    location?.target.value,
    selectedCityOption?.value,
    houses?.target.value,
  ])
  return (
    <>
      <div style={{ display: { card1 } }}>
        <Modal
          animated={false}
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
          width="35rem"
        >
          <Modal.Header>
            <h3 b="true" style={{ margin: 0 }}>
              Ajout Immeuble
            </h3>
          </Modal.Header>
          <form onSubmit={addBuilding}>
            <Modal.Body>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <Input
                  bordered
                  type="text"
                  label="Nom d'immeuble"
                  name="buildingName"
                  onChange={setName}
                  required={true}
                />
                <Input
                  bordered
                  type="text"
                  label="Adresse"
                  name="buildingLocation"
                  onChange={setLocation}
                  required={true}
                />
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
                    Ville
                  </p>
                  <Select
                    onChange={(e) => {
                      setSelectedCityOption(e)
                    }}
                    name="selectTenants"
                    options={cityOptions.cityOptions}
                    styles={customStyles}
                    placeholder=""
                    className="basic-single"
                    classNamePrefix="select"
                  />
                </div>
                <Input
                  bordered
                  type="number"
                  min="1"
                  step="0.001"
                  label="Surface globale (en m²)"
                  labelRight="m²"
                  name="buildingSurface"
                  onChange={setSurface}
                  required={true}
                />
                <Input
                  bordered
                  type="number"
                  min="1"
                  step="1"
                  label="Nombre d'appartements"
                  name="buildingHouses"
                  onChange={setHouses}
                  required={true}
                />
              </div>
              <div></div>
            </Modal.Body>
            <Modal.Footer>
              <Row style={{ justifyContent: 'space-between' }}>
                <Button size="md" onClick={closeHandler} light color="bruh" css={{ width: "10rem", minWidth: "10rem" }} >
                  Annuler
                </Button>
                <Button disabled={submitStatus} size="md" shadow type="submit" css={{ width: "10rem", minWidth: "10rem" }}>
                  Continuer <ArrowForwardRoundedIcon style={{ height: "1.2rem", marginLeft: "1rem !important" }} />
                </Button>
              </Row>
            </Modal.Footer>
          </form>
        </Modal>
        <Button css={{ marginTop: '1rem' }} shadow auto onClick={handler}>
          <AddIcon style={{ marginRight: '0.5rem' }} />
          Ajout Immeuble
        </Button>
      </div>
      {startHousesNow == false ? null : (
        <div style={{ position: 'absolute !important' }}>
          <AddHouses
            houseQuantity={parseInt(houses.target.value)}
            DataToSend={DataToSend}
            closeModal={() => setStartHousesNow(false)}
          />
        </div>
      )}
    </>
  )
}
export default AddBuilding
