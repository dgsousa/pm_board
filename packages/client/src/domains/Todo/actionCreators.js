
export const addTodo = ({ todo }) => ({
  type: 'addTodo',
  todo,
});

export const updateCurrentTodo = ({ val }) => ({
  type: 'updateCurrentTodo',
  todo: val,
});

export const deleteTodo = ({ id }) => ({
  type: 'deleteTodo',
  id,
});
