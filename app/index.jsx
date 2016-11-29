import React from 'react';
import { render } from 'react-dom';
import ToDoListApp from './components/ToDoListApp';

require('./sass/main.scss');

render(<ToDoListApp />, document.getElementById('root'));
