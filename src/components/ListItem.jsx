import React, { useState } from "react";
import ModalInput from "./ModalInput";

const ListItem = ({ item, idx, deleteItem, onSetValue, checklist }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  // const [value, setValue] = useState(item);

  const handleSetValue = (e) => {
    // setValue(e.target.value);
    onSetValue(e, idx);
  };

  const onClick = () => {
    deleteItem(item);
    // console.log(value);
  };

  const onMouseOver = () => {
    setShowDeleteBtn(true);
  };

  const onMouseOut = () => {
    setShowDeleteBtn(false);
  };

  return (
    <div onClick={onClick}>
      <div
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        style={{ display: "flex" }}
      >
        <ModalInput
          name={item}
          type="todo"
          value={item}
          setValue={handleSetValue}
          checklist={checklist}
        />{" "}
        {showDeleteBtn ? (
          <button onClick={onClick} name="delete-btn">
            X
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ListItem;
