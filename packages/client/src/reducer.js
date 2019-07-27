export const initialState = {
  currentTodo: '',
  todos: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state);
    case 'UPDATE_TODO':
      return updateTodo(state, action);
    case 'DELETE_TODO':
      return deleteTodo(state, action);
    default:
      return state;
  }
}

function addTodo(state) {
  return {
    ...state,
    currentTodo: '',
    todos: [
      ...state.todos,
      {
        text: state.currentTodo,
        id: Math.random(),
      },
    ],
  };
}

function updateTodo(state, action) {
  return {
    ...state,
    currentTodo: action.todo,
  };
}

function deleteTodo(state, action) {
  return {
    ...state,
    todos: state.todos.filter((todo, index) => index !== action.index),
  };
}
