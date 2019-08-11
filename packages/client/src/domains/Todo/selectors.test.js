import Immutable from 'immutable';
import todoSelector from './selectors';

const state = Immutable.fromJS({
  todo: {
    todos: {
      one: 'go to store',
      two: 'setup jest',
    },
  },
});

test('todoSelector', () => {
  const todos = todoSelector(state);
  expect(todos).toMatchSnapshot();
});
