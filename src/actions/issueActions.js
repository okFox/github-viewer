import { getIssue } from '../services/gitApi';

export const FETCH_ISSUE_LOADING = 'FETCH_ISSUE_LOADING';
export const FETCH_ISSUE = 'FETCH_ISSUE';

export const fetchIssue = issue => dispatch => {
  dispatch({ type: FETCH_ISSUE_LOADING });
  return getIssue(issue)
    .then(issue => dispatch({
      type: FETCH_ISSUE,
      payload: issue
    }));
};
