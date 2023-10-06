import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, ListGroup, Modal} from "react-bootstrap";


const TripIndex = ({ data }) => {
  const [form, setForm] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [trips, setTrips] = useState(data); 
  useEffect(() => {
    setTrips(data);
  }, [data]);

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

  const handleDeleteTrip = (tripId) => {
    fetch(`${process.env.REACT_APP_API_URL}/plan/${tripId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Trip deleted");

        setTrips(trips.filter((trip) => trip._id !== tripId));
      })
      .catch((error) => {
        console.error("Error deleting trip:", error);
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
    <div className="addTripsPage">
    <Container>
    <Row>
      <Col md={6}>
        <h1 style= {{ color: 'white', textShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)' }}>Trips</h1>
        <ListGroup>
          {data.map((trip) => {
            const titleUrl = trip.title.replace(/\s+/g, "_");
            return (
              <ListGroup.Item key={trip._id}>
              <Row>
                <Col>
                  <Link to={`/trips/${titleUrl}`}>{trip.title}</Link>
                </Col>
                <Col xs="auto">
                  <Button
                    className='custom-button ml-2'  
                    onClick={() => handleDeleteTrip(trip._id)}
                  >
                    X
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>
      <Col md={6}>
        <h2 style={{ color: 'white', textShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)' }}>Add a Trip</h2>
        <Form onSubmit={handleAddTrip}>
          <Form.Group>
           
            <Form.Control
              type="text"
              name="title"
              placeholder="Title (must be unique)"
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="date"
              name="startDate"
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="date"
              name="endDate"
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="description"
              placeholder="Brief description"
              onChange={handleFormChange}
            />
          </Form.Group>
          <Button className='custom-button mt-3' type="submit">Add Trip</Button>
        </Form>
      </Col>
    </Row>
  </Container>
  </div>
);
};

export default TripIndex;
