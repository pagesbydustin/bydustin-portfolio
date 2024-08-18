import { useState } from "react";
import { Card, Col, Collapse, Row } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import PropTypes from "prop-types";

export default function CardComponent({ props }) {
  const [show, setShow] = useState(props.show);

  return (
    <Collapse in={show}>
      <Card className="m-3">
        <Card.Header className="text-center">
          <h3>- {props.title} -</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            {props.id ? (
              <Col lg={2} md={12}>
                <div className="rounded container p-3 bg-primary bg-opacity-25 text-center">
                  props.id
                </div>
              </Col>
            ) : (
              ""
            )}

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

CardComponent.propTypes = {
  title: PropTypes.string, // Required string
  body: PropTypes.string, // Required string
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Optional string or number
  show: PropTypes.bool, // Required boolean
};
