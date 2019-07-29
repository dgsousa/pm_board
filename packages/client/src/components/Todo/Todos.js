import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from './Todo';
import { addTodoThunk, updateCurrentTodoThunk } from './thunks';

function mapStateToProps({ todos, currentTodo }) {
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
    dispatch(updateCurrentTodoThunk(e.target.value));
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
        todos.map((todo, index) => (
          <Todo
            key={todo.id}
            text={todo.text}
            index={index}
          />
        ))
      }
    </Fragment>
  );
}

Todos.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  currentTodo: PropTypes.string.isRequired,
};
