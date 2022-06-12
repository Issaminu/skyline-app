import { useQuery } from "react-query";
import axios from "axios";
import Loading from '../../components/Loading'
import { useRouter } from "next/router";
import { Image, css, Spacer, Modal, Button, Text, Card, Textarea, Grid, Col, Row, Popover, Table, Tooltip } from "@nextui-org/react";
// import { BsPencilSquare } from 'react-icons/*';
// import DeleteIcon from '@mui/icons-material/Delete';
import ModifyTenant from "../../components/Tenant/ModifyTenant"
import ReactivateTenant from "../../components/Tenant/ReactivateTenant";
import DeactivateTenant from "../../components/Tenant/DeactivateTenant";
import SetHouseToTenant from "../../components/Payement/SetHouseToTenant";
import { useState } from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Reservation from "../../components/Payement/Reservation";
import ShowReservedHouses from "../../components/Payement/ShowReservedHouses";
import { SpinnerCircular } from 'spinners-react';
// import { Modal } from "bootstrap";
const TenantInfo = (req, res) => {
  const router = useRouter();
  const getTenant = useQuery('getOneTenant', async () => {
    const stuff = await JSON.parse((await axios.get('/api/getOneTenantAPI')).data.stuff);
    return stuff;
  })

  if (getTenant.status == "loading") return (
    <main><Loading /></main>
  )
  // console.log(getTenant.data[0])
  // console.log('this is data[3]');
  // console.log(getTenant.data[3])

  return (

    <main>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "4rem", marginRight: "2rem", marginBottom: "2rem" }}>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>

            <Spacer />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontSize: 80, display: "inline-flex", color: "#005a91" }} title={getTenant.data[0].name}>{getTenant.data[0].name}</h2>
              <h3 style={{ display: "inline-flex", marginTop: '-1rem', }} title={getTenant.data[0].job}>{getTenant.data[0].job}</h3>

            </div>

          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>

            <div style={{ marginLeft: "1.5rem", marginTop: "1rem" }}>

              <Card css={{ width: "30rem" }}>
                {/* <div height="fit-content"> */}
                {/* <Image css={{ border: '0rem solid', marginTop: "-0.8rem" }} showSkeleton src={getHouse.data[0].thumbnail} height={"16rem"} width="100%" /> */}
                {/* </div> */}
                {/* <h2>{getBuilding.data[0].name}</h2>
                <h4>{getBuilding.data[0].location}</h4> */}
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
                    }}>
                    <Table.Header css={{}}>
                      <Table.Column css={{ width: '13rem' }}>Fiche d&apos;information</Table.Column>
                      <Table.Column css={{ paddingRight: "0rem !important", }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>

                          <div style={{ width: "2rem", marginRight: "0.6rem" }}>
                            <ModifyTenant getTenant={getTenant.data[0]} />

                          </div>

                        </div>
                      </Table.Column>
                    </Table.Header>

                    <Table.Body>
                      {/* <Table.Row key="1">
                                <Table.Cell css={{ textSize: "2" }}>Nom:</Table.Cell>
                                <Table.Cell css={{ textAlign: 'right' }}>{getBuilding.data[0].name}</Table.Cell>
                            </Table.Row> */}
                      <Table.Row key="1">
                        <Table.Cell>Numéro mobile:</Table.Cell>
                        <Table.Cell css={{ textAlign: 'right' }}>{getTenant.data[0].phone}</Table.Cell>
                      </Table.Row>
                      <Table.Row key="2">
                        <Table.Cell>Email addresse:</Table.Cell>
                        <Table.Cell css={{ textAlign: 'right' }} ><div title={getTenant.data[0].email}>{getTenant.data[0].email.slice(0, 23) + (getTenant.data[0].email.length > 23 ? "..." : "")}</div></Table.Cell>
                      </Table.Row>
                      <Table.Row key="3">
                        <Table.Cell>CIN:</Table.Cell>
                        <Table.Cell css={{ textAlign: 'right' }}>{getTenant.data[0].cin}</Table.Cell>
                      </Table.Row>
                      <Table.Row key="4">
                        <Table.Cell>Numéro appartement:</Table.Cell>
                        {/* <Table.Cell css={{ textAlign: 'right' }}>{getTenant.data[0].houseId.split("-")[0]}</Table.Cell> */}
                        <Table.Cell css={{ textAlign: 'right' }}>{getTenant.data[0].houseIDs}</Table.Cell>
                      </Table.Row>
                      <Table.Row key="5">
                        <Table.Cell>N. membres de famille:</Table.Cell>
                        <Table.Cell css={{ textAlign: 'right' }}>{getTenant.data[0].familySize}</Table.Cell>
                      </Table.Row>

                      {/* <Table.Row key="5">
                                <Table.Cell>% d'immeuble:</Table.Cell>
                                <Table.Cell css={{ textAlign: 'right' }}>{(getTenant.data[0].size * 100 / getTenant.data[0].buildingSurface).toFixed(2)}%</Table.Cell>
                            </Table.Row> */}
                      <Table.Row key="6">
                        <Table.Cell>Status locataire:</Table.Cell>
                        <Table.Cell css={{ textAlign: 'right' }}>
                          <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                            {getTenant.data[0].accountStatus == "active" ? <><DeactivateTenant /></> : <><ReactivateTenant /></>}
                            {/* {getTenant.data[0].accountStatus == "active" ? <DeactivateTenant /> : <ReactivateTenant />} */}

                            {/* <div style={{ width: "3rem", marginRight: "0rem" }}>


                                        </div> */}
                          </div>
                        </Table.Cell>
                      </Table.Row>
                      {/* <Table.Row key="5">
                                <Table.Cell>Commentaire:</Table.Cell>
                                <Table.Cell css={{ textAlign: 'right' }}>
                                    <Text css={{ inlineSize: '4rem', overflowWrap: 'break-word' }}>
                                        {getBuilding.data[0].notes}
                                    </Text></Table.Cell>
                            </Table.Row> */}
                    </Table.Body>
                  </Table>


                </div>
                {/* </Card.Body> */}
              </Card>

            </div>

            {getTenant.data[3]?.[0] == null ?
              <Reservation tenant={getTenant.data[0]} building={getTenant.data[1]} house={getTenant.data[2]} />
              :
              null
              // <ShowReservedHouses building={getTenant.data[1]} houseList={getTenant.data[3]} />
            }



          </div>

        </div >
      </div>
    </main >
  )
}

export default TenantInfo