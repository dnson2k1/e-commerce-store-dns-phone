import React from "react";
import PropTypes from "prop-types";

const PolicyProductView = (props) => {
  return (
    <div className="policy__product">
      <div className="policy__product__icon">
        <i className={props.icon}></i>
      </div>
      <div className="policy__product__info">
        <div className="policy__product__info__title">{props.title}</div>
      </div>
    </div>
  );
};

PolicyProductView.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default PolicyProductView;
