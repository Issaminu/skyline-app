import { Button, Card, css, Spacer } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import setHouseToTenant from './SetHouseToTenant';
import Select from 'react-select';
import axios from 'axios';
import { useQuery } from 'react-query';
import buildings from '../../pages/buildings';
import HouseChoice from './HouseChoice';

let houseOptions = [];

export const MyHouseChoice = (props) => {
    console.log("here is card3")
    console.log(props.card3.card3)
    if (houseOptions[0] != null) return <div><HouseChoice style={{ display: props.card3.card3 }} tenant={props.tenant} houses={houseOptions} buildingId={props.selectedBuildingOption?.id} /></div>
    else return null;
}
const Reservation = (props) => {
    // console.log(data.data[0]);
    let buildingOptions = [];
    let allHouseOptions = [];
    props.building.map((building) => { building.value = building.name; building.label = building.name; buildingOptions.push(building); });
    props.house.map((house) => { house.value = house.name; house.label = house.name; allHouseOptions.push(house); });

    // console.log(buildingOptions);
    const [card1, setCard1] = useState('inherit');
    const [card2, setCard2] = useState('none');
    const [card2Send, setCard2Send] = useState(true);
    const [card3, setCard3] = useState('none');
    // setCard3('none');
    // const [card3Send, setCard3Send] = useState(true);

    // let options = [];
    // useEffect(() => {
    //     // let Buildingoptions = [];

    //     if (getBuildingsList.status == "success") {
    //         getBuildingsList.data.map((building) => { building.value = building.name; building.label = building.name; Buildingoptions.push(building); })
    //         // return () => Buildingoptions;
    //     }
    // }, [getBuildingsList.status]);
    const [selectedBuildingOption, setSelectedBuildingOption] = useState(null);
    // const [selectedHouseOption, setSelectedHouseOption] = useState(null);
    // useEffect(() => {
    //     setCard2Send(false);
    // }, [setCard3Send]);
    const selectBuilding = () => {
        setCard1('none')
        setCard2('inherit')
    }
    const selectHouse = () => {
        allHouseOptions.map((house) => { if (house.buildingId == selectedBuildingOption.id) { houseOptions.push(house) } });

        setCard2('none')
        setCard3('inherit')
        // console.log("selectHouse here")

    }

    // console.log(props.tenant.houseIDs?.[0] == null);
    return (
        <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
            <Card css={{ width: "60rem", height: "22.2rem", display: card1 }}>
                <Card.Header>
                    <h3>Loyement d'appartements</h3>
                </Card.Header>
                <Card.Body>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <h5 style={{ marginTop: '4rem', color: '#656565' }}>Cette personne n'a pas réservé aucune appartement.</h5>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.01rem' }}>
                            <Button rounded bordered onClick={selectBuilding} size="lg" css={{ width: "10rem", minWidth: "10rem" }}>Réservé <ArrowForwardRoundedIcon style={{ height: "1.2rem", marginLeft: "2rem !important" }} /></Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card css={{ width: "60rem", height: "22.2rem", display: card2 }}>
                <Card.Header>
                    <h3>Loyement d'appartements</h3>
                </Card.Header>
                <Card.Body>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ justifyContent: 'center' }}>
                            {/* <div style={{ display: "flex", width: 'inherit' }}> */}

                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h6 style={{ color: '#656565', marginBottom: '0' }}>Sélectionnez un immeuble:</h6>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ width: '20rem', height: '15rem' }}>

                                            <Select
                                                // defaultValue={[colourOptions[2], colourOptions[3]]}
                                                // isMulti
                                                onChange={(e) => { setSelectedBuildingOption(e); setCard2Send(false); }}
                                                name="selectTenants"
                                                options={buildingOptions}
                                                // style={{ width: "10rem", minWidth: '10rem' }}
                                                className="basic-single"
                                                classNamePrefix="select"
                                            />
                                        </div>
                                        <Spacer />
                                        <Button rounded bordered disabled={card2Send} onClick={selectHouse} css={{ height: '2.4rem', width: "8rem", minWidth: "8rem" }}>Continuer <ArrowForwardRoundedIcon style={{ height: "1.2rem", marginLeft: "2.4rem !important" }} /></Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            {/* <div style={{ display: { card3 } }}> */}
            {props.tenant.houseIDs?.[0] == null ? <MyHouseChoice card3={card3} tenant={props.tenant} selectedBuildingOption={selectedBuildingOption} /> : null}
            {/* </div > */}
        </div >
    )
}

export default Reservation