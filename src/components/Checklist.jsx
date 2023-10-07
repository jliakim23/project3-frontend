import React, { useState } from "react";
import ListItem from "./ListItem";
import { FaSuitcase } from "react-icons/fa";
import { PiCheckFatBold } from "react-icons/pi";

const Checklist = ({ type, list }) => {
  const [checklist, setChecklist] = useState(list || []);

  const listName = type === "to pack" ? "Things To Pack" : "Checklist";
  const listIcon =
    type === "to pack" ? (
      <FaSuitcase style={{ marginRight: 10 }} />
    ) : (
      <PiCheckFatBold style={{ marginRight: 10 }} />
    );

  const handleCheckClick = (e) => {
    const { name } = e.target;
    const updatedChecklist = checklist.map((item) => {
      if (item.item === name) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });

    setChecklist(updatedChecklist);
  };

  const handleSetValue = (e, idx) => {
    const { value } = e.target;
    const updatedChecklist = checklist.map((item, i) => {
      if (i === idx) {
        return {
          ...item,
          item: value,
        };
      }
      return item;
    });

    setChecklist(updatedChecklist);
  };

  const deleteItem = (value) => {
    // console.log(value);
    const updatedChecklist = checklist.filter((item) => {
      console.log(value, item.item);
      return value !== item.item;
    });
    setChecklist(updatedChecklist);
  };

  return (
    <div className="container">
      <h2 className="header">
        {listIcon}
        {listName}
      </h2>
      <ul style={{ listStyle: "none" }}>
        {checklist.map((item, idx) => (
          <li key={idx} style={{ display: "flex" }}>
            <input
              type="checkbox"
              checked={item.checked}
              name={item.item}
              onChange={handleCheckClick}
            />
            <ListItem
              htmlFor={item.item}
              item={item.item}
              idx={idx}
              onSetValue={handleSetValue}
              deleteItem={deleteItem}
              checklist={checklist}
            >
              {item.item}
            </ListItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
