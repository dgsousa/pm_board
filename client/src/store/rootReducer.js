import { combineReducers } from 'redux-immutable';
import todoReducer from '../domains/Todo/reducer';

export default combineReducers({
  todo: todoReducer,
});
