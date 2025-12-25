import React from 'react';
import './Selection.css';

// Import des images
import gateauTourbillon from '../assets/gateauTourbillon.jpg';
import gateauFraiseTarte from '../assets/gateau-fraise-tarte.jpg';
import pateCreole from '../assets/pate-creole.jpg';
import gateauPatate from '../assets/gateau-patate.jpg';
import Cake from '../assets/cake.jpg';
import biscuit from '../assets/biscuit.JPG';
import box1biscuit from '../assets/box-biscuit1.JPG';
import box2biscuit from '../assets/box-biscuit2.JPG';
import brownie from '../assets/brownie.JPG';
import coeur from '../assets/coeur.JPG';
import cookie from '../assets/cookie.JPG';

function Selection() {
  return (
    <div className="selection-container">
      <p className="selection-intro">
  Bienvenue ! Voici les pâtisseries faites maison que nous proposons
</p>

      <div className="selection-grid">
        <div className="item">
          <img src={biscuit} alt="biscuit en forme de coeur" className="item-img" />
          <p className="item-name">Biscuit</p>
        </div>
        <div className="item">
          <img src={box1biscuit} alt="Box de divert biscuit" className="item-img" />
          <p className="item-name">Box de biscuit</p>
        </div>
        <div className="item">
          <img src={brownie} alt="brownie" className="item-img" />
          <p className="item-name">Brownie</p>
        </div>
        <div className="item">
          <img src={coeur} alt="Coeur en chocolat" className="item-img" />
          <p className="item-name">Coeur</p>
        </div>
        <div className="item">
          <img src={cookie} alt="Cookie" className="item-img" />
          <p className="item-name">Cookie</p>
        </div>
        <div className="item">
          <img src={gateauTourbillon} alt="Gâteau au fraise tourbillon" className="item-img" />
          <p className="item-name">Brioche chinoise</p>
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
