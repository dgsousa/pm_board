import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteTodo } from './actionCreators';

export default connect()(Todo);

function Todo({ dispatch, text, index }) {
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(index));
  };

  return (
    <div>
      <span>{ text }</span>
      <button
        type="button"
        onClick={handleDeleteTodo}
      >
        {'X'}
      </button>
    </div>
  );
}

Todo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
