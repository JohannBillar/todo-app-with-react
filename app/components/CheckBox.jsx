import React, { PropTypes } from 'react';

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
};

function CheckBox({ isChecked, toggleCheckbox }) {
  return (
    <input
      className="check-box"
      type="checkbox"
      checked={isChecked}
      onChange={toggleCheckbox}
    />
  );
}

CheckBox.propTypes = propTypes;

export default CheckBox;
