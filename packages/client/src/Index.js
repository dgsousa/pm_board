import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';

const initialState = {
  currentTodo: '',
  todos: [],
};

const store = createStore(firstReducer, initialState);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app'),
);


function firstReducer(state, action) {
  const { todos, currentTodo } = state;
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...todos,
          {
            text: currentTodo,
            id: Math.random(),
          },
        ],
      };
    case 'UPDATE_TODO':
      return { ...state, currentTodo: action.todo };
    default:
      return state;
  }
}
