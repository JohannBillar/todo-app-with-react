import React, { PropTypes } from 'react';

const { bool, func, number, string } = PropTypes;

const propTypes = {
  isChecked: bool.isRequired,
  toggleCheckbox: func.isRequired,
  id: number.isRequired,
  children: string.isRequired,
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
