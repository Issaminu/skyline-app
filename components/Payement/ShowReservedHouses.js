import { Button, Card, css, Grid, Spacer } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import setHouseToTenant from './SetHouseToTenant';
import Select from 'react-select';
import axios from 'axios';
import { useQuery } from 'react-query';
import buildings from '../../pages/buildings';
import HouseChoice from './HouseChoice';
import { useRouter } from 'next/router';


const Reservation = (props) => {
    // console.log(props.houseList);
    const router = useRouter();
    return (
        <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
            <Card css={{ width: "60rem", height: "22.2rem" }}>
                <Card.Header>
                    <h3>Loyement d'appartements</h3>
                </Card.Header>
                <Card.Body>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ justifyContent: 'center' }}>
                            {/* <div style={{ display: "flex", width: 'inherit' }}> */}
                            {/* <p>hey</p> */}
                            <Grid.Container gap={2}>
                                {props.houseList.map((house) => {
                                    return <Grid key={house.name}>
                                        <Card bordered onClick={() => { router.push("/buildings/" + house.buildingId + "/houses/" + house.name) }} shadow={false} title="Paye ce mois" hoverable clickable css={{ width: "8rem", height: "8rem", display: "flex", justifyContent: "center", backgroundColor: "#17C964" }}>
                                            <div style={{ display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "1.4rem", color: "white" }}>
                                                {house.name}

                                            </div>
                                        </Card>
                                    </Grid>
                                })}
                            </Grid.Container>

                        </div>
                    </div>
                </Card.Body>
            </Card>
            {/* <MyHouseChoice tenant={props.tenant} selectedBuildingOption={selectedBuildingOption} /> */}
        </div >
    )
}

export default Reservation