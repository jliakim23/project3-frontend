import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import Checklist from "../components/Checklist";
import Budget from "../components/Budget";
import { BsCalendarEvent } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const MyTrip = ({ data }) => {
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTrip, setEditedTrip] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [tripIdToEdit, setTripIdToEdit] = useState(null);

  const handleEditClick = (tripId) => {
    const tripToEdit = data.find((trip) => trip._id === tripId);
    if (tripToEdit) {
      setEditedTrip({ ...tripToEdit });
      setTripIdToEdit(tripId);
      setIsEditing(true);
    }
  };

  const handleSaveClick = () => {
    // Create a payload object with the edited trip details
    const editedTripData = {
      title: editedTrip.title,
      startDate: editedTrip.startDate,
      endDate: editedTrip.endDate,
      description: editedTrip.description,
    };

    // Make an API request to update the trip
    fetch(`${process.env.REACT_APP_API_URL}/plan/${tripIdToEdit}`, {
      method: "PUT", // Use the appropriate HTTP method for updating data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedTripData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Trip updated:", data);

        // Update the local state with the edited trip details
        setIsEditing(false); // Exit the edit mode
        data((prevTrips) =>
          prevTrips.map((trip) =>
            trip._id === tripIdToEdit ? { ...trip, ...editedTripData } : trip
          )
        );
      })
      .catch((error) => {
        console.error("Error updating trip:", error);
      });
  };

  const trip = data.find(
    (trip) => trip.title === params.title.replace(/_/g, " ")
  );
  if (!trip) {
    return <div>.</div>;
  }

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
    <div className="tripIdPage">
      <Container>
        <div className="grey-background">
          <Row>
            <Col>
              <h1
                className="header"
                style={{
                  color: "white",
                  textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                {isEditing ? (
                  <Form>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="title"
                        value={editedTrip.title}
                        onChange={(e) =>
                          setEditedTrip({
                            ...editedTrip,
                            title: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="date"
                        name="startDate"
                        value={editedTrip.startDate}
                        onChange={(e) =>
                          setEditedTrip({
                            ...editedTrip,
                            startDate: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="date"
                        name="endDate"
                        value={editedTrip.endDate}
                        onChange={(e) =>
                          setEditedTrip({
                            ...editedTrip,
                            endDate: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="description"
                        value={editedTrip.description}
                        onChange={(e) =>
                          setEditedTrip({
                            ...editedTrip,
                            description: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSaveClick}>
                      Save
                    </Button>
                  </Form>
                ) : (
                  trip.title
                )}
              </h1>
              <p
                style={{
                  color: "white",
                  textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                <BsCalendarEvent style={{ marginRight: 7 }} />
                {formatDateRange(trip.startDate, trip.endDate)}
              </p>
              <p
                style={{
                  color: "white",
                  textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                <CgDetailsMore style={{ marginRight: 5 }} /> {trip.description}
              </p>

              <Button variant="primary" onClick={() => handleEditClick(trip._id)}>Edit</Button>
            </Col>
          </Row>
          <p
            style={{
              color: "white",
              textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Budget details={trip.budget} />
            {/* <Checklist list={trip.checklist.items} type="to pack" /> */}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default MyTrip;
