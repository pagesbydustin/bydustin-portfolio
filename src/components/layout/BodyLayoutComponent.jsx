import PropTypes from "prop-types";
import { useState } from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

export default function BodyLayoutComponent() {
  const [mouseIsOver, setMouseIsOver] = useState(null);

  function setBgColor(item) {
    setMouseIsOver(item);
  }

  return (
    <>
      <div className={"container-flex-full my-2"}>
        <Row>
          <Col className=" p-2 col-100" lg={100}>
            <div className="align-center" id="home">
              <h3 id="home" style={{ textAlign: "Center" }}>
                Who is this guy?
              </h3>
            </div>
          </Col>
          <Col className="p-2 col-100">
            <Card className="card-subtitle">
              <Card.Header className="text-center">
                <b>- About Dustin -</b>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg={1} md={12}>
                    test
                  </Col>
                  <Col></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
