import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from './Todo';
import { addTodo, updateCurrentTodo } from './actionCreators';

function mapStateToProps({ todos, currentTodo }) {
  return {
    currentTodo,
    todos,
  };
}

export default connect(mapStateToProps)(App);

function App({ dispatch, todos, currentTodo }) {
  const handleAddTodo = () => {
    dispatch(addTodo());
  };

  const handleUpdateTodo = (e) => {
    dispatch(updateCurrentTodo(e.target.value));
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

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  currentTodo: PropTypes.string.isRequired,
};
