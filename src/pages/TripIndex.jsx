import React, { useState } from "react";
import { Link } from "react-router-dom";

const TripIndex = ({ data }) => {
  const [form, setForm] = useState({
    Title: "",
    startDate: "",
    endDate: "",
    Description: "",
  });

  const handleAddTrip = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log(value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  return (
    <div>
      <ul>
        {data.map((trip) => {
          const titleUrl = trip.Title.replace(/\s+/g, "_");
          return (
            <li key={trip.id}>
              <Link to={`/trips/${titleUrl}`}>{trip.Title}</Link>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleAddTrip}>
        <input
          type="text"
          name="Title"
          placeholder="Title (must be unique)"
          onChange={handleFormChange}
        />
        <input type="date" name="startDate" onChange={handleFormChange} />
        <input type="date" name="endDate" onChange={handleFormChange} />
        <input
          type="text"
          name="Description"
          placeholder="Brief description"
          onChange={handleFormChange}
        />
        <input type="submit" value="Add Trip" />
      </form>
    </div>
  );
};

export default TripIndex;
