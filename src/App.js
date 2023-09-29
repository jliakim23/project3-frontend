import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MyTrip from "./pages/MyTrip";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trip" element={<MyTrip />} />
      </Routes>
    </div>
  );
}

export default App;
