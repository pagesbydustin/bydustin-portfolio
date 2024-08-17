import { Col, Row } from "react-bootstrap";
import ExperienceComponent from "./sections/ExperienceComponent";
import AboutComponent from "./sections/AboutComponent";

export default function BodyLayoutComponent() {
  return (
    <>
      <div className={"container-flex-full my-2"}>
        <Row>
          <Col className=" p-2 col-100" lg={100}>
            <div className="align-center" id="home">
              <h3 style={{ textAlign: "Center" }}>Who is this guy?</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="p-2 col-100">
            <AboutComponent show={true} />
            <ExperienceComponent show={true} />
          </Col>
        </Row>
      </div>
    </>
  );
}
