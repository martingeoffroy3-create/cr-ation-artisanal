import React from 'react';
import './Selection.css';

// Import des images
import gateauTourbillon from '../assets/gateauTourbillon.jpg';
import gateauFraiseTarte from '../assets/gateau-fraise-tarte.jpg';
import pateCreole from '../assets/pate-creole.jpg';
import gateauPatate from '../assets/gateau-patate.jpg';
import Cake from '../assets/cake.jpg';

function Selection() {
  return (
    <div className="selection-container">
      <h2 className="selection-title">Nos Sélections</h2>
      <div className="selection-grid">
        <div className="item">
          <img src={gateauTourbillon} alt="Gâteau au fraise tourbillon" className="item-img" />
          <p className="item-name">Gâteautourbillon</p>
        </div>
        <div className="item">
          <img src={gateauFraiseTarte} alt="Gâteau au fraise tarte" className="item-img" />
          <p className="item-name">Gâteau au fraise (tarte)</p>
        </div>
        <div className="item">
          <img src={pateCreole} alt="Pâté créole" className="item-img" />
          <p className="item-name">Pâté créole</p>
        </div>
        <div className="item">
          <img src={gateauPatate} alt="Gâteau patate" className="item-img" />
          <p className="item-name">Gâteau patate</p>
        </div>
        <div className="item">
          <img src={Cake} alt="Gâteau au fraise cake" className="item-img" />
          <p className="item-name">Cake</p>
        </div>
      </div>
    </div>
  );
}

export default Selection;
