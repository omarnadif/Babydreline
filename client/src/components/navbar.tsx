import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './style.css'
import logo from '../img/logo.png';



const navbar = () => {
  return (
<div className="container-fluid bg-black">
  <header className="d-flex flex-wrap align-items-center justify-content-between  ">
    <div className="col-md-3 mb-2 mb-md-0 ">
      <img src={logo} alt="logo" className="logo"></img>
      <a href="/" className="d-inline-flex text-white text-decoration-none">
        <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
          <use href="#bootstrap"></use>
        </svg>
      </a>
    </div>

    <nav className="col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <ul className="nav">
        <li><a href="#" className="nav-link px-2 text-white">Home</a></li>
        <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
        <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
        <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
        <li><a href="#" className="nav-link px-2 text-white">About</a></li>
      </ul>
    </nav>

    <div className="col-md-3 text-end">
    <button type="button" className="btn btn-danger text-white">Login</button>

    </div>
  </header>
</div>

  )
}

export default navbar

