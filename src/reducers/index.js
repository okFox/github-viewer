import { combineReducers } from 'redux';
import user from './userReducer';
import repos from './repoReducer';

export default combineReducers({
  user,
  repos
});
