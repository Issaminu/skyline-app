// import React from 'react'
import { Card, Col, Row, css, Button, Image, Text, Avatar, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";


const Tenant = (tenant) => {
  const thisTenant = tenant.tenant;
  const router = useRouter();

  const gotoTenant = () => {
    router.push('/tenants/' + thisTenant.id)
  }
  return (
    // <Card cover css={{ w: "100%", p: 0 }} hoverable clickable onClick={gotoTenant}>
    //     <Card.Body>
    //         <Card.Image
    //             showSkeleton
    //             src={thisTenant.thumbnail}
    //             height={400}
    //             width="100%"
    //             alt={thisTenant.name}
    //         />
    //     </Card.Body>
    //     <Card.Footer
    //         blur
    //         css={{
    //             position: "absolute",
    //             bgColor: "#00436b",
    //             borderTop: "$borderWeights$light solid $gray700",
    //             bottom: 0,
    //             zIndex: 1,
    //             height: "5.4rem"
    //         }}
    //     >
    //         <Row>
    //             <Col>
    //                 <Row>
    //                     <Col>
    //                         <Text color="#F2F2F2" size={25} b css={{ whiteSpace: 'nowrap' }} title={thisTenant.name}>
    //                             {thisTenant.name.slice(0, 16) + (thisTenant.name.length > 16 ? "..." : "")}
    //                         </Text>
    //                     </Col>
    //                 </Row>
    //                 <Row>
    //                     <Col>
    //                         <Text color="#F2F2F2" size={12} css={{ whiteSpace: 'nowrap' }} title={thisTenant.job}>
    //                             {thisTenant.job.slice(0, 35) + (thisTenant.job.length > 35 ? "..." : "")}
    //                         </Text>
    //                     </Col>
    //                 </Row>
    //             </Col>
    //             <Col css={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

    //                 <Text
    //                     css={{ color: "#94f9f0", marginTop: "1rem", whiteSpace: 'nowrap' }}
    //                     size={18}
    //                     weight="bold"
    //                 >
    //                     Voir Immeuble
    //                 </Text>
    //             </Col>
    //         </Row>
    //     </Card.Footer >
    // </Card >

    <Card isPressable variant="bordered" isHoverable onClick={gotoTenant} css={{ backgroundColor: "#005a91", width: "25rem", }}>
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "center", }} >

              <Avatar
                src={thisTenant.image}
                auto
                css={{ width: "10rem", height: "10rem" }}
              />
            </div>
            <Spacer y={0.5} />
            <div style={{ display: "flex", justifyContent: "center", }}>
              <Text color="#FDCC45" size={35} b css={{ whiteSpace: 'nowrap' }} title={thisTenant.name}>
                {thisTenant.name.slice(0, 19) + (thisTenant.name.length > 19 ? "..." : "")}
              </Text>
            </div>
            <div style={{ display: "flex", justifyContent: "center", }}>
              <Text color="#E0E0E0" size={20} css={{ whiteSpace: 'nowrap' }} title={thisTenant.job}>
                {thisTenant.job.slice(0, 40) + (thisTenant.job.length > 40 ? "..." : "")}
              </Text>
            </div>
            <div style={{ display: "flex", justifyContent: "center", }}>
              <Text color="#E0E0E0" size={17} css={{ whiteSpace: 'nowrap' }} title={thisTenant.phone}>
                {thisTenant.phone.slice(0, 40) + (thisTenant.phone.length > 40 ? "..." : "")}
              </Text>
            </div>
          </div>
        </div>


      </Card.Body>
    </Card>
  )
}

export default Tenant;