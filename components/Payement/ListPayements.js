import { Dropdown } from '@nextui-org/react'
import { useEffect } from 'react'
import dateFormat, { masks } from "dateformat";
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EditIcon } from "./EditIcon";
import Loading from '../Loading'
const ListPayements = (props) => {
  let payements = [];
  props.payements.map((payement) => {
    if (payement.buildingId == props.building.id) {
      payements.push(payement);
    }
  });
  const columns = [
    { name: "RÉSIDENT", uid: "userName" },
    { name: "MONTANT", uid: "amount" },
    { name: "IMMEUBLE", uid: "buildingName" },
    { name: "RAISON", uid: "reason" },
    { name: "STATUS", uid: "status" },
    { name: "DATE", uid: "payementDate" },
    { name: "ACTION", uid: "actions" },
  ];
  const renderCell = (payement, columnKey) => {
    const cellValue = payement[columnKey];
    switch (columnKey) {
      case "userName":
        return (
          <User squared src={payement.user.image} name={cellValue}>
            {payement.user.email}
          </User>
        );
      case "amount":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex", justifyContent: 'center' }}>
              <b>{payement.amount} DH</b>
            </Col>
          </Row>
        );
      case "payementDate":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex", justifyContent: 'center' }}>
              {dateFormat(payement.payementDate, "dd/mm/yyyy")}
            </Col>
          </Row>
        );
      case "reason":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex", justifyContent: 'center' }}>
              {payement.reason.charAt(0).toUpperCase() + payement.reason.slice(1)}
            </Col>
          </Row>
        );
      case "status":
        return <span style={{ display: 'flex', justifyContent: 'center' }}><StyledBadge type="active">succès</StyledBadge></span>;
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex", justifyContent: 'center' }}>
              <IconButton onClick={() => console.log("Modifier cotisation", payement.user.id)}>
                <EditIcon size={20} fill="#979797" />
              </IconButton>
            </Col>
          </Row>
        );
      default:
        return <div style={{ display: 'flex', justifyContent: 'center' }}>{cellValue}</div>;
    }
  };
  return (
    <main style={{ marginLeft: '4rem', marginRight: '4rem' }}>
      <Table
        striped
        lined
        // headerLined
        bordered
        aria-label="Table de payements"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (

            <Table.Column
              width={column.uid === "userName" ? "16rem" : "inherit"}
              key={column.uid}
              css={{ textAlign: 'center' }}
            >
              {/* <div style={{ display: 'flex', justifyContent: 'flex' }}> */}
              {column.name}
              {/* </div> */}

            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={payements}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={14}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
    </main>
  )
}
export default ListPayements