import { getUser } from '../services/gitApi';

export const FETCH_USER_LOADING = 'GET_USER_LOADING';
export const FETCH_USER = 'GET_USER';
export const fetchUser = username => dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  return getUser(username)
    .then(user => dispatch({
      type: FETCH_USER,
      payload: user
    }));
};
