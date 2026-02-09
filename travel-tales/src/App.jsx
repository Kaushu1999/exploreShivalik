import { Routes, Route } from "react-router-dom";
import React from "react";
import './App.css'
import HomePage from "./Pages/Home/HomePage";
import DestinationPage from "./Pages/Destination/DestinationPage";
import ToursPage from "./Pages/Tours/ToursPage";
import AboutPage from "./Pages/About/AboutPage";
import ContactPage from "./Pages/Contact/ContactPage";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
