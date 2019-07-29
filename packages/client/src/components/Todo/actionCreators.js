
export const addTodo = ({ todo, index }) => ({
  type: 'addTodo',
  todo,
  index,
});

export const updateCurrentTodo = val => ({
  type: 'updateCurrentTodo',
  todo: val,
});

export const deleteTodo = index => ({
  type: 'deleteTodo',
  index,
});
