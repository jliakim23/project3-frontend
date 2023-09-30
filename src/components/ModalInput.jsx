import React, { useState } from "react";

const ModalInput = ({ type, value, setValue, name }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    setCurrentValue(e.target.value);
    type === "money" ? setValue(e) : setValue(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleInputFocus = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          name={name || "input"}
          value={currentValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          autoFocus
        />
      ) : (
        <div onClick={handleInputFocus} style={{ cursor: "pointer" }}>
          {type === "money" ? "$" : ""}
          {value || "Click to add"}
        </div>
      )}
    </div>
  );
};

export default ModalInput;
