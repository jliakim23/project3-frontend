import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar';
import Nav from './components/Nav';
import Home from './pages/Home';
import MyTrip from './pages/MyTrip';







function App() {
  return (
    <div>
   <Nav />
   <Routes>
<Route path="/" element={<Home />} />
<Route path='/Trip' element={<MyTrip />} />
    </Routes>
      <Calendar />
    </div>
  );
}

export default App;
