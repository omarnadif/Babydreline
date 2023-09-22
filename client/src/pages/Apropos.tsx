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
        <h1 className="display-5 fw-bold">Le permis de conduire :</h1>
        <p className="col-md-8 fs-4"> la clé de votre liberté sur la route ! Obtenez le vôtre dès aujourd'hui et ouvrez les portes d'un monde d'aventures et de possibilités. Ne laissez pas cette chance vous échapper, lancez-vous vers l'indépendance au volant !</p>
        <button className="btn btn-primary btn-lg" type="button"> Commencer maintenant</button>
      </div>
    </div>

    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <h2>Notre shop</h2>
          <p>Plongez dans un monde d'opportunités et d'innovations en explorant notre boutique en ligne. Trouvez les produits les plus tendance et les offres exclusives qui vous accompagneront dans votre quotidien. Ne tardez pas, découvrez le store de notre site et faites-vous plaisir dès aujourd'hui !</p>
          <button className="btn btn-outline-light" type="button">Visiter maintenant</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Explorer</h2>
          <p>
Explorez notre sélection époustouflante de voitures de rêve, prêtes à vous faire vibrer. Des modèles exclusifs vous attendent pour une expérience unique. Découvrez notre gamme et laissez-vous séduire par l'élégance et la puissance à l'état pur.</p>
          <button className="btn btn-outline-secondary" type="button">Découvrir</button>
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
