import { useState } from "react";
import { Button, Card, Carousel, Row, Col } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import PropTypes from "prop-types";

export default function ExperienceComponent({ showTF, title }) {
  const Experience = JSON.parse(sessionStorage.getItem("experience"));

  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
  const [show, setShow] = useState(showTF);

  {
    /** Go Forward */
  }
  const handleNextExperience = () => {
    setCurrentExperienceIndex((prevIndex) => {
      if (prevIndex < Experience.length - 1) {
        return prevIndex + 1;
      }
      return 0;
    });
  };
  {
    /** Go Backward */
  }
  const handlePrevExperience = () => {
    setCurrentExperienceIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return Experience.length - 1;
    });
  };

  return (
    <>
      <h4 className="text-center pt-4 pb-2" id="experience">
        Experience
      </h4>
      <Carousel
        interval={5000}
        nextIcon={false}
        prevIcon={false}
        activeIndex={currentExperienceIndex}
        onSelect={setCurrentExperienceIndex}
        indicators={false}
      >
        {Experience.map((experience, index) => (
          <Carousel.Item key={index} style={{ height: "240px" }}>
            <Card className="m-3 align-content-center align-middle">
              <Card.Header className="text-center">
                <b>- {experience.Title} -</b>
              </Card.Header>
              <Card.Body style={{ height: "150px" }}>
                <Row>
                  <Col lg={2} md={12}>
                    <div
                      style={{ height: "120px" }}
                      className="rounded container p-3 bg-primary bg-opacity-25 align-content-center align-middle"
                    >
                      {experience.StartDate ? (
                        experience.StartDate + " to " + experience.EndDate
                      ) : (
                        <BsCheckCircle size={22} />
                      )}
                    </div>
                  </Col>
                  <Col>
                    <div
                      style={{ height: "120px" }}
                      className="rounded container p-3 bg-primary bg-opacity-25 align-content-center"
                    >
                      {experience.Description}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="text-center">
        <Button className="m-2 mb-3 p-2 w-25" onClick={handlePrevExperience}>
          Prev
        </Button>
        <h3 className="d-inline-block">{" | "}</h3>
        <Button className="m-2 mb-3 p-2 w-25" onClick={handleNextExperience}>
          Next
        </Button>
      </div>
    </>
  );
}
ExperienceComponent.propTypes = {
  title: PropTypes.string, // string
  showTF: PropTypes.bool, // boolean
};
