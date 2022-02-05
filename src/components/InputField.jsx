import React from "react";
import PropTypes from "prop-types";

const InputField = (props) => {
  const { name, type, label, placeholder, disabled } = props;

  return (
    <div className="form__group">
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} id={name} type={type} placeholder={placeholder} />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};
InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

export default InputField;
