import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import './App.css'
import HomePage from "./Pages/Home/HomePage";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact us</Link>
      </Navbar>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
