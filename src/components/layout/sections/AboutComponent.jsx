import CardComponent from "../CardComponent";
import PropTypes from "prop-types";

export default function AboutComponent({ show }) {
  const Person = JSON.parse(sessionStorage.getItem("person"));
  return (
    <div id="about" className="clearfix">
      <CardComponent
        props={{
          title: "About " + Person.name,
          body: Person.name + " is: " + Person.summary,
          show: true,
        }}
      />
    </div>
  );
}

AboutComponent.propTypes = {
  show: PropTypes.bool, // boolean
};
