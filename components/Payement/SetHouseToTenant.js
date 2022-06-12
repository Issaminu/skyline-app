import { Card, css } from "@nextui-org/react";
import { useState } from "react";
import Select from 'react-select';

const SetHouseToTenant = (card2) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const [selectedOption, setSelectedOption] = useState(null);
  // console.log(selectedOption);
  return (
    <Card css={{ width: "60rem", height: "30rem", display: card2.card2 }}>
      <Card.Header>
        <h3>Loyement d&apos;appartements</h3>
      </Card.Header>
      <Card.Body>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              closeMenuOnSelect={true}
              isMulti
              onChange={setSelectedOption}
              name="selectTenants"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SetHouseToTenant