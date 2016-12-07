import React, { PropTypes } from 'react';
import ListItem from './ListItem';

const { arrayOf, object, func } = PropTypes;

const propTypes = {
  listItems: arrayOf(object).isRequired,
  onDeleteItem: func.isRequired,
};

function ToDoList({ listItems, onDeleteItem }) {
  return (
    <ul>
      {listItems.map((item, index) => (
        <ListItem
          key={item.id}
          id={item.id}
          index={index}
          item={item.text}
          deleteListItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}

ToDoList.propTypes = propTypes;

export default ToDoList;
