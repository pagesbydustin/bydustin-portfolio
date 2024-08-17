import { useState } from "react";
import { Card, Col, Collapse, Row } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";

export default function CardComponent({ props }) {
  const [show, setShow] = useState(props.show);

  return (
    <Collapse in={show}>
      <Card className="m-3">
        <Card.Header className="text-center">
          <b>- {props.title} -</b>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col lg={2} md={12}>
              <div className="rounded container p-3 bg-primary bg-opacity-25 text-center">
                {props.id ? props.id : <BsCheckCircle size={22} />}
              </div>
            </Col>
            <Col>
              <div className="rounded container p-3 bg-primary bg-opacity-25">
                {props.body}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Collapse>
  );
}
