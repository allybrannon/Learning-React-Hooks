import React from "react";

function Form({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input value={value} name={label} onChange={onChange} />
    </div>
  );
}

export default Form;
