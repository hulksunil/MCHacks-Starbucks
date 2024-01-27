import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from './components/Demo';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<></>} />
        <Route path="FAQ" element={<></>} />
        <Route path="Demo" element={<Demo />} />
        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;