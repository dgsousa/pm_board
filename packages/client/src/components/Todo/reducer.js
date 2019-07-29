export const initialState = {
  currentTodo: '',
  todos: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      return addTodo(state, action);
    case 'updateCurrentTodo':
      return updateTodo(state, action);
    // case 'DELETE_TODO':
    //   return deleteTodo(state, action);
    default:
      return state;
  }
}

function addTodo(state, action) {
  const { val, key } = action;
  return {
    ...state,
    currentTodo: '',
    todos: [
      ...state.todos,
      {
        text: val,
        id: key,
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

// function deleteTodo(state, action) {
//   return {
//     ...state,
//     todos: state.todos.filter((todo, index) => index !== action.index),
//   };
// }
