import React from 'react';
import PropTypes from 'prop-types';

function ShopItem({ item }) {
  const {
    name,
    color,
    img,
    price,
  } = item;

  return (
    <article className="store__item">
      <img className="store-item__img" src={img} alt="" />

      <h3 className="store-card__name">
        <a className="store-card-name__link" href="#0">{name}</a>
      </h3>

      <div className="store-card__text">
        <p>{color}</p>
      </div>

      <div className="store-item__prices">
        <span className="store-card__price store-card__new-price">
          $
          {price}
        </span>
      </div>
      <button className="store-item__add-button button" type="button">Add to cart</button>
    </article>
  );
}

ShopItem.propTypes = {
  item: PropTypes.exact({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShopItem;
