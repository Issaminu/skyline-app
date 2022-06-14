// import React from 'react'
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";


const Building = (building) => {
  const thisBuilding = building.building;
  const router = useRouter();

  const gotoBuilding = () => {
    router.push('/buildings/' + thisBuilding.id)
  }
  return (
    <Card isHoverable isPressable onClick={gotoBuilding}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          objectFit="cover"
          showSkeleton
          src={thisBuilding.thumbnail}
          height="100%"
          css={{ maxHeight: '26rem' }}
          width="100%"
          alt={thisBuilding.name}
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: "absolute",
          bgColor: "#00436b",
          borderTop: "$borderWeights$light solid $gray700",
          bottom: 0,
          zIndex: 1,
          height: "5.4rem"
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Text color="#F2F2F2" size={25} b css={{ whiteSpace: 'nowrap' }} title={thisBuilding.name}>
                  {thisBuilding.name.slice(0, 23) + (thisBuilding.name.length > 23 ? "..." : "")}
                </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text color="#F2F2F2" size={12} css={{ whiteSpace: 'nowrap' }} title={thisBuilding.location}>
                  {thisBuilding.location.slice(0, 39) + (thisBuilding.location.length > 39 ? "..." : "")}, {thisBuilding.city.slice(0, 11) + (thisBuilding.city.length > 11 ? "..." : "")}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col css={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

            <Text
              css={{ color: "#94f9f0", marginTop: "1rem", whiteSpace: 'nowrap' }}
              size={18}
              weight="bold"
            >
              Voir Immeuble
            </Text>
          </Col>
        </Row>
      </Card.Footer >
    </Card >
  )
}

export default Building;