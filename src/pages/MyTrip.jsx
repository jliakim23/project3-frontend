import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Checklist from "../components/Checklist";
import Budget from "../components/Budget";
import { BsCalendarEvent } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const MyTrip = ({ data, setData }) => {
  const params = useParams();
  const navigate = useNavigate();

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
    const editedTripData = {
      title: editedTrip.title,
      startDate: editedTrip.startDate,
      endDate: editedTrip.endDate,
      description: editedTrip.description,
    };

    fetch(`${process.env.REACT_APP_API_URL}/plan/${tripIdToEdit}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedTripData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Trip updated:", data);

        setIsEditing(false);
        setData((prevTrips) =>
          prevTrips.map((trip) =>
            trip._id === tripIdToEdit ? { ...trip, ...editedTripData } : trip
          )
        );
        navigate(`/trips/${data.title.replace(/ /g, "_")}`);
      })
      .catch((error) => {
        console.error("Error updating trip:", error);
      });
  };

  const handleModalUpdate = (updatedTrip) => {
    fetch(`${process.env.REACT_APP_API_URL}/plan/${updatedTrip._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTrip),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Trip updated:", data);
        setData((prevTrips) =>
          prevTrips.map((trip) =>
            trip._id === updatedTrip._id ? { ...trip, ...updatedTrip } : trip
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
          <Row className="mt-2">
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

                    <Button
                      style={{ backgroundColor: "rgba(78, 174, 212, 0.7)" }}
                      size="sm"
                      onClick={handleSaveClick}
                    >
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

              <Button
                style={{ backgroundColor: "rgba(78, 174, 212, 0.4)" }}
                size="sm"
                onClick={() => handleEditClick(trip._id)}
              >
                Edit
              </Button>
            </Col>
          </Row>

          <span
            style={{
              color: "white",
              textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Checklist list={trip.checklist} type="to pack" />
            <Budget details={trip} updateTrip={handleModalUpdate} />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default MyTrip;
