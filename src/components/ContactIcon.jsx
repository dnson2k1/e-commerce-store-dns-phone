import React from "react";
import PropTypes from "prop-types";

const ContactIcon = (props) => {
  return (
    <div className="contact__icon">
      <div className="contact__icon__item">
        <a href="https://www.facebook.com/sangfanreal/" target="_blank">
          <i className={`${props.facebook}`}></i>
        </a>
      </div>
      <div className="contact__icon__item">
        <a href="https://www.instagram.com/dn.sang_/" target="_blank">
          <i className={`${props.instagram}`}></i>
        </a>
      </div>
      <div className="contact__icon__item">
        <a href="#" target="_blank">
          <i className={`${props.twitter}`}></i>
        </a>
      </div>
      <div className="contact__icon__item">
        <a href="https://github.com/dnson2k1" target="_blank">
          <i className={`${props.github}`}></i>
        </a>
      </div>
    </div>
  );
};

ContactIcon.propTypes = {
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
};

export default ContactIcon;
