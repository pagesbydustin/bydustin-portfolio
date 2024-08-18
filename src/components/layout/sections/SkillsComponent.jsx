import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useState } from "react";

export default function SkillsComponent({ show }) {
  const Skills = JSON.parse(sessionStorage.getItem("skills"));

  const [active, setActive] = useState(0);
  const [isSelected, setIsSelected] = useState(100);

  function handleHoverIn(ID) {
    {
      setActive(ID);
    }
  }

  function handleSelect(ID) {
    setIsSelected(ID);
  }

  return (
    <div id="Skills" className="container m-2">
      <h3 className="text-center">Skills</h3>
      <ListGroup className="list-group-horizontal-lg flex-lg-wrap d-inline-flex">
        {Skills.map((skill, index) => (
          <ListGroupItem
            itemID={index}
            key={index}
            onMouseOver={() => handleHoverIn(index)}
            active={active === index ? true : false}
            onClick={() => handleSelect(index)}
            className={
              isSelected === index
                ? "text-danger list-group-item-secondary"
                : ""
            }
          >
            {skill}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
