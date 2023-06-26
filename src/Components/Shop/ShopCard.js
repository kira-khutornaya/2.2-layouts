import React from 'react';
import PropTypes from 'prop-types';

function ShopCard({ card }) {
  const {
    img,
    name,
    color,
    price,
  } = card;

  return (
    <article className="store__card">
      <img className="store-card__img" src={img} alt="" />

      <div className="store-card__content">
        <header className="store-card__header">
          <h3 className="store-card__name">
            <a className="store-card-name__link" href="#0">{name}</a>
          </h3>

          <div className="store-card__text">
            <p>{color}</p>
          </div>
        </header>

        <footer className="store-card__footer">
          <div className="store-card__prices">
            <span className="store-card__price store-card__new-price">
              $
              {price}
            </span>
          </div>
          <button className="store-card__add-button button" type="button">Add to cart</button>
        </footer>
      </div>
    </article>
  );
}

ShopCard.propTypes = {
  card: PropTypes.exact({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShopCard;
