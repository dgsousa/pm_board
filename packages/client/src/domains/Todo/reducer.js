import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
  currentTodo: '',
  todos: Immutable.Map({}),
});

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'addTodo':
      return addTodo(state, action);
    case 'updateCurrentTodo':
      return updateTodo(state, action);
    case 'deleteTodo':
      return deleteTodo(state, action);
    default:
      return state;
  }
}

function addTodo(state, action) {
  const { key, val } = action;
  const todos = state.get('todos');
  const updatedTodos = todos.set(`${key}`, val);
  return state
    .set('currentTodo', '')
    .set('todos', updatedTodos);
}

function updateTodo(state, { todo }) {
  return state.set('currentTodo', todo);
}

function deleteTodo(state, action) {
  const todos = state.get('todos');
  const updatedTodos = todos.filter((val, key) => key !== action.key);
  return state.set('todos', updatedTodos);
}
