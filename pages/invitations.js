// import Image from "next/image"

import ListInvitations from "../components/Invitation/ListInvitations"
import { useRecoilState } from 'recoil';
import { myUserState } from '../store/atoms';

const invitations = () => {

  const [myUser, setMyUser] = useRecoilState(myUserState);

  // console.log(myUser);
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "4rem", marginRight: "4rem" }}>
        <h1 style={{ marginBottom: 0, color: "#457B9D" }}>Invitations</h1>
      </div>
      <ListInvitations />
    </main>
  )
}

export default invitations