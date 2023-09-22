import React from 'react'
import Footer from "../components/footer";
import Navbar from '../components/navbar';

const rdv = () => {
    return (
       <div>
        <Navbar />
        <div className="container rendezvous">

    <div className="py-5 text-center">
      <img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"></img>
      <h2>Formulaire de prise de rendez-vous</h2>
      <p className="lead">Vous trouverez ci-dessous un exemple de formulaire créé entièrement à l'aide des contrôles de formulaire Babydréline. Chaque ensemble de formulaires requis comporte une condition de validation qui peut être déclenchée en tentant de soumettre le formulaire sans le remplir.</p>
    </div>

    <div className="row g-3">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-body-secondary">panier</span>
          <span className="badge bg-secondary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">nom du produit</h6>
              <small className="text-body-secondary">Brève description</small>
            </div>
            <span className="text-body-secondary">12&nbsp;$</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Deuxième produit</h6>
              <small className="text-body-secondary">Brève description</small>
            </div>
            <span className="text-body-secondary">8&nbsp;$</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Le troisième élément</h6>
              <small className="text-body-secondary">Brève description</small>
            </div>
            <span className="text-body-secondary">5&nbsp;$</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
            <div className="text-success">
              <h6 className="my-0">Code promo</h6>
              <small>EXEMPLECODE</small>
            </div>
            <span className="text-success">-5$</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span></span>
            <strong></strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Code promo"></input>
            <button type="submit" className="btn btn-secondary">vérification</button>
          </div>
        </form>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Adresse de facturation</h4>
        <form className="needs-validation" > </form>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label"></label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" ></input>
              <div className="invalid-feedback">
                Veuillez entrer un prénom valide.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">nom de famille</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" ></input>
              <div className="invalid-feedback">
                Merci d'entrer un nom de famille valide.
             </div>
            </div>

            <div className="col-12">
              <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Nom d'utilisateur" ></input>
              <div className="invalid-feedback">
                Votre nom d'utilisateur est requis.
               </div>
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">E-mail<span className="text-body-secondary">(facultatif)</span></label>
              <input type="email" className="form-control" id="email" placeholder="vous@exemple.com"></input>
              <div className="invalid-feedback">
                Veuillez entrer une adresse e-mail valide pour recevoir des mises à jour sur l'expédition.
             </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">l'adresse</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Première rue" ></input>
              <div className="invalid-feedback">
                Prière d'indiquer ton adresse d'expédition.
             </div>
            </div>

            <div className="col-12">
              <label htmlFor="address2" className="form-label">Rubrique 2<span className="text-body-secondary">(facultatif)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Appartement 24"></input>
            </div>

            <div className="col-md-5">
              <label htmlFor="country" className="form-label">Pays</label>
              <select className="form-select" id="country" >
                <option value="">Choisir...</option>
                <option>USA</option>
              </select>
              <div className="invalid-feedback">
                Veuillez sélectionner un pays valide.
             </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="state" className="form-label">Région</label>
              <select className="form-select" id="state" >
                <option value="">Choisir...</option>
                <option>Californie</option>
              </select>
              <div className="invalid-feedback">
                Veuillez choisir un nom de région valide.
             </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">Code Postal</label>
              <input type="text" className="form-control" id="zip" placeholder="" ></input>
              <div className="invalid-feedback">
                Code postal requis.
             </div>
            </div>
          </div>

          <hr className="my-4"></hr>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address"></input>
            <label className="form-check-label" htmlFor="same-address">Votre adresse de livraison est la même que mon adresse de facturation</label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info"></input>
            <label className="form-check-label" htmlFor="save-info">Enregistrez ces informations pour la prochaine fois</label>
          </div>

          <hr className="my-4"></hr>

          <h4 className="mb-3">la façon de payer</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input"  ></input>
              <label className="form-check-label" htmlFor="credit">Carte de crédit</label>
            </div>
            <div className="form-check">
              <input id="cash" name="paymentMethod" type="radio" className="form-check-input" ></input>
              <label className="form-check-label" htmlFor="cash">Espèces</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" ></input>
              <label className="form-check-label" htmlFor="paypal">Pay Pal</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">Nom sur la Carte</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" ></input>
              <small className="text-body-secondary">Nom complet tel qu'affiché sur la carte</small>
              <div className="invalid-feedback">
                Le nom sur la carte est requis
             </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">Numéro de la carte</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" ></input>
              <div className="invalid-feedback">
                Numéro de carte de crédit requis
             </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">date de péremption</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" ></input>
              <div className="invalid-feedback">
                Date d'expiration requise
             </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">Code CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" ></input>
              <div className="invalid-feedback">
                Un code de sécurité est requis
             </div>
            </div>
          </div>

          <hr className="my-4"></hr>

          <button className="w-100 btn btn-primary btn-lg" type="submit">Continuer à payer</button>
       
      </div>
    </div>
 
  <footer className="my-5 pt-5 text-body-secondary text-center text-small">
    <p className="mb-1">© 2017-2023 Nom de l'entreprise</p>
    <ul className="list-inline">
      <li className="list-inline-item"><a href="#">politique de confidentialité</a></li>
      <li className="list-inline-item"><a href="#">Accord de l'utilisateur</a></li>
      <li className="list-inline-item"><a href="#">Support technique</a></li>
    </ul>
  </footer>
</div>
        <Footer />

       </div>
       
       )
    }
    
    export default rdv
    