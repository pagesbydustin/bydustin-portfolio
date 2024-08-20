import { useState } from "react";
import { Button, Card, Carousel, Row, Col, ProgressBar } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import PropTypes from "prop-types";

export default function ExperienceComponent({ showTF, title }) {
  const Experience = JSON.parse(sessionStorage.getItem("experience"));
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(1000);

  const [show, setShow] = useState(showTF);

  const [progress, setProgress] = useState(17);
  const handleProgress = (event) => {
    console.log(Math.round((event * 100) / 6 + 17));
    setProgress(Math.round((event * 100) / 6 + 17));
  };

  {
    /** Go Forward */
  }
  const handleNextExperience = () =>
    setCurrentExperienceIndex((prevIndex) =>
      prevIndex < Experience.length - 1 ? prevIndex + 1 : 0
    );
  {
    /** Go Backward */
  }
  const handlePrevExperience = () =>
    setCurrentExperienceIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Experience.length - 1
    );

  return (
    <>
      <div className="container" hidden={false}>
        <h4 className="text-center pt-4 pb-2" id="experience">
          Experience
        </h4>
        <Carousel
          interval={5000}
          slide
          onSlide={handleProgress}
          controls={false}
          activeIndex={currentExperienceIndex}
          onSelect={setCurrentExperienceIndex}
          indicators={true}
          indicatorLabels={[
            "Information Technology Lead",
            "PHP Backend Programmer",
            "Front End Programmer",
            "Sofware Engineer",
            "Lab Instructor",
            "Network Administrator Assistant",
          ]}
        >
          {Experience.map((experience, index) => (
            <Carousel.Item key={index} style={{ height: "240px" }}>
              <Card className="m-3 align-content-center align-middle">
                <Card.Header className="text-center">
                  <b>- {experience.Title} -</b>
                </Card.Header>
                <Card.Body style={{ height: "150px" }}>
                  <Row>
                    <Col lg={4} md={12}>
                      <div
                        style={{ height: "120px" }}
                        className="rounded container p-3 bg-primary bg-opacity-25 align-content-center text-center"
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
                        className="rounded container p-3 bg-primary bg-opacity-25 align-content-center text-center"
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
          <ProgressBar
            min={0}
            now={progress}
            max={100}
            label={`${progress}%`}
            variant="warning"
            striped
            animated
          />
          <Button className="m-2 mb-3 p-2 w-25" onClick={handlePrevExperience}>
            Prev
          </Button>
          <h3 className="d-inline-block">{" | "}</h3>
          <Button className="m-2 mb-3 p-2 w-25" onClick={handleNextExperience}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
ExperienceComponent.propTypes = {
  title: PropTypes.string, // string
  showTF: PropTypes.bool, // boolean
};
