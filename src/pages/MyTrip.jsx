import React from "react";
import Checklist from "../components/Checklist";
import Budget from "../components/Budget";

const DUMMY_TRIP = {
  Title: "Trip to Japan",
  Description: "Business trip to Osaka",
  startDate: new Date(2023, 10, 9),
  endDate: new Date(2023, 10, 16),
  checklist: {
    items: [
      {
        item: "Passport",
        checked: false,
      },
      {
        item: "Toothbrush",
        checked: false,
      },
      {
        item: "Clothes",
        checked: false,
      },
      {
        item: "Shoes",
        checked: false,
      },
      {
        item: "Phone",
        checked: false,
      },
      {
        item: "Charger",
        checked: false,
      },
      {
        item: "Wallet",
        checked: false,
      },
      {
        item: "Headphones",
        checked: false,
      },
      {
        item: "Glasses",
        checked: false,
      },
      {
        item: "Medicine",
        checked: false,
      },
      {
        item: "Camera",
        checked: false,
      },
      {
        item: "Laptop",
        checked: false,
      },
      {
        item: "Books",
        checked: false,
      },
      {
        item: "Snacks",
        checked: false,
      },
      {
        item: "Water Bottle",
        checked: false,
      },
      {
        item: "Umbrella",
        checked: false,
      },
      {
        item: "Sunscreen",
        checked: false,
      },
      {
        item: "Sunglasses",
        checked: false,
      },
      {
        item: "Hat",
        checked: false,
      },
      {
        item: "Pajamas",
        checked: false,
      },
      {
        item: "Bathing Suit",
        checked: false,
      },
      {
        item: "First Aid Kit",
        checked: false,
      },
      {
        item: "Hand Sanitizer",
        checked: false,
      },
      {
        item: "Travel Pillow",
        checked: false,
      },
      {
        item: "Travel Documents",
        checked: false,
      },
      {
        item: "Travel Insurance",
        checked: false,
      },
      {
        item: "Travel Tickets",
        checked: false,
      },
    ],
  },
  budget: [
    {
      foodAmount: 0,
      attractionAmount: 0,
      accomadationAmount: 0,
      totalAmount: 0,
    },
  ],
};

const MyTrip = () => {
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

  return (
    <div>
      <h2>{DUMMY_TRIP.Title}</h2>
      <p>{DUMMY_TRIP.Description}</p>
      <p>
        {formatDate(DUMMY_TRIP.startDate)} - {formatDate(DUMMY_TRIP.endDate)}
      </p>
      <Checklist list={DUMMY_TRIP.checklist.items} listName="Things to Pack" />
      <Budget details={DUMMY_TRIP.budget[0]} />
    </div>
  );
};

export default MyTrip;
