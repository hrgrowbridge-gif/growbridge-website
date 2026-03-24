import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Robot from "./Components/homepage/robot";
import Footer from "./Components/footer";
import Card from "./Components/Cards"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Robot />} />
        <Route path="/card" element={<Card/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;