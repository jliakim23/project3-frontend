import React from "react";
import { Link } from "react-router-dom";

const TripIndex = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((trip) => {
          return (
            <li key={trip.id}>
              <Link to={`/trips/${trip.id}`}>{trip.Title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TripIndex;
