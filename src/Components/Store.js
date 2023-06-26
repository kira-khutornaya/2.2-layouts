import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductModel from '../models/ProductModel';
import IconSwitch from './IconSwitch';
import CardView from './CardsView';
import ListView from './ListView';

function Store({ products }) {
  const [mode, setMode] = useState(true);
  const onSwitch = () => {
    setMode(!mode);
  };

  return (
    <div className="store__wrapper">
      <div className="store">
        <IconSwitch
          icon={mode ? 'view_list' : 'view_module'}
          onSwitch={onSwitch}
        />

        {mode ? <CardView cards={products} /> : <ListView items={products} />}
      </div>
    </div>
  );
}

Store.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.instanceOf(ProductModel).isRequired,
  ).isRequired,
};

export default Store;
