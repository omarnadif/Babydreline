import React from 'react'
import '../components/style.css'
import voiture from '../img/pngegg.png';
import Footer from "../components/footer";
import Navbar from "../components/navbar";


const ferrariModels = [
  { name: 'Ferrari 488', imgSrc: 'url-per-ferrari-488.jpg' },
  { name: 'Ferrari F8 Tributo', imgSrc: '../img/url-per-ferrari-488.jpg' },
  { name: 'Ferrari LaFerrari', imgSrc: 'url-per-laferrari.jpg' },
  { name: 'Ferrari Portofino', imgSrc: 'url-per-portofino.jpg' },
  { name: 'Ferrari Roma', imgSrc: 'url-per-roma.jpg' },
  { name: 'Ferrari SF90 Stradale', imgSrc: 'url-per-sf90.jpg' },
];

const Permis = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {ferrariModels.map((model, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm mb-4">
                <img src={model.imgSrc} className="card-img-top" alt={model.name} />
                <div className="card-body">
                  <h5 className="card-title">{model.name}</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn btn-primary">Réservez maintenant</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </>
  );
};

export default Permis;
