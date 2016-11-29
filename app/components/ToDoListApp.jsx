import React, { Component } from 'react';
import DataEntry from './DataEntry';
import ToDoList from './ToDoList';

class ToDoListApp extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.state = {
      value: '',
      listItems: [],
    };
  }

  componentWillMount() {
    const localItems = JSON.parse(localStorage.getItem('listItems'));
    if (localItems.length > 0) {
      this.setState({ listItems: this.state.listItems.concat(localItems) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.listItems.length !== this.state.listItems.length) {
      localStorage.setItem('listItems', JSON.stringify(this.state.listItems));
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = { text: this.state.value, id: Date.now() };
    this.setState(prevState => ({
      listItems: prevState.listItems.concat(newItem),
      value: '',
    }));
  }

  handleDeleteItem(index) {
    this.setState({
      listItems: this.state.listItems.filter((el, idx) => (
        idx !== index
      )),
    });
  }

  render() {
    return (
      <div className="container">
        <h1>ToDo List Creater</h1>
        <div className="todo-list">
          <DataEntry
            onInputSubmit={this.handleSubmit}
            value={this.state.value}
            onInputChange={this.handleChange}
          />
          {this.state.listItems.length > 0 &&
            <ToDoList
              listItems={this.state.listItems}
              onDeleteItem={this.handleDeleteItem}
            />
          }
        </div>
      </div>
    );
  }
}

export default ToDoListApp;
