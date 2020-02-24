import { getRepo } from '../services/gitApi';

export const FETCH_REPO_LOADING = 'FETCH_REPO_LOADING';
export const FETCH_REPO = 'FETCH_REPO';

export const fetchRepo = repo => dispatch => {
  dispatch({ type: FETCH_REPO_LOADING });
  return getRepo(repo)
    .then(repo => dispatch({
      type: FETCH_REPO,
      payload: repo
    }));
};
