import {
  addTodo,
  updateCurrentTodo,
  deleteTodo,
} from './actionCreators';

export function addTodoThunk() {
  return (dispatch, getState, ioRequest) => {
    const todo = getState().getIn(['todo', 'currentTodo']);
    return ioRequest(addTodo({ todo }));
  };
}

export function updateCurrentTodoThunk({ val }) {
  return dispatch => dispatch(updateCurrentTodo({ val }));
}

export function deleteTodoThunk({ id }) {
  return (dispatch, getState, ioRequest) => ioRequest(deleteTodo({ id }));
}
