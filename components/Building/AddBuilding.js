// import React from 'react'

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

// const StartFillingHouses = (propHouseQuantity) => {
//     let houseQuantity = [];
//     propHouseQuantity = parseInt(propHouseQuantity);
//     // console.log(props);
//     if (propHouseQuantity > 0) {
//         for (let i = 0; i < propHouseQuantity; i++) {
//             houseQuantity.push(i);
//         }
//         // console.log(houseQuantity)
//         return (
//             <div>
//                 {/* <AddHouses houseQuantity={houseQuantity} /> */}
//             </div>
//         )
//     }
// }
const AddBuilding = () => {
  // console.log(cityOptions.cityOptions);
  const [visible, setVisible] = useState(false)
  // const [editVisible, setEditVisible] = useState(false);
  // const editHandler = () => setEditVisible(true);
  // const [open, setOpen] = useState(false);
  // const router = useRouter();
  const [name, setName] = useState()
  const [location, setLocation] = useState()
  // const [floors, setFloors] = useState();
  const [surface, setSurface] = useState()
  const [houses, setHouses] = useState()
  // const [notes, setNotes] = useState("");
  // const [rent, setRent] = useState();
  const [submitStatus, setSubmitStatus] = useState(true)

  const queryClient = useQueryClient()

  const { user } = useUser()
  // const [newBuilding, setNewBuilding] = useState('')
  const [selectedCityOption, setSelectedCityOption] = useState(null)
  const [startHousesNow, setStartHousesNow] = useState(false)
  const [card1, setCard1] = useState('inherit')
  // const [card2, setCard2] = useState('none')
  // const [submitStatus2, setSubmitStatus2] = useState(true)
  // const [visible2, setVisible2] = useState(false)
  const [DataToSend, setDataToSend] = useState({});
  // const [appartements, setAppartements] = useState([])
  // let tempAppartementName = ''
  // let tempAppartementSize = ''
  // let tempAppartementObject = null
  // console.log(String(name.target.value).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()))
  // const postTodo=
  // let houseQuantity = []
  // let [myHouses, setMyHouses] = useState(null)
  // console.log(myHouses);
  // const AddMyHouses = () => {
  //     // if (startHousesNow == true) {
  //     console.log("you're in AddMyHouses");
  //     // setMyHouses(
  //     // );
  //     // }
  // }
  // useEffect(() => {
  //     if (startHousesNow == true) {
  //         AddMyHouses();
  //     }
  // }, [startHousesNow])

  const addMyBuilding = useMutation(
    async (DataToSend) => {
      // console.log("add my building neeo")
      await axios.post('/api/addBuildingAPI', DataToSend)
      // console.log(newBuilding.data.building.id)
    },
    {
      onSuccess: async () => {
        // console.log("invalidate sussy backa?")
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
  // const [startCreatorHouseNow, setStartCreatorHouseNow] = useState(false)
  const closeHandler = () => {
    setVisible(false)
    // console.log("closed");
  }
  const closeHandler2 = () => {
    setVisible2(false)
    // console.log("closed");
  }
  const addBuilding = async (e) => {
    e.preventDefault()
    // const varNotes = "";

    // console.log(bruh)
    setDataToSend({
      name: name.target.value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      ),
      location: location.target.value,
      city: selectedCityOption.value,
      // floors: parseInt(floors.target.value),
      surface: parseFloat(surface.target.value),
      houses: parseInt(houses.target.value),
      // notes: "TEMP", //THIS NEEDS TO GET REMOVED
      // rent: parseFloat(rent.target.value),
      // appartementSize: parseFloat(appartementSize.target.value),
      teamid: user.id,
    })
    // for (let i = 0; i < parseInt(houses.target.value); i++) {
    //     houseQuantity.push(i);
    // }
    // console.log('we\'re in AddBuilding right now, here\'s houseQuantity:');
    // console.log(houseQuantity);
    // houses.target.value = null;
    // setCard1('none')
    // setCard2('inherit')
    // StartFillingHouses();
    setStartHousesNow(true)
    // setCard1(true);
    // addMyBuilding.mutate(DataToSend);
    closeHandler()
  }

  // const addHouse = async (e) => {
  //     e.preventDefault();
  //     // const varNotes = "";

  //     // console.log(bruh)
  //     let DataToSend = {
  //         appartements: appartements,
  //     };

  //     // houses.target.value = null;
  //     // setCard1('none');
  //     // setCard2('inherit');
  //     // StartFillingHouses();
  //     // setStartHousesNow(true);
  //     // setCard1(true);
  //     // addMyBuilding.mutate(DataToSend);
  //     closeHandler();
  // }
  // useEffect(() => {
  //   if (addMyBuilding.status == 'success') {
  //     user.buildingIDs.push(newBuilding.data.building.id)
  //     toast.success('Action réalisée avec succès')
  //     // console.log("im success here")
  //   }
  // }, [newBuilding, addMyBuilding.status])

  // if (addMyBuilding.status == "loading") {
  //     // console.log("im loading here")
  //     return <><Loading /></>
  // }
  const customStyles = {
    control: (base, state) => ({
      ...base,
    }),
    menu: (base) => ({
      ...base,
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: '10rem', // your desired height
    }),
  }
  // let x = [1, 2, 3, 4];
  // let y = 5;
  // console.log(x.push(5));
  // console.log(!(!!x && !!y))
  useEffect(() => {
    // console.log('im effect')
    // console.log(!!name?.target.value)
    if (
      name?.target.value != null &&
      location?.target.value != null &&
      selectedCityOption?.value != null &&
      houses?.target.value != null
    ) {
      setSubmitStatus(false)
      // console.log('im the first')
    }
    // else {
    //     setSubmitStatus(true);
    // }
    if (
      !(
        !!name?.target.value &&
        !!location?.target.value &&
        !!selectedCityOption?.value &&
        !!houses?.target.value
      )
    ) {
      setSubmitStatus(true)
      // console.log('im the second')
      // console.log('im the second')
    }
  }, [
    name?.target.value,
    location?.target.value,
    selectedCityOption?.value,
    houses?.target.value,
  ])
  // if (name?.target.value != null && location?.target.value != null && selectedCityOption?.value != null && houses?.target.value != null) {
  // }
  // useEffect(() => {
  //     console.log('im effect')
  //     console.log(appartements);
  // }, [appartements]);
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
                    // defaultValue={[colourOptions[2], colourOptions[3]]}
                    // isMulti
                    onChange={(e) => {
                      setSelectedCityOption(e)
                    }}
                    name="selectTenants"
                    // label="Ville"
                    options={cityOptions.cityOptions}
                    styles={customStyles}
                    // placeholder="Sélectionnez une ville..."
                    placeholder=""
                    // style={{ width: "10rem", minWidth: '10rem' }}
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

                {/* <div style={{ display: 'flex', gap: '3rem' }}> */}
                {/* <Input bordered type="number" min="1" step="1" label="Nombre d'étages" name="buildingFloors" onChange={setFloors} required={true} /> */}
                {/* </div> */}
                {/* <Input bordered type="number" step="0.001" min="1" label="Prix de location" name="buildingRent" labelRight="DH" onChange={setRent} required={true} /> */}
                {/* <Input bordered type="number" step="0.001" min="1" label="Dimensions d'un appartement (en m²)" name="buildingAppartementSize" labelRight="m²" onChange={setAppartementSize} required={true} /> */}

                {/* <Textarea bordered minRows={2} maxRows={5} label="Commentaire (optionnel)" onChange={setNotes} name="buildingNotes" /> */}
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
