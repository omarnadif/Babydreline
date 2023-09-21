import React from 'react'
import './style.css'
import voiture from 'C:/Users/Loris/Desktop/L1_ECO_GETION/MDS/B3_DEV/Crazy_DEV/Projet/Babydreline/client/src/img/pngegg.png';






const content = () => {
  return (
    <body className="content">
       <div className="px-4 py-5 my-5 text-center">
    <img className="voiture" src={voiture} alt="" width="72" height="57"></img>
    <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="#"><button type="button" className="btn btn-primary btn-lg px-4 gap-3 btn-babydreline">Permis de conduire</button></a>
      
          <div>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Code de la route</button>
          </div>
        


      </div>
    </div>
  </div>
    </body>
  )
}

export default content
