import ListPayements from "../components/Payement/ListPayements"
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import Loading from '../components/Loading'
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import Select from '@mui/material/Select';
import { useRecoilState } from 'recoil';
import { myUserState } from '../store/atoms';

const Payements = () => {
  const [myUser, setMyUser] = useRecoilState(myUserState);
  const [selectedBuilding, setSelectedBuilding] = useState();
  // console.log(myUser);

  const queryClient = useQueryClient();
  queryClient.removeQueries(['getExpenses']);
  queryClient.removeQueries(['getInvitations']);
  // queryClient.removeQueries(['getPayements']);


  const getBuildingsList = useQuery('getBuildings', async () => {
    const buildings = await JSON.parse((await axios.post('/api/getBuildingsListAPI', { myUser: myUser })).data.buildings);
    setSelectedBuilding(buildings[0]);
    return buildings;
  });
  const getPayementsList = useQuery('getPayements', async () => {
    const payements = await JSON.parse((await axios.post('/api/getPayementsListAPI', { myUser: myUser })).data.payements);
    return payements;
  });
  // if (getBuildingsList.status == "loading" || getPayementsList.status == "loading" || selectedBuilding == null) return <Loading />
  if (getBuildingsList.status == "loading" || getPayementsList.status == "loading") {
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
        <h1 style={{ marginBottom: 0, color: "#457B9D" }}>Cotisations</h1>
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ display: 'flex', justifyContent: "center", color: '#555454' }}>Vous n&apos;êtes résident d&apos;aucun immeuble.</h2>
        </div>
      </div>
    </main>
  )
  // console.log(getBuildingsList.data);
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "4rem", marginRight: "4rem" }}>
        <h1 style={{ marginBottom: 0, color: "#457B9D" }}>Cotisations</h1>
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
      <ListPayements building={selectedBuilding} payements={getPayementsList.data} />
    </main >
  )
}
export default Payements