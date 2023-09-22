import React from 'react'
import './style.css'

const footer = () => {
  return (
    <footer className="footer">
        <footer className="footer mt-auto py-3 bg-body-tertiary">
        <div className="container py-5">
      <div className="row py-4 piedpage">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3"></img>
          <p className="font-italic text-muted">Découvrez le monde du luxe en miniature ! Offrez à votre enfant l'expérience ultime de conduire une Lamborghini en toute sécurité. Babydréline.com, où les rêves deviennent réalité pour les plus jeunes conducteurs.</p>
          <ul className="list-inline mt-4">
            <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Magasin</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-muted"> T-Shirt</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Pantalon</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Casques</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Nos voitures</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Notre entreprise </h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-muted">Connexion</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Inscription</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Liste de shouait</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Nos produits</a></li>
          </ul>
        </div>
      </div>
    </div>

   
    <div className="bg-light py-4">
      <div className="container text-center">
        <p className="text-muted mb-0 py-2">© 2019 Babydréline All rights reserved.</p>
      </div>
    </div>
</footer>
    </footer>
  )
}

export default footer
