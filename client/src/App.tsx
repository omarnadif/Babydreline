import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Content from "./components/content";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="App">
       <Content />
      </div>
      <Footer />
    </>
  );
};

export default App;
