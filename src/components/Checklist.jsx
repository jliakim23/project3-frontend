import React, { useState } from "react";
import ListItem from "./ListItem";

const Checklist = ({ listName, list }) => {
  const [checklist, setChecklist] = useState(list);

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

  const deleteItem = (idx) => {
    console.log("this button should delete item w/ index", idx);
    // const updatedChecklist = checklist.filter((item, i) => {
    //   console.log(idx, i);
    //   return i !== idx;
    // });
    // setChecklist(updatedChecklist);
  };

  return (
    <div className="container">
      <h2 className="header">{listName}</h2>
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
