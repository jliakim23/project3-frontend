import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import data from "./data";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MyTrip from "./pages/MyTrip";
import TripIndex from "./pages/TripIndex";
import AuthPage from './pages/AuthPage/AuthPage'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
    <Route path="/" element={<AuthPage/>}  />
          <Route path="/home" element={<Home />} />
          <Route path="/trips" element={<TripIndex data={data} />} />
          <Route path="/trips/:title" element={<MyTrip data={data} />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
