import React from "react";
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/NavBar";
import Inicio from "./pages/Inicio"
import Page1 from "./pages/Page1"
import About from "./pages/About"
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/page1" element={<Page1/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}