import React from "react";
import "./input-text.scss";

const InputText = (props) => {
  return (
    <div className="minimal-input">
      <input
        required={props.required}
        className="minimal-textfield"
        type={props.type || "text"}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        autoComplete="off"
      />
      <div className="textfield-underline"></div>
      <label>{props.label}</label>
      <p className="error-message blink">{props.errorMessage || ""}</p>
    </div>
  );
};

export default InputText;
