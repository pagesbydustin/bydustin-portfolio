import PropTypes from "prop-types";

export default function HeaderComponent({ propsTitle, propsHeight }) {
  const config = { title: propsTitle, height: propsHeight };

  return (
    <>
      <div className="clearfix d-flex mt-0 mb-5 flex-fill" />
      <div
        className=" mt-5 w-100 p-lg-2 p-md-2 p-sm-1 p-4 bg-gradient rounded-bottom"
        style={{ height: config.height + "px" }}
      >
        <h1
          className="p-3 pt-4 mt-0 mb-2 text-center bg-gradient rounded-bottom"
          style={{ boxShadow: "0px 4px 5px black" }}
        >
          {" "}
          {config.title}
        </h1>
      </div>
    </>
  );
}

HeaderComponent.propTypes = {
  propsTitle: PropTypes.string.isRequired,
  propsHeight: PropTypes.number.isRequired,
};
