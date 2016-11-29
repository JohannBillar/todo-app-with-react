import React, { PropTypes, Component } from 'react';
import CheckBox from './CheckBox';

const propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  deleteListItem: PropTypes.func.isRequired,
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
    const isCheckedInStorage = JSON.parse(localStorage.getItem('isChecked'));
    if (isCheckedInStorage === true) {
      this.setState({
        toDoStatus: 'todo-done',
        isChecked: true,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isChecked !== this.state.isChecked) {
      localStorage.setItem('isChecked', JSON.stringify(this.state.isChecked));
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
        />
        {`${count} -   ${this.props.item}`}
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
