import React from 'react';
import './Patisserie.css';

function Patisserie() {
  return (
    <div className="patisserie-container">
      <h2 className="patisserie-title">Notre carte de pâtisseries</h2>

      <section>
        <h3>Grands classiques de la pâtisserie</h3>
        <ul>
          <li>Marbré — 10€</li>
          <li>Tarte aux fruits — 15€ à 20€</li>
          <li>Madeleines — 12€ pour 20</li>
          <li>Gâteau moelleux au chocolat — 10€</li>
          <li>Muffins — 1€ l’unité</li>
          <li>Palets bretons — 10€ pour 15</li>
          <li>Cake 4 quarts — 10€</li>
          <li>Brioche — 12€</li>
          <li>Chinois — 15€</li>
          <li>Cake salé — 15€</li>
        </ul>
      </section>

      <section>
        <h3>Biscuits</h3>
        <ul>
          <li>Cookies — 20€ pour 30</li>
          <li>Sablés coco ou amande — 5€ pour 20</li>
          <li>Sablés chocolat — 5€ pour 20</li>
          <li>Sablés damiers/spirales — 6€ pour 20</li>
        </ul>
      </section>

      <section>
        <h3>Spécialités créoles</h3>
        <ul>
          <li>Pâté créole — 12€ à 15€</li>
          <li>Rochers coco — 10€ pour 20</li>
          <li>Gâteau ananas — 12€</li>
          <li>Bonbons bananes — 10€ pour 20</li>
          <li>Gâteau patate/chouchou/manioc — 12€</li>
          <li>Gâteau Ti-son — 12€</li>
        </ul>
      </section>

      <section>
        <h3>À offrir ou à partager</h3>
        <ul>
          <li>Pochon de 20 biscuits sablés — 5€</li>
          <li>Assiette de 25 biscuits sablés — 8€</li>
          <li>Box de 150 biscuits sablés — 40€</li>
          <li>Box événement (babyshower, anniversaire, mariage, Noël…) — nous consulter</li>
          <li>Box pique-nique sucré/salé — nous consulter</li>
        </ul>
      </section>
    </div>
  );
}

export default Patisserie;
