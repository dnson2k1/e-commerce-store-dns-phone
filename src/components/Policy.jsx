import React from "react";
import PropTypes from "prop-types";

const Policy = (props) => {
  return (
    <div className="policy">
      <div className="policy__icon">
        <i className={props.icon}></i>
      </div>
      <div className="policy__info">
        <div className="policy__info__name">{props.name}</div>
        <div className="policy__info__title">{props.title}</div>
      </div>
    </div>
  );
};

Policy.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default Policy;
