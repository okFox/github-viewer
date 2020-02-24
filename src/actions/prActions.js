import { getPr } from '../services/gitApi';

export const FETCH_PR_LOADING = 'FETCH_PR_LOADING';
export const FETCH_PR = 'FETCH_PR';

export const fetchPr = pr => dispatch => {
  dispatch({ type: FETCH_PR_LOADING });
  return getPr(pr)
    .then(pr => dispatch({
      type: FETCH_PR,
      payload: pr
    }));
};
