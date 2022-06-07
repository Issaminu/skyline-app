import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import Loading from '../../../components/Loading'
import { useRouter } from "next/router";
import { Image, css, Spacer, Modal, Button, Text, Card, Textarea, Grid, Col, Row, Popover, Table, Tooltip } from "@nextui-org/react";
// import { BsPencilSquare } from 'react-icons/*';
import DeleteIcon from '@mui/icons-material/Delete';
import ModifyBuilding from "../../../components/Building/ModifyBuilding"
import DeleteBuilding from "../../../components/Building/DeleteBuilding";
import { useEffect, useState } from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ListResidents from "../../../components/Resident/ListResidents";
import AddInvitation from "../../../components/Invitation/AddInvitation";
// import { useQueryClient } from 'react-query'
import { useUser } from "@auth0/nextjs-auth0";
// import { Modal } from "bootstrap";
const buildingInfo = () => {
  const router = useRouter();
  const { user } = useUser();
  const queryClient = useQueryClient();
  // const queryClient = useQueryClient();

  const getResult = useQuery('getOneBuilding', async () => {
    const result = await JSON.parse((await axios.get('/api/getOneBuildingAPI')).data.result);
    // console.log(building)
    return result;
  })
  useEffect(() => {
    queryClient.removeQueries('getResidentsList');
  }, [])
  if (getResult.status == "loading") return <main><Loading /></main>

  getResult.data.appartements.map((appartement) => {
    appartement.value = appartement.name;
    appartement.label = appartement.name;
  });
  queryClient.removeQueries(["getOneHouse"]);
  // queryClient.removeQueries(['getOneBuilding'], { exact: true });
  // console.log(getHouses)

  const fullLocation = getResult.data.building.location + ", " + getResult.data.building.city;
  return (
    <main>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: 'flex-start', marginRight: "2rem", marginBottom: "2rem" }}>
        {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} > */}
        {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}> */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* <div> */}

          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '1.7rem' }}>
            <h2 style={{ fontSize: 60, display: "inline-flex" }} title={getResult.data.building.name}>{getResult.data.building.name}</h2>
            <h3 style={{ display: "inline-flex", marginTop: '-1rem' }} title={fullLocation}>{fullLocation}</h3>
          </div>
          {/* </div> */}
          {/* {getResult.data.building.adminIDs.includes(user.id) ? */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AddInvitation appartements={getResult.data.appartements} building={getResult.data.building} />
          </div>
          {/* :
                        null
                    } */}

        </div>
        {/* </div> */}

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>

          <div style={{ marginLeft: "1.5rem", marginTop: "1rem" }}>

            <Card css={{ width: "23rem" }}>
              {/* <div height="fit-content"> */}
              <Image css={{ border: '0rem solid', marginTop: "-0.8rem" }} showSkeleton src={getResult.data.building.thumbnail} height={"16rem"} width="100%" />
              {/* </div> */}
              {/* <h2>{getResult.data.building.name}</h2>
                                <h4>{getResult.data.building.location}</h4> */}
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
                      {/* <div style={{ width: "2rem", marginLeft: "2rem" }}>
                                                    <ModifyBuilding getBuilding={getResult.data.building} />

                                                </div> */}
                      <div style={{ width: "3rem", marginRight: "0rem", marginLeft: '4.3rem' }}>
                        <DeleteBuilding />
                      </div>


                      {/* </Button.Group> */}
                    </Table.Column>
                  </Table.Header>

                  <Table.Body>
                    {/* <Table.Row key="1">
                                                <Table.Cell css={{ textSize: "2" }}>Nom:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getResult.data.building.name}</Table.Cell>
                                            </Table.Row> */}
                    {/* <Table.Row key="1">
                                                <Table.Cell>N. Etages:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getResult.data.building.floors}</Table.Cell>
                                            </Table.Row> */}
                    <Table.Row key="1">
                      <Table.Cell>Trésorerie:</Table.Cell>
                      <Table.Cell css={{ textAlign: 'right' }}><b>{getResult.data.building.treasury}</b></Table.Cell>
                    </Table.Row>
                    <Table.Row key="2">
                      <Table.Cell>N. appartements:</Table.Cell>
                      <Table.Cell css={{ textAlign: 'right' }}>{getResult.data.building.houseQuantity}</Table.Cell>
                    </Table.Row>
                    <Table.Row key="3">
                      <Table.Cell>Surface globale:</Table.Cell>
                      <Table.Cell css={{ textAlign: 'right' }}>{getResult.data.building.surface} m² </Table.Cell>
                    </Table.Row>
                    <Table.Row key="4">
                      <Table.Cell>N. résidents:</Table.Cell>
                      <Table.Cell css={{ textAlign: 'right' }}>{getResult.data.building.residentIDs.split(', ').length} </Table.Cell>
                    </Table.Row>
                    {/* <Table.Row key="3">
                                                <Table.Cell>Population totale:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getResult.data.building.populationTotal}</Table.Cell>
                                            </Table.Row> */}

                    {/* <Table.Row key="5">
                                                <Table.Cell>Taille d'appartements:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getResult.data.building.houseSize} m² </Table.Cell>
                                            </Table.Row> */}
                    {/* <Table.Row key="6">
                                                <Table.Cell>Prix de location:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getResult.data.building.rent} DH </Table.Cell>
                                            </Table.Row> */}
                    {/* <Table.Row key="5">
                                                <Table.Cell>Commentaire:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>
                                                    <Text css={{ inlineSize: '4rem', overflowWrap: 'break-word' }}>
                                                        {getResult.data.building.notes}
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
              <Card.Header css={{ paddingBottom: 0 }}>
                <h3>Residents</h3>
              </Card.Header>
              <Card.Body>
                <ListResidents building={getResult.data.building} />
              </Card.Body>
            </Card>
          </div>


        </div>

        {/* </div > */}

      </div>
    </main >
  )
}

export default buildingInfo