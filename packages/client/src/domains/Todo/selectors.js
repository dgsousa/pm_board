import { createSelector } from 'reselect';

const todoSelector = createSelector(
  state => state.getIn(['todo', 'todos']),
  (todos) => {
    const formattedTodos = [];
    todos.forEach((val, key) => formattedTodos.push({ key, val }));
    return formattedTodos;
  },
);

export default todoSelector;
