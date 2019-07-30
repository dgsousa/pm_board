import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { addTodoThunk, updateCurrentTodoThunk } from '../thunks';
import todoSelector from '../selectors';

function mapStateToProps(state) {
  const currentTodo = state.getIn(['todo', 'currentTodo']);
  const todos = todoSelector(state);
  return {
    currentTodo,
    todos,
  };
}

export default connect(mapStateToProps)(Todos);

function Todos({ dispatch, todos, currentTodo }) {
  const handleAddTodo = () => {
    dispatch(addTodoThunk());
  };

  const handleUpdateTodo = (e) => {
    dispatch(updateCurrentTodoThunk({ val: e.target.value }));
  };

  return (
    <Fragment>
      <div>make a Todo Item!</div>
      <input
        type="text"
        onChange={handleUpdateTodo}
        value={currentTodo}
      />
      <button
        type="button"
        onClick={handleAddTodo}
      >
        { 'Click Here' }
      </button>
      {
        todos.map(({ key, val }) => (
          <Todo
            key={key}
            text={val}
            id={key}
          />
        ))
      }
    </Fragment>
  );
}

Todos.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape).isRequired,
  currentTodo: PropTypes.string.isRequired,
};
