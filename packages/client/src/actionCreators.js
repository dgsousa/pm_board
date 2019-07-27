
export const addTodo = () => ({
  type: 'ADD_TODO',
});

export const updateCurrentTodo = val => ({
  type: 'UPDATE_TODO',
  todo: val,
});

export const deleteTodo = index => ({
  type: 'DELETE_TODO',
  index,
});
