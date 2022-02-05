import React from "react";
import PropTypes from "prop-types";

const Banner = (props) => {
  const style = {
    marginBottom: props.marginBottom ? `${props.marginBottom}px` : "0",
  };
  const image = props.img ? props.img : "";
  return (
    <div className="banner" style={style}>
      <img src={image} />
    </div>
  );
};

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  marginBottom: PropTypes.number,
};

export default Banner;
