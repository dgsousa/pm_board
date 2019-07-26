import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTodo, updateCurrentTodo } from './actionCreators';

function mapStateToProps({ todos }) {
  return {
    todos,
  };
}

export default connect(mapStateToProps)(App);

function App({ dispatch, todos }) {
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
      />
      <button
        type="button"
        onClick={handleAddTodo}
      >
        { 'Click Here' }
      </button>
      {
        todos.map(todo => (
          <div key={todo.id}>{todo.text}</div>
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
};
