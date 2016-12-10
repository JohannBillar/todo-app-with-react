import React, { PropTypes } from 'react';

const { arrayOf, element } = PropTypes;

function Container({ children }) {
  return (
    <div className="container">
      <div className="todo-list">
        {children}
      </div>
    </div>
  );
}

Container.propTypes = { children: arrayOf(element.isRequired) };

export default Container;
