import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Robot from "./Components/homepage/robot";
import Header from "./Components/Header";
import Footer from "./Components/footer";

function Home() {
  return <h1>Home Page ✅</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Robot />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;