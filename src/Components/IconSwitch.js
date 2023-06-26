import React from 'react';
import PropTypes from 'prop-types';

function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="store__control">
      <button
        className="store-control__button"
        type="button"
        onClick={onSwitch}
      >
        <span className="material-icons">
          {icon}
        </span>
      </button>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
