import React, { useState } from "react";
import { Link } from "react-router-dom";

const TripIndex = ({ data }) => {
  const [form, setForm] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleAddTrip = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/plan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
          const titleUrl = trip.title.replace(/\s+/g, "_");
          return (
            <li key={trip._id}>
              <Link to={`/trips/${titleUrl}`}>{trip.title}</Link>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleAddTrip}>
        <input
          type="text"
          name="title"
          placeholder="Title (must be unique)"
          onChange={handleFormChange}
        />
        <input type="date" name="startDate" onChange={handleFormChange} />
        <input type="date" name="endDate" onChange={handleFormChange} />
        <input
          type="text"
          name="description"
          placeholder="Brief description"
          onChange={handleFormChange}
        />
        <input type="submit" value="Add Trip" />
      </form>
    </div>
  );
};

export default TripIndex;
