import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home"
import Card from "./pages/Card"
import Profile from "./pages/Profile"
import Map from "./pages/Map"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
