import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import PropTypes from "prop-types";
import DataManager from '../../../assets/utils/DataManager';

export default function SkillsComponent() {
  const skills = DataManager.getSkills();
  const skillsSorted = [...skills].sort();

  const [active, setActive] = useState(0);
  const [isSelected, setIsSelected] = useState();

  function handleHoverIn(ID) {
    {
      setActive(ID);
    }
  }

  function handleSelect(ID) {
    setIsSelected(ID);
  }

  return (
    <div id="skills" className={"container m-2 "}>
      <h4 className={"text-center p-2"}>Skills</h4>
      <ListGroup
        style={{ cursor: "pointer" }}
        className="list-group-horizontal-lg flex-lg-wrap list-list-group-flush tex"
      >
        {skillsSorted.map((skill, index) => (
          <ListGroupItem
            itemID={index}
            key={index}
            onMouseOver={() => handleHoverIn(index)}
            active={active === index ? true : false}
            onClick={() => handleSelect(index)}
            className={
              isSelected === index
                ? "text-warning bg-body-tertiary"
                : "bg-body-tertiary"
            }
          >
            {skill}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

SkillsComponent.propTypes = {
  show: PropTypes.bool, // boolean
};
