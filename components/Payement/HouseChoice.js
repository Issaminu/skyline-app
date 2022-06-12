// import React from 'react'

import { Button, Card, Spacer } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Select from 'react-select';
import axios from 'axios';
import { useMutation, useQueryClient } from "react-query";
// import { useUser } from "@auth0/nextjs-auth0";
import toast from 'react-hot-toast';

const customStyles = {
  control: (base, state) => ({
    ...base
  }),
  menu: (base) => ({
    ...base
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: "8rem" // your desired height
  })
};

const HouseChoice = (props) => {
  // const {user}=useUser();
  const [card3Send, setCard3Send] = useState(true);
  const [selectedHouseOption, setSelectedHouseOption] = useState();
  // console.log("hey im selectedHouseOption");
  useEffect(() => {
    if (selectedHouseOption?.[0] == null) setCard3Send(true);
  }, [selectedHouseOption]);
  // console.log(selectedHouseOption);
  // console.log(props.buildingId);
  // let DataToSend = [
  //     {
  //         buildingId: props.buildingId,
  //         houseIDs: selectedHouseOption,
  //         familySize: props.tenant.familySize
  //     }
  // ];
  const queryClient = useQueryClient();
  // const 
  const saveReservation = useMutation(async (DataToSend) => {
    // console.log("add my building neeo")
    await axios.post('/api/saveReservationAPI', DataToSend);
    // console.log(newBuilding.data.building.id)
  }, {
    onSuccess: async () => {
      toast.success("Action réalisée avec succès");
      queryClient.invalidateQueries(['getOneTenant']);
    }
  });

  return (
    <Card css={{ width: "60rem", height: "22.2rem" }}>
      <Card.Header>
        <h3>Loyement d&apos;appartements</h3>
      </Card.Header>
      <Card.Body>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ justifyContent: 'center' }}>
            {/* <div style={{ display: "flex", width: 'inherit' }}> */}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h6 style={{ color: '#656565', marginBottom: '0' }}>Sélectionnez l&apos;appartement(s):</h6>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ width: '20rem' }}>

                    <Select
                      // defaultValue={[colourOptions[2], colourOptions[3]]}
                      // closeMenuOnSelect={false}
                      isMulti
                      display='fixed'
                      overflow-y='visibile'
                      onChange={(e) => { setSelectedHouseOption(e); setCard3Send(false); }}
                      name="selectHouses"
                      height="3rem"
                      // loadOptions={houses.houses}
                      options={props.houses}
                      styles={customStyles}
                      // styles={{ display: 'none' }}
                      // hasValue={(e) => { console.log(e) }}
                      // style={{ width: "10rem", minWidth: '10rem' }}
                      // isClearable={false}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                  <Spacer />
                  <Button rounded color="success" onClick={() => saveReservation.mutate({
                    buildingId: props.buildingId,
                    houses: selectedHouseOption,
                    familySize: props.tenant.familySize,
                    tenantId: props.tenant.id
                  })} disabled={card3Send} css={{ height: '2.4rem', width: "9rem", minWidth: "9rem" }}>Sauvegarder</Button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card >
  )
}

export default HouseChoice