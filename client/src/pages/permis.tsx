import React from 'react'
import '../components/style.css'
import voiture from '../img/pngegg.png';
import Footer from "../components/footer";
import Navbar from "../components/navbar";






const Permis = () => {
  return (
    <><Navbar />
   <div className="container py-4">
    
     
   

    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">Le permis de conduire : la clé de votre liberté sur la route ! Obtenez le vôtre dès aujourd'hui et ouvrez les portes d'un monde d'aventures et de possibilités. Ne laissez pas cette chance vous échapper, lancez-vous vers l'indépendance au volant !</p>
        <button className="btn btn-primary btn-lg" type="button"> Le permis de conduire : la clé de votre liberté sur la route ! Obtenez le vôtre dès aujourd'hui et ouvrez les portes d'un monde d'aventures et de possibilités. Ne laissez pas cette chance vous échapper, lancez-vous vers l'indépendance au volant !</button>
      </div>
    </div>

    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button className="btn btn-outline-light" type="button">Example button</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button className="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
    </div>

    <footer className="pt-3 mt-4 text-body-secondary border-top">
      © 2023
    </footer>
  </div>
    <Footer /></>
  )
}

export default Permis
