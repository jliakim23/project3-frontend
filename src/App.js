import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import data from "./data";
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
          
          <Route path="/home" element={<Auth> <Home data={data}/></Auth> } />
          <Route path="/trips" element={<Auth><TripIndex data={data} /></Auth>} />
          <Route path="/trips/:title" element={<Auth><MyTrip data={data} /></Auth>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
