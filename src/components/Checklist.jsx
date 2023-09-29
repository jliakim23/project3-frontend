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

  return (
    <div className="container">
      <h2 className="header">{listName}</h2>
      <ul style={{ listStyle: "none" }}>
        {checklist.map((item, idx) => (
          <div key={idx} style={{ display: "flex" }}>
            <input
              type="checkbox"
              checked={item.checked}
              name={item.item}
              onChange={handleCheckClick}
            />
            <ListItem htmlFor={item.item} item={item.item} idx={idx}>
              {item.item}
            </ListItem>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
