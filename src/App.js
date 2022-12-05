import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
