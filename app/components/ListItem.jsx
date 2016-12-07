import React, { PropTypes, Component } from 'react';
import CheckBox from './CheckBox';

const { number, string, func } = PropTypes;

const propTypes = {
  index: number.isRequired,
  item: string.isRequired,
  deleteListItem: func.isRequired,
  id: number.isRequired,
};

class ListItem extends Component {
  constructor() {
    super();
    this.handleDeleteListItem = this.handleDeleteListItem.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.state = {
      toDoStatus: 'todo-not-done',
      isChecked: false,
    };
  }

  componentWillMount() {
    const isCheckedInStorage = JSON.parse(localStorage.getItem(JSON.stringify(this.props.id)));
    if (isCheckedInStorage) {
      this.toggleCheckbox();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isChecked !== this.state.isChecked) {
      localStorage.setItem(JSON.stringify(this.props.id), JSON.stringify(this.state.isChecked));
    }
  }

  handleDeleteListItem() {
    this.props.deleteListItem(this.props.index);
  }

  toggleCheckbox() {
    this.setState({
      toDoStatus: !this.state.isChecked ? 'todo-done' : 'todo-not-done',
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    const count = this.props.index + 1;
    const toDoStatus = this.state.toDoStatus;
    return (
      <li className={toDoStatus}>

        <CheckBox
          isChecked={this.state.isChecked}
          toggleCheckbox={this.toggleCheckbox}
          id={this.props.id}
        >
          {`${count} -   ${this.props.item}`}
        </CheckBox>

        <button
          className="btn-x-small"
          onClick={this.handleDeleteListItem}
        >
          x
        </button>

      </li>
    );
  }
}

ListItem.propTypes = propTypes;

export default ListItem;
