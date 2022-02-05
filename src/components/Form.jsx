import React, { useState } from "react";
import InputField from "./InputField";

const Form = (props) => {
  return (
    <div className="form">
      <form>
        <InputField name="username" placeholder="Enter your email..." />
        <InputField
          name="password"
          placeholder="Enter your password..."
          type="password"
        />
      </form>
    </div>
  );
};

export default Form;
