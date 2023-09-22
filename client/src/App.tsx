import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";
import Permis from "./pages/permis";
import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <div id="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/permis" element={<Permis />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
