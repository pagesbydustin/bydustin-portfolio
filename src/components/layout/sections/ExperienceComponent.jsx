import { useState } from "react";
import { Button, Card, Carousel, Collapse, Row, Col } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";

export default function ExperienceComponent({ show }) {
  const Experience = JSON.parse(sessionStorage.getItem("experience"));

  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);

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
      <Carousel
        interval={3000}
        nextIcon={false}
        prevIcon={false}
        activeIndex={currentExperienceIndex}
        onSelect={setCurrentExperienceIndex}
      >
        {Experience.map((experience, index) => (
          <Carousel.Item key={index} style={{ height: "220px" }}>
            <Card className="m-3">
              <Card.Header className="text-center">
                <b>- {experience.Title} -</b>
              </Card.Header>
              <Card.Body style={{ height: "150px" }}>
                <Row>
                  <Col lg={2} md={12}>
                    <div className="rounded container p-3 bg-primary bg-opacity-25 text-center">
                      {experience.StartDate ? (
                        experience.StartDate + " to " + experience.EndDate
                      ) : (
                        <BsCheckCircle size={22} />
                      )}
                    </div>
                  </Col>
                  <Col>
                    <div className="rounded container p-3 bg-primary bg-opacity-25">
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
        <Button className="m-2" onClick={handlePrevExperience}>
          Prev
        </Button>
        <Button className="m-2" onClick={handleNextExperience}>
          Next
        </Button>
      </div>
    </>
  );
}
