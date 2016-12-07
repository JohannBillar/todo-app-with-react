import React, { PropTypes } from 'react';

const { func, string } = PropTypes;

const propTypes = {
  onInputSubmit: func.isRequired,
  onInputChange: func.isRequired,
  value: string.isRequired,
};

function DataEntry({ onInputSubmit, onInputChange, value }) {
  return (
    <form onSubmit={onInputSubmit}>
      <input
        placeholder="Enter a new item..."
        type="text"
        autoFocus
        onChange={onInputChange}
        value={value}
      />
      <button className="btn-small">+</button>
    </form>
  );
}

DataEntry.propTypes = propTypes;

export default DataEntry;
