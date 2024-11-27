import React from "react";

export default function FormTextInput({ type, placeholder, register }) {
  return (
    <div>
      <input
        type={type}
        className="textInput"
        placeholder={placeholder}
        register={register}
      ></input>
    </div>
  );
}
