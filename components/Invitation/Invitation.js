import { Button, Grid, Card, Spacer, Text } from '@nextui-org/react';
import React, { createRef, useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useUser } from '@auth0/nextjs-auth0';
import { useRecoilState } from 'recoil';
import { myUserState } from '../../store/atoms';
const Invitation = (props) => {
  const [myUser, setMyUser] = useRecoilState(myUserState);
  const { user } = useUser();
  // console.log(props)
  const invitation = props.invitation;
  const queryClient = useQueryClient();
  // console.log(invitation)
  const refuseInvitation = () => {
    let DataToSend = {
      invitationId: invitation.id,
      myUser: myUser
    }
    deleteInvitation.mutate(DataToSend);
  }

  // invitation.receiverHouseNames = "1g1,"
  const deleteInvitation = useMutation(
    async (DataToSend) => {
      await axios.post('/api/refuseInvitationAPI', DataToSend)
    },
    {
      onSuccess: async () => {
        myUser.notificationCount = myUser.notificationCount - 1;
        queryClient.invalidateQueries('getInvitations');
        queryClient.invalidateQueries('getBuildings');
        toast.success("Action réalisée avec succès");
      },
    }
  );
  const acceptInvitation = () => {
    let DataToSend = {
      senderIsAdmin: invitation.senderIsAdmin,
      invitationId: invitation.id,
      buildingId: invitation.buildingId,
      isAdmin: invitation.isAdmin,
      receiverId: invitation.receiverId,
      receiverHouseIDs: invitation.receiverHouseIDs,
      myUser: myUser,
    }
    confirmInvitation.mutate(DataToSend);
  }
  const confirmInvitation = useMutation(
    async (DataToSend) => {
      await axios.post('/api/acceptInvitationAPI', DataToSend);
    },
    {
      onSuccess: async () => {
        let tempObj = { ...myUser };
        tempObj.notificationCount = tempObj.notificationCount - 1;
        setMyUser(tempObj);
        // myUser.notificationCount = myUser.notificationCount - 1;
        queryClient.invalidateQueries('getInvitations');
        queryClient.invalidateQueries('getBuildings');
        if (invitation.senderIsAdmin) {
          toast.success("Action réalisée avec succès");
        } else {
          toast.success("Un administrateur va évaluer cette invitation.");
        }
      },
    }
  );
  const validateInvitation = () => {
    let DataToSend = {
      invitationId: invitation.id,
      buildingId: invitation.buildingId,
      receiverId: invitation.receiverId,
      receiverHouseIDs: invitation.receiverHouseIDs,
      myUser: myUser,
    }
    approveInvitation.mutate(DataToSend);
  }
  const approveInvitation = useMutation(
    async (DataToSend) => {
      await axios.post('/api/validateInvitationAPI', DataToSend);
    },
    {
      onSuccess: async () => {
        myUser.notificationCount = myUser.notificationCount - 1;
        queryClient.invalidateQueries('getInvitations');
        queryClient.invalidateQueries('getBuildings');
        // if(invitation.senderIsAdmin) {
        // toast.success("Please wait for the admin to accept your invitation");
        // }else{
        toast.success("Action réalisée avec succès");
        // }
      },
    }
  );
  const myIncludes = (input) => {
    let value = 0;
    [',', 'et'].forEach(function (word) {
      value = value + input.includes(word);
    });
    return (value === 1)
  }
  return (
    (invitation.status == "pendingAcceptance" ?
      <div style={{ display: 'flex', padding: '0', marginLeft: "4rem", marginRight: "4rem", width: '100%' }}>
        <Card variant="bordered" css={{ backgroundColor: '', borderLeft: '0.7rem solid #17c964', display: 'flex', justifyContent: 'center' }}>
          <div id='test' style={{}}>
            <Grid.Container gap={1} css={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              < Grid css={{ height: '100%', }}>
                <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between', padding: 0, marginLeft: '1rem' }}>
                  <p style={{ color: 'black', fontSize: '1.4rem', marginBottom: "0", marginTop: 0 }}><b><b title={invitation.senderName}>{invitation.senderName}</b> vous invite
                    {myIncludes(invitation.receiverHouseNames) ?
                      <span style={{ display: 'inline', color: 'black', fontSize: '1.4rem' }}> aux appartements </span>
                      :
                      <span style={{ display: 'inline', color: 'black', fontSize: '1.4rem' }}> à l&apos;appartement </span>}
                    <b title={invitation.receiverHouseNames}>{invitation.receiverHouseNames}</b> d&apos;immeuble <b title={invitation.buildingName}>{invitation.buildingName}</b> </b></p>
                </div>

                {invitation.isAdmin ?
                  <div>
                    <p style={{ margin: "0", marginLeft: '1rem', marginTop: '0rem', color: '#467a9b', textShadow: '1px 1px 20px #b8b8b8' }}><b>Vous serez un administrateur dans cet immeuble.</b></p>
                  </div>
                  : !invitation.senderIsAdmin ?
                    <div>
                      <p style={{ margin: "0", marginLeft: '1rem', marginTop: '0rem', color: '#467a9b', textShadow: '1px 1px 20px #b8b8b8' }}><b>Un administrateur de cet immeuble va vérifier cette invitation.</b></p>
                    </div>
                    : null}
              </Grid>
              {/* <Spacer x={4} /> */}
              <Grid>
                <div style={{ display: 'flex', marginTop: '0.55rem', flexDirection: 'row', alignItems: 'center', marginRight: '0.5rem' }}>
                  <Button onClick={refuseInvitation} color="error" css={{ width: '9rem', minWidth: '9rem', height: '3rem' }}>
                    Refuser
                  </Button>
                  <Spacer x={1} />
                  <Button onClick={acceptInvitation} color="success" css={{ width: '9rem', minWidth: '9rem', height: '3rem' }}>
                    Accepter
                  </Button>
                </div>
              </Grid>
            </Grid.Container>
          </div>
        </Card >
      </div >
      :
      <div style={{ display: 'flex', padding: '0', marginLeft: "4rem", marginRight: "4rem", width: '100%' }}>
        <Card variant="bordered" css={{ backgroundColor: '', borderLeft: '0.7rem solid #F5A524', display: 'flex', justifyContent: 'center' }}>
          <div id='test' style={{}}>
            <Grid.Container gap={1} css={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              < Grid css={{ height: '100%', }}>
                <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between', padding: 0, marginLeft: '1rem' }}>
                  <p style={{ color: '#595959', fontSize: '1.4rem', marginBottom: "0", marginTop: 0 }}><b><b title={invitation.senderName}>{invitation.senderName}</b> a invité {invitation.receiverName}
                    {myIncludes(invitation.receiverHouseNames) ?
                      <span style={{ display: 'inline', color: '#595959', fontSize: '1.4rem' }}> aux appartements </span>
                      :
                      <span style={{ display: 'inline', color: '#595959', fontSize: '1.4rem' }}> à l&apos;appartement </span>}
                    <b title={invitation.receiverHouseNames}>{invitation.receiverHouseNames}</b> d&apos;immeuble <b title={invitation.buildingName}>{invitation.buildingName}</b> </b></p>
                </div>
              </Grid>
              {/* <Spacer x={4} /> */}
              <Grid>
                <div style={{ display: 'flex', marginTop: '0.55rem', flexDirection: 'row', alignItems: 'center', marginRight: '0.5rem' }}>
                  <Button onClick={refuseInvitation} color="error" css={{ width: '9rem', minWidth: '9rem', height: '3rem' }}>
                    Refuser
                  </Button>
                  <Spacer x={1} />
                  <Button onClick={validateInvitation} color="primary" css={{ width: '9rem', minWidth: '9rem', height: '3rem' }}>
                    Valider
                  </Button>
                </div>
              </Grid>
            </Grid.Container>
          </div>
        </Card >
      </div >
    )
  )
}

export default Invitation