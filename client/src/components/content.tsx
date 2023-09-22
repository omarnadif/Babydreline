import React from 'react'
import './style.css'
import voiture from '../img/pngegg.png';






const content = () => {
  return (
<body className="bg-transparent content mt-5">
  <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-1 fw-bold text-white" style={{ 
        fontFamily: 'Georgia, serif', 
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
    }}>
      Réserver votre tour en Ferrari!
    </h1>
    <div className="col-lg-6 mx-auto">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="#">
          <button type="button" className="btn btn-lg px-4 gap-3" style={{ 
            background: '#c01414',
            color: 'white',
            borderRadius: '15px',
            fontFamily: 'Georgia, serif',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          }}>
            Découvrez immédiatement nos programmes!
          </button>
        </a>
      </div>
    </div>
  </div>
</body>







  )
}

export default content
