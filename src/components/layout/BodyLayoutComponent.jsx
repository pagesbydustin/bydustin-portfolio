import { Col, Row } from "react-bootstrap";
import ExperienceComponent from "./sections/ExperienceComponent";
import AboutComponent from "./sections/AboutComponent";
import SkillsComponent from "./sections/SkillsComponent";
import PropTypes from "prop-types";

export default function BodyLayoutComponent() {
  return (
    <>
      <div className={"container-flex-full clearfix"}>
        <Row>
          <Col className=" p-2 col-100" lg={100}>
            <div className="align-center" id="home">
              <h3 style={{ textAlign: "Center" }}>Who is this guy?</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="p-2 col-100">
            <div className="mb-5 ">
              <AboutComponent show={true} />
            </div>
            <div className="mt-5 mb-5">
              <SkillsComponent show={true} />
            </div>
            <div className="mt-5">
              <ExperienceComponent show={true} title="Experience" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

BodyLayoutComponent.propTypes = {};
