import React from "react";
import { useParams } from "react-router-dom";
import Checklist from "../components/Checklist";
import Budget from "../components/Budget";
import { BsCalendarEvent } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";

const MyTrip = ({ data }) => {
  const params = useParams();

  const trip = data.find(
    (trip) => trip.title === params.title.replace(/_/g, " ")
  );

  trip.startDate = new Date(trip.startDate);
  trip.endDate = new Date(trip.endDate);

  const formatDate = (date) => {
    const weekdayNumber = date.getDay();
    const month = date.getMonth();
    const dateNumber = date.getDate();

    const monthNames = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October ",
      "November",
      "December",
    ];

    const weekdayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const findSuffix = (num) => {
      const lastDigit = num.toString().slice(-1);

      switch (lastDigit) {
        case "1":
          return "st";
        case "2":
          return "nd";
        case "3":
          return "rd";
        default:
          return "th";
      }
    };

    const numberSuffix = findSuffix(dateNumber);

    return `${weekdayNames[weekdayNumber]}, ${monthNames[month]} ${dateNumber}${numberSuffix}`;
  };

  const formatDateRange = (startDate, endDate) => {
    const start = formatDate(startDate);
    const startYear = startDate.getFullYear();
    const end = formatDate(endDate);
    const endYear = endDate.getFullYear();

    if (startYear === endYear) {
      return `${start} - ${end} ${startYear}`;
    } else {
      return `${start} ${startYear} - ${end} ${endYear}`;
    }
  };

  return (
    <div>
      <h1 className="header">{trip.title}</h1>
      <p>
        <BsCalendarEvent style={{ marginRight: 7 }} />
        {formatDateRange(trip.startDate, trip.endDate)}
      </p>
      <p>
        <CgDetailsMore style={{ marginRight: 5 }} /> {trip.description}
      </p>
      {/* <Checklist list={trip.checklist.items} type="to pack" /> */}
      <Budget details={trip.budget[0]} />
    </div>
  );
};

export default MyTrip;
