import React from "react";

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="mb-1">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control border-clr"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={`Enter ${labelText?.toLowerCase()}`}
        />
      </div>
    </>
  );
};

export default InputType;
