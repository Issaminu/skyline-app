import ListPayements from "../components/Payement/ListPayements"
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../components/Loading'
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import Select from '@mui/material/Select';
const Payements = () => {
  const [selectedBuilding, setSelectedBuilding] = useState();
  const getBuildingsList = useQuery('getBuildings', async () => {
    const buildings = await JSON.parse((await axios.get('/api/getBuildingsListAPI')).data.buildings);
    setSelectedBuilding(buildings[0]);
    return buildings;
  });
  const getPayementsList = useQuery('getPayements', async () => {
    const payements = await JSON.parse((await axios.get('/api/getPayementsListAPI')).data.payements);
    return payements;
  });
  if (getBuildingsList.status == "loading" || getPayementsList.status == "loading" || selectedBuilding == null) return <Loading />
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "4rem", marginRight: "4rem" }}>
        <h1 style={{ marginBottom: 0, color: "#457B9D" }}>Paiements</h1>
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