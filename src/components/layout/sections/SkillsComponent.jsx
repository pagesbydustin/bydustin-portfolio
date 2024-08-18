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
    <div id="skills" className="container m-2">
      <h4 className="text-center p-2">Skills</h4>
      <ListGroup
        style={{ cursor: "pointer" }}
        className="list-group-horizontal-lg flex-lg-wrap list-list-group-flush "
      >
        {Skills.map((skill, index) => (
          <ListGroupItem
            itemID={index}
            key={index}
            onMouseOver={() => handleHoverIn(index)}
            active={active === index ? true : false}
            onClick={() => handleSelect(index)}
            className={
              isSelected === index
                ? "text-warning list-group-item-dark"
                : "text-light bg-dark-subtle"
            }
          >
            {skill}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
