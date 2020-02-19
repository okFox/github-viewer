import { FETCH_USER_LOADING, fetchUser, FETCH_USER } from './userActions';

jest.mock('../../services/gitAPI.js');

describe('user actions', () => {
  const dispatch = jest.fn();
  const action = fetchUser('username');
  return action (dispatch)
    .then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: FETCH_USER_LOADING
      });
      expect(dispatch).toHaveBeenLastCalledWith({
        type: FETCH_USER,
        payload: {
          id: 1234,
          name: 'Atticus'
        }
      });
    });
});
