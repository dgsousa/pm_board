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

export function addTodo(state, { key, val }) {
  return state
    .set('currentTodo', '')
    .setIn(['todos', key], val);
}

export function updateTodo(state, { todo }) {
  return state.set('currentTodo', todo);
}

export function deleteTodo(state, action) {
  const todos = state.get('todos');
  const updatedTodos = todos.filter((val, key) => key !== action.key);
  return state.set('todos', updatedTodos);
}
