import { useState } from "react";

const ModalInput = ({ name, type, value, setValue, checklist }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleSetValue = (e) => {
    if (type === "money") {
      if (Number.isNaN(parseFloat(e.target.value))) {
        console.log("not a number");
        setCurrentValue(value);
        setIsEditing(false);
        return;
      }
      setCurrentValue(parseFloat(currentValue).toFixed(2));
    }
    if (type === "todo") {
      if (e.target.value === "") {
        console.log("empty string");
        setCurrentValue(value);
        setIsEditing(false);
        return;
      }
      const duplicate = checklist.find((item) => item.item === e.target.value);
      if (duplicate) {
        console.log("duplicate item");
        setCurrentValue(value);
        setIsEditing(false);
        return;
      }
    }
    setValue(e);
    setIsEditing(false);
  };

  const handleInputFocus = () => {
    setIsEditing(true);
  };

  const handleInputBlur = (e) => {
    handleSetValue(e);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSetValue(e);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          name={name}
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
