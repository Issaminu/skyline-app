// import Image from "next/image"

import ListInvitations from "../components/Invitation/ListInvitations"

const invitations = () => {
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