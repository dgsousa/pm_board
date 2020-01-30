import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteTodoThunk } from '../thunks';

export default connect()(Todo);

function Todo({ dispatch, text, id }) {
  const handleDeleteTodo = () => {
    dispatch(deleteTodoThunk({ id }));
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
  id: PropTypes.string.isRequired,
};
