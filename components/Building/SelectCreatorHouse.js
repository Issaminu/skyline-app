import { Modal, Button, Text, Input, Row, Checkbox, Grid, Spacer } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import toast from 'react-hot-toast'
import { useUser } from '@auth0/nextjs-auth0'
import axios from 'axios';
import Select from 'react-select';
const SelectCreatorHouse = (props) => {
  const queryClient = useQueryClient();
  const addMyBuilding = useMutation(
    async (DataToSend) => {
      (await axios.post('/api/addBuildingAPI', DataToSend));
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries('getBuildings');
        toast.success('Action réalisée avec succès');
        closeHandler3();
        props.closeOlderModal();
      },
    }
  );
  const customStyles = {
    control: (base, state) => ({
      ...base,
    }),
    menu: (base) => ({
      ...base,
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: '10rem',
    }),
  };
  const [selectedCreatorHouses, setSelectedCreatorHouses] = useState(null);
  const [submitStatus3, setSubmitStatus3] = useState(true)
  const [visible3, setVisible3] = useState(true);
  const handler3 = () => setVisible3(true)
  const closeHandler3 = () => {
    setVisible3(false)
    props.closeModal()
  }
  const selectCreatorHouse = async (e) => {
    e.preventDefault()
    props.DataToSend.selectedCreatorHouses = selectedCreatorHouses;
    addMyBuilding.mutate(props.DataToSend);
  }
  useEffect(() => {
    props.DataToSend.appartements.map((appartement, index) => {
      appartement.value = appartement.name;
      appartement.label = appartement.name;
    });
  }, []);
  useEffect(() => {
    if (selectedCreatorHouses?.[0]) {
      setSubmitStatus3(false);
    } else {
      setSubmitStatus3(true);
    }
  }, [selectedCreatorHouses]);
  return (
    <>
      <div>
        {/* {console.log(phouseQuantity)} */}
        <div style={{}}>
          <div>
            <Modal
              preventClose
              animated={false}
              closeButton
              aria-labelledby="modal-title"
              open={visible3}
              onClose={closeHandler3}
              width="35rem"
              css={{ height: '30rem' }}
            >
              <Modal.Header>
                <h3 b="true" style={{ margin: 0 }}>
                  Choisissez votre appartement
                </h3>
              </Modal.Header>
              <form onSubmit={selectCreatorHouse}>
                <Modal.Body>
                  <div style={{ marginTop: "1rem", marginBottom: '14rem' }}>
                    <p
                      style={{
                        margin: 0,
                        marginLeft: '0.29rem',
                        fontSize: '0.875rem',
                        letterSpacing: '0.01rem',
                        userSelect: 'none',
                      }}
                    >
                      Votre appartements
                    </p>
                    <Select
                      isMulti
                      onChange={(e) => {
                        setSelectedCreatorHouses(e)
                      }}
                      name="selectTenants"
                      options={props.DataToSend.appartements}
                      styles={customStyles}
                      placeholder=""
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Row style={{ justifyContent: 'space-between' }}>
                    <Button size="md" onClick={closeHandler3} light color="bruh" css={{ width: "10rem", minWidth: "10rem" }}>
                      Annuler
                    </Button>
                    <Button
                      disabled={submitStatus3}
                      size="md"
                      shadow
                      color="success"
                      type="submit"
                      css={{ width: "10rem", minWidth: "10rem" }}
                    >
                      Enregistrer
                    </Button>
                  </Row>
                </Modal.Footer>
              </form>
            </Modal >
          </div >
        </div >
      </div >
    </>
  )
}
export default SelectCreatorHouse