import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MyTrip from "./pages/MyTrip";
import TripIndex from "./pages/TripIndex";
import AuthPage from "./pages/AuthPage/AuthPage";
import Signup from "./pages/AuthPage/Signup";
import Login from "./pages/AuthPage/Login";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import Auth from "./pages/AuthPage/Auth";

function App() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("https://tripadvisor-backend.onrender.com/plan")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AuthPage />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route
            path="/home"
            element={
              <Auth>
                {" "}
                <Home data={trips} />
              </Auth>
            }
          />
          <Route
            path="/trips"
            element={
              <Auth>
                <TripIndex data={trips} />
              </Auth>
            }
          />
          <Route
            path="/trips/:title"
            element={
              <Auth>
                <MyTrip data={trips} />
              </Auth>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
