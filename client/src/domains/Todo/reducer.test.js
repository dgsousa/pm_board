import {
  addTodo,
  updateTodo,
  deleteTodo,
  initialState,
} from './reducer';


test('addTodo', () => {
  const action = {
    key: '123',
    val: 'Run the test',
  };
  const newState = addTodo(initialState, action);
  expect(newState.toJS()).toMatchSnapshot();
});

test('updateTodo', () => {
  const currentState = initialState.set('currentTodo', 'updated');
  const action = {
    todo: 'updated Todo',
  };

  const newState = updateTodo(currentState, action);
  expect(newState.toJS()).toMatchSnapshot();
});

test('deleteTodo', () => {
  const currentState = initialState.setIn(['todos', 'testKey'], 'testVal');
  const action = {
    key: 'testKey',
  };
  const newState = deleteTodo(currentState, action);
  expect(newState.toJS()).toMatchSnapshot();
});
