import ListExpenses from "../components/Expense/ListExpenses"
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import Loading from '../components/Loading'
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import Select from '@mui/material/Select';
import { useRecoilState } from 'recoil';
import { myUserState } from '../store/atoms';

const Expenses = () => {
  const [myUser, setMyUser] = useRecoilState(myUserState);
  const [selectedBuilding, setSelectedBuilding] = useState();

  const queryClient = useQueryClient();
  // queryClient.removeQueries(['getExpenses']);
  queryClient.removeQueries(['getPayements']);
  queryClient.removeQueries(['getInvitations']);


  const getBuildingsList = useQuery('getBuildings', async () => {
    const buildings = await JSON.parse((await axios.post('/api/getBuildingsListAPI', { myUser: myUser })).data.buildings);
    setSelectedBuilding(buildings[0]);
    return buildings;
  });
  const getExpensesList = useQuery('getExpenses', async () => {
    const expenses = await JSON.parse((await axios.post('/api/getExpensesListAPI', { myUser: myUser })).data.expenses);
    return expenses;
  });
  // if (getBuildingsList.status == "loading" || getExpensesList.status == "loading" || selectedBuilding == null) return <Loading />
  if (getBuildingsList.status == "loading" || getExpensesList.status == "loading") {
    return (
      <main>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginLeft: "4rem", marginRight: "4rem" }}>
          <h1 style={{ marginBottom: 0, color: "#457B9D" }}>Dépenses</h1>
          <Loading />
        </div>
      </main>
    )
  }
  if (selectedBuilding == null) return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginLeft: "4rem", marginRight: "4rem" }}>
        <h1 style={{ marginBottom: 0, color: "#457B9D" }}>Dépenses</h1>
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ display: 'flex', justifyContent: "center", color: '#555454' }}>Vous n&apos;êtes résident d'aucun immeuble.</h2>
        </div>
      </div>
    </main>
  )
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "4rem", marginRight: "4rem" }}>
        <h1 style={{ marginBottom: 0, color: "#457B9D" }}>Dépenses</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Select
            displayEmpty
            autoWidth
            onChange={(e) => { setSelectedBuilding(e.target.value) }}
            defaultValue={getBuildingsList.data[0]}
          >
            {getBuildingsList.data.map((building, index) => {
              return <MenuItem key={index} value={building}>{building.name}</MenuItem>
            })}
          </Select>
        </div>
      </div>
      <ListExpenses building={selectedBuilding} expenses={getExpensesList.data} />
    </main >
  )
}
export default Expenses