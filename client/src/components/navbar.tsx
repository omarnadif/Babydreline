import React from 'react'
import './style.css'
import "bootstrap/dist/css/bootstrap.css";
import logo from 'C:/Users/Loris/Desktop/L1_ECO_GETION/MDS/B3_DEV/Crazy_DEV/Projet/Babydreline/client/src/img/logo.png';



const navbar = () => {
  return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
      <img src={logo} alt="logo" className='logo'></img> 
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" className="nav-link px-2">Features</a></li>
        <li><a href="#" className="nav-link px-2">Pricing</a></li>
        <li><a href="#" className="nav-link px-2">FAQs</a></li>
        <li><a href="#" className="nav-link px-2">About</a></li>
      </ul>

      <div className="col-md-3 text-end">
        
        <button type="button" className="btn btn-primary btn-babydreline">Prendre rendez-vous</button>
      </div>
    </header>
  </div>
  )
}

export default navbar

