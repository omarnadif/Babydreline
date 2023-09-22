import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";
import Apropos from "./pages/Apropos";
import Login from "./pages/login";
import Home from "./pages/home";
import "./App.css";
import FAQ from "./pages/faq"
import Code from "./pages/code"
import RDV from "./pages/rdv"


function App() {
  return (
    <div id="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/permis" element={<Apropos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/code" element={<Code />} />
        <Route path="/rdv" element={<RDV />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
