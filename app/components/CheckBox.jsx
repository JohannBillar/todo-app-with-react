import React, { PropTypes } from 'react';

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

function CheckBox({ isChecked, toggleCheckbox, id, children }) {
  return (
    <label htmlFor={id}>
      <input
        className="checkbox-input"
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        id={id}
      />
      {children}
    </label>
  );
}

CheckBox.propTypes = propTypes;

export default CheckBox;
