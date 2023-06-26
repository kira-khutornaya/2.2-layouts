import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ProductModel from '../models/ProductModel';
import ShopCard from './Shop/ShopCard';

function CardsView({ cards }) {
  return (
    <div className="store__cards">
      {cards.map((card) => (
        <ShopCard
          card={card}
          key={nanoid()}
        />
      ))}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.instanceOf(ProductModel).isRequired,
  ).isRequired,
};

export default CardsView;
