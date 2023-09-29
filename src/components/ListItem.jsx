import React, { useState } from "react";

const ListItem = ({ item, idx, deleteItem }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const onClick = (e) => {
    console.log(item);
    // deleteItem(idx);
  };

  const onMouseOver = () => {
    setShowDeleteBtn(true);
  };

  const onMouseOut = () => {
    setShowDeleteBtn(false);
  };

  return (
    <li onClick={onClick}>
      <div
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        // style={{ position: "relative" }}
      >
        {item}{" "}
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
    </li>
  );
};

export default ListItem;
