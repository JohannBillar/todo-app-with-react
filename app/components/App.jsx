import React, { Component } from 'react';
import Container from './Container';
import DataEntry from './DataEntry';
import ToDoList from './ToDoList';

class ToDoListContainer extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitItem = this.handleSubmitItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);

    this.state = {
      value: '',
      items: [],
    };
  }

  componentWillMount() {
    const localItems = JSON.parse(localStorage.getItem('storedListItems'));
    if (localItems) {
      this.setState({ items: this.state.items.concat(localItems) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      localStorage.setItem('storedListItems', JSON.stringify(this.state.items));
    }
  }

  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmitItem(e) {
    e.preventDefault();
    if (this.state.value) {
      const newItem = { text: this.state.value, id: Date.now() };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        value: '',
      }));
    } else {
      console.warn('oh no..., empty task!');
    }
  }

  handleDeleteItem(index) {
    this.setState({
      items: this.state.items.filter((el, idx) => (
        idx !== index
      )),
    });
  }

  render() {
    const list = (this.state.items.length > 0) ?
      (<ToDoList
        listItems={this.state.items}
        onDeleteItem={this.handleDeleteItem}
      />) : (<div> You have nothing that needs to be done...?</div>);

    return (
      <Container>
        <DataEntry
          onInputSubmit={this.handleSubmitItem}
          value={this.state.value}
          onInputChange={this.handleInputChange}
        />
        {list}
      </Container>
    );
  }
}

function App() {
  return <ToDoListContainer />;
}

export default App;
