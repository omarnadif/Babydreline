import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Content from "./components/content";
import Permis from './components/permis';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";







const App: React.FC = () => {
  return (

  <Router>
   
    <Route path="/permis" Component={Permis} />
      <Navbar />
      <Content />
      <Footer />
   
  </Router>
     

  );
};

export default App;
