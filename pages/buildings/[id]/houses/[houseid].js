import { useQuery } from "react-query";
import axios from "axios";
import Loading from '../../../../components/Loading'
import { useRouter } from "next/router";
import { Image, css, Spacer, Modal, Button, Text, Card, Textarea, Grid, Col, Row, Popover, Table, Tooltip } from "@nextui-org/react";
// import { BsPencilSquare } from 'react-icons/*';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ModifyBuilding from "../../../../components/ModifyBuilding"
// import DeleteBuilding from "../../../../components/DeleteBuilding";
// import { useState } from "react";
// import BorderColorIcon from '@mui/icons-material/BorderColor';

// import { Modal } from "bootstrap";
const houseInfo = (req, res) => {
  const router = useRouter();
  const getHouse = useQuery('getOneHouse', async () => {
    const house = await JSON.parse((await axios.get('/api/getOneHouseAPI')).data.house);
    return house;
  })

  if (getHouse.status == "loading") return <main><Loading /></main>
  // console.log(getBuilding.data)
  return (

    <main>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "4rem", marginRight: "2rem", marginBottom: "2rem" }}>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>

            <Spacer />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontSize: 80, display: "inline-flex" }} title={getHouse.data.name}>{getHouse.data.buildingName} {getHouse.data.name}</h2>
              <h3 style={{ display: "inline-flex", marginTop: '-1rem' }} title={getHouse.data.location}>{getHouse.data.location}</h3>

            </div>

          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>

            <div style={{ marginLeft: "1.5rem", marginTop: "1rem" }}>

              <Card css={{ width: "23rem" }}>
                {/* <div height="fit-content"> */}
                {/* <Image css={{ border: '0rem solid', marginTop: "-0.8rem" }} showSkeleton src={getHouse.data.thumbnail} height={"16rem"} width="100%" /> */}
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
                      <Table.Column css={{ paddingRight: "0rem !important", }}>

                      </Table.Column>
                    </Table.Header>

                    <Table.Body>
                      {/* <Table.Row key="1">
                                                <Table.Cell css={{ textSize: "2" }}>Nom:</Table.Cell>
                                                <Table.Cell css={{ textAlign: 'right' }}>{getBuilding.data.name}</Table.Cell>
                                            </Table.Row> */}
                      <Table.Row key="1">
                        <Table.Cell>Etage:</Table.Cell>
                        <Table.Cell css={{ textAlign: 'right' }}>{getHouse.data.name.split("-")[0]}</Table.Cell>
                      </Table.Row>
                      <Table.Row key="2">
                        <Table.Cell>Appartement N°:</Table.Cell>
                        <Table.Cell css={{ textAlign: 'right' }}>{getHouse.data.name.split("-")[1]}</Table.Cell>
                      </Table.Row>
                      <Table.Row key="3">
                        <Table.Cell>Prix:</Table.Cell>
                        <Table.Cell css={{ textAlign: 'right' }}><b>{getHouse.data.priceRent}</b>DH /mois</Table.Cell>
                      </Table.Row>
                      <Table.Row key="4">
                        <Table.Cell>Surface:</Table.Cell>
                        <Table.Cell css={{ textAlign: 'right' }}>{getHouse.data.size} m²</Table.Cell>
                      </Table.Row>
                      <Table.Row key="5">
                        <Table.Cell>% d'immeuble:</Table.Cell>
                        <Table.Cell css={{ textAlign: 'right' }}>{(getHouse.data.size * 100 / getHouse.data.buildingSurface).toFixed(2)}%</Table.Cell>
                      </Table.Row>
                      <Table.Row key="6">
                        <Table.Cell>Status:</Table.Cell>
                        <Table.Cell css={{ textAlign: 'right' }}>{getHouse.data.status == "empty" ? <b>Vide</b> : <b>Plein</b>}  </Table.Cell>
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
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      Etage 5
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>


          </div>

        </div >
      </div>
    </main >
  )
}

export default houseInfo