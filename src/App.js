import {React, useContext} from "react";
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/NavBar";
import { Context } from "./context/Context";
import Inicio from "./pages/Inicio"
import Page1 from "./pages/Page1"
import About from "./pages/About"
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

export default function App() {
  const {state} = useContext(Context)
  return (
    <>
      <Navbar/>
        <Routes>
        {<Route path="/" element={state.loged && <Inicio/>}/>}
        <Route path="/page1" element={state.loged && <Page1/>}/>
        <Route path="/about" element={state.loged && <About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}