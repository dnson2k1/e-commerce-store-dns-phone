import React from "react";
import PropTypes from "prop-types";

const ContactInfo = (props) => {
  const { icon, name, title } = props;
  return (
    <div className="contact__item">
      <div className="contact__item__icon">
        <i className={`${icon}`}></i>
      </div>
      <div className="contact__item__info">
        <h3 className="contact__item__info__name">{name}</h3>
        <div className="contact__item__info__title">{title}</div>
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContactInfo;
