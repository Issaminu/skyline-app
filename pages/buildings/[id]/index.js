import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import Loading from '../../../components/Loading'
import { useRouter } from "next/router";
import { Image, css, Spacer, Modal, Button, Text, Card, Textarea, Grid, Col, Row, Popover, Table, Tooltip } from "@nextui-org/react";
// import { BsPencilSquare } from 'react-icons/*';
import DeleteIcon from '@mui/icons-material/Delete';
import ModifyBuilding from "../../../components/Building/ModifyBuilding"
import DeleteBuilding from "../../../components/Building/DeleteBuilding";
import { useState } from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ListHouses from "../../../components/House/ListHouses";
// import { useQueryClient } from 'react-query'

// import { Modal } from "bootstrap";
const buildingInfo = (req, res) => {
    const router = useRouter();
    // const queryClient = useQueryClient();

    const getBuilding = useQuery('getOneBuilding', async () => {
        const building = await JSON.parse((await axios.get('/api/getOneBuildingAPI')).data.building);
        return building;
    })

    const queryClient = useQueryClient();
    queryClient.removeQueries(["getOneHouse"]);
    // queryClient.removeQueries(['getOneBuilding'], { exact: true });
    // console.log(getHouses)

    if (getBuilding.status == "loading") return <main><Loading /></main>

    return (

        <main>



            <div style={{ display: "flex", flexDirection: "row", marginTop: "4rem", marginRight: "2rem", marginBottom: "2rem" }}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>

                        <Spacer />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h2 style={{ fontSize: 80, display: "inline-flex" }} title={getBuilding.data.name}>{getBuilding.data.name}</h2>
                            <h3 style={{ display: "inline-flex", marginTop: '-1rem' }} title={getBuilding.data.location}>{getBuilding.data.location}</h3>

                        </div>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>

                        <div style={{ marginLeft: "1.5rem", marginTop: "1rem" }}>

                            <Card css={{ width: "23rem" }}>
                                {/* <div height="fit-content"> */}
                                <Image css={{ border: '0rem solid', marginTop: "-0.8rem" }} showSkeleton src={getBuilding.data.thumbnail} height={"16rem"} width="100%" />
                                {/* </div> */}
                                {/* <h2>{getBuilding.data.name}</h2>
                                <h4>{getBuilding.data.location}</h4> */}
                                {/* <Card.Body> */}
                                <div style={{ paddingTop: 0 }}>
                                    <Table
                                        shadow={false}
                                        // selectable
                                        aria-label="Fiche d'information d'immeuble"
                                        lined
                                        fixed
                                        // bordered
                                        // selectionMode="single"
                                        // selectionMode="multiple"
                                        css={{
                                            padding: 0,
                                            height: "auto",
                                            minWidth: "100%",
                                            tableLayout: "auto"
                                        }}
                                    >
                                        <Table.Header css={{}}>
                                            <Table.Column css={{ width: '13rem' }}>Fiche d'information</Table.Column>
                                            <Table.Column css={{ paddingRight: "0rem !important", display: 'flex', flexDirection: 'row' }}>
                                                {/* <Button.Group light color="success" size="sm" css={{ marginTop: 0, marginBottom: 0 }}> */}
                                                <div style={{ width: "2rem", marginLeft: "2rem" }}>
                                                    <ModifyBuilding getBuilding={getBuilding.data} />

                                                </div>
                                                <div style={{ width: "3rem", marginRight: "0rem" }}>
                                                    <DeleteBuilding />
                                                </div>


                                                {/* </Button.Group> */}
                                            </Table.Column>
                                        </Table.Header>

                                        <Table.Body>
                                            {/* <Table.Row key="1">
                                                <Table.Cell css={{ textSize: "2" }}>Nom:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getBuilding.data.name}</Table.Cell>
                                            </Table.Row> */}
                                            <Table.Row key="1">
                                                <Table.Cell>N. Etages:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getBuilding.data.floors}</Table.Cell>
                                            </Table.Row>
                                            <Table.Row key="2">
                                                <Table.Cell>N. appartements:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getBuilding.data.houseQuantity}</Table.Cell>
                                            </Table.Row>
                                            <Table.Row key="3">
                                                <Table.Cell>Population totale:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getBuilding.data.populationTotal}</Table.Cell>
                                            </Table.Row>
                                            <Table.Row key="4">
                                                <Table.Cell>Surface globale:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getBuilding.data.surface} m² </Table.Cell>
                                            </Table.Row>
                                            <Table.Row key="5">
                                                <Table.Cell>Taille d'appartements:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getBuilding.data.houseSize} m² </Table.Cell>
                                            </Table.Row>
                                            <Table.Row key="6">
                                                <Table.Cell>Prix de location:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getBuilding.data.rent} DH </Table.Cell>
                                            </Table.Row>
                                            {/* <Table.Row key="5">
                                                <Table.Cell>Commentaire:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>
                                                    <Text css={{ inlineSize: '4rem', overflowWrap: 'break-word' }}>
                                                        {getBuilding.data.notes}
                                                    </Text></Table.Cell>
                                            </Table.Row> */}
                                        </Table.Body>
                                    </Table>


                                </div>
                                {/* </Card.Body> */}
                            </Card>

                        </div>
                        <div style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>
                            <Card css={{ width: "60rem" }}>
                                <Card.Header>
                                    <h3>Appartements</h3>
                                </Card.Header>
                                <Card.Body>
                                    <ListHouses />
                                </Card.Body>
                            </Card>
                        </div>


                    </div>

                </div >
            </div>
        </main >
    )
}

export default buildingInfo