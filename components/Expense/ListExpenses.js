import { Dropdown } from '@nextui-org/react'
import { useEffect } from 'react'
import dateFormat, { masks } from "dateformat";
import { Table, Row, Col, } from "@nextui-org/react";
import { StyledBadge } from "../Payement/StyledBadge";
import { IconButton } from "../Payement/IconButton";
import { EditIcon } from "../Payement/EditIcon";
import Loading from '../Loading'
const ListExpenses = (props) => {
  let expenses = [];
  props.expenses.map((expense) => {
    if (expense.buildingId == props.building.id) {
      expenses.push(expense);
    }
  });
  // console.log(expenses)
  const columns = [
    { name: "BÉNÉFICIAIRE", uid: "beneficiary" },
    { name: "MONTANT", uid: "amount" },
    { name: "IMMEUBLE", uid: "buildingName" },
    { name: "RAISON", uid: "reason" },
    { name: "STATUS", uid: "status" },
    { name: "DATE", uid: "expenseDate" },
    { name: "ACTION", uid: "actions" },
  ];
  const renderCell = (expense, columnKey) => {
    const cellValue = expense[columnKey];
    switch (columnKey) {
      case "beneficiary":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              {expense.beneficiary}
            </Col>
          </Row>
        );
      case "amount":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <b>{expense.amount} DH</b>
            </Col>
          </Row>
        );
      case "expenseDate":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              {dateFormat(expense.expenseDate, "dd/mm/yyyy")}
            </Col>
          </Row>
        );
      case "reason":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              {expense.reason.charAt(0).toUpperCase() + expense.reason.slice(1)}
            </Col>
          </Row>
        );
      case "status":
        return <StyledBadge type="active">succès</StyledBadge>;
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <IconButton onClick={() => console.log("Modifier dépense", expense.id)}>
                <EditIcon size={20} fill="#979797" />
              </IconButton>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <main style={{ marginLeft: '4rem', marginRight: '4rem' }}>
      <div style={{ marginLeft: '4rem', marginRight: '4rem' }}>
        <Table
          bordered
          aria-label="Table de expenses"
          css={{
            height: "auto",
            minWidth: "100%"
          }}
          selectionMode="none"
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                width={column.uid === "userName" ? "16rem" : "inherit"}
                key={column.uid}
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={expenses}>
            {(item) => (
              <Table.Row>
                {(columnKey) => (
                  <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    </main>
  )
}
export default ListExpenses