import React, { useState } from "react";
import ModalInput from "./ModalInput";

const ListItem = ({ item, idx, deleteItem, onSetValue }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [value, setValue] = useState(item);

  const handleSetValue = (e) => {
    setValue(e.target.value);
    onSetValue(e, idx);
  };

  const onClick = () => {
    deleteItem(idx);
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
          type="text"
          value={value}
          setValue={handleSetValue}
        />{" "}
        {showDeleteBtn ? (
          <button
            onClick={onClick}
            name="delete-btn"
            // style={{
            //   position: "absolute",
            //   right: 0,
            // }}
          >
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
