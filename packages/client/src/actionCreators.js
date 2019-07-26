
export const addTodo = () => ({
  type: 'ADD_TODO',
});

export const updateCurrentTodo = val => ({
  type: 'UPDATE_TODO',
  todo: val,
});
