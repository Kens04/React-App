import React from "react";

export const Input = ({ type, id, name, value, disabled, onChange }) => {
  return (
    <input
      className="border border-slate-400 w-full rounded-md p-3"
      type={type}
      id={id}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
