import React, { PropTypes } from 'react';
import ListItem from './ListItem';

const propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

function ToDoList({ listItems, onDeleteItem }) {
  return (
    <ul>
      {listItems.map((item, index) => (
        <ListItem
          key={item.id}
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
