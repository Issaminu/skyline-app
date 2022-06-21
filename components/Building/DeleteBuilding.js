import { Text, Button, Grid, Row, Modal } from "@nextui-org/react";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from 'next/router';
import axios from "axios";
import { Router } from "react-router-dom";
import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
const DeleteBuilding = () => {
  const router = useRouter();
  const deleteThisBuilding = (async () => {
    await axios.get('/api/delBuildingAPI');
    toast.success("Action réalisée avec succès");
    router.push('/buildings');
  })
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <>
      <Button
        flat
        onClick={handler}
        color="error"
        icon={<HighlightOffRoundedIcon fill="currentColor" />}
        auto
        css={{
          width: '1rem',
          height: '2rem',
          minWidth: '3rem',
          marginTop: '0.2rem',
          marginLeft: '2.3rem'
        }}
      />
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="30rem"
      >
        <Modal.Header>
          <h3 b>Confirmation</h3>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', flexDirection: "column", textAlign: 'center' }}>
            <Text>Êtes-vous sûr que vous souhaitez désactiver cette immeuble ?</Text>
            <Text b>Cette action est réversible</Text>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Button auto flat color="error" onClick={closeHandler}>
                                Close
                            </Button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                            <Button auto onClick={closeHandler}>
                                Sign in
                            </Button>
                        </div>
                    </div> */}
          <Grid.Container justify="space-between" alignContent="center">
            <Grid>
              <Button light onClick={closeHandler} css={{ width: "8rem", minWidth: "3rem" }} >
                Annuler
              </Button>
            </Grid>
            <Grid>
              <Button shadow color="error" css={{ width: "8rem", minWidth: "3rem" }}
              >
                Désactiver
              </Button>
            </Grid>
          </Grid.Container>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default DeleteBuilding