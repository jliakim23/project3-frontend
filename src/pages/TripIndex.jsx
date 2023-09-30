import React from "react";
import { Link } from "react-router-dom";

const TripIndex = ({ data }) => {
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
    </div>
  );
};

export default TripIndex;
